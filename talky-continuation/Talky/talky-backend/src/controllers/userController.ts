import mssql from "mssql";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sqlConfig } from "../config/sqlConfig";
import { v4 } from "uuid";
import { Request, response, Response } from "express";

import {
  validateLoginUser,
  validateRegisterUser,
} from "../validators/userValidator";

import Connection from "../services/dbConnect";

// import { ExtendedUser } from "../middleware/verifyToken";

const dbhelpers = new Connection();

export const registerUser = async (req: Request, res: Response) => {
  try {
    let { username, email, password } = req.body;
    let _id = v4();
    let { error } = validateRegisterUser.validate(req.body);

    if (error) {
      return res.status(404).json({
        message: "Either username, email or password may be incorrect ",
        error: error.details,
      });
    }

    const hashedPwd = await bcrypt.hash(password, 5);

    const pool = await mssql.connect(sqlConfig);

    let result = await pool
      .request()
      .input("_id", mssql.VarChar, _id)
      .input("username", mssql.VarChar, username)
      .input("email", mssql.VarChar, email)
      .input("password", mssql.VarChar, hashedPwd)
      .execute("registerUser");

    console.log(result);

    return res.status(200).json({
      message: "User Registered Successfully!",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      error: error,
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const { error } = validateLoginUser.validate(req.body);

    if (error) {
      return res.status(422).json({
        error: error.message,
      });
    }

    const pool = await mssql.connect(sqlConfig);

    const user = (
      await pool.request().input("email", email).execute("loginUser")
    ).recordset;

    if (user.length === 0) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    const correctPwd = await bcrypt.compare(password, user[0]?.password);

    if (!correctPwd) {
      return res.status(401).json({
        error: "Incorrect Password",
      });
    }

    const { password: _, ...userInfo } = user[0];

    const token = jwt.sign(userInfo, process.env.SECRET as string, {
      expiresIn: "48hr",
    });

    return res.status(200).json({
      message: "Logged in Successfully",
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const pool = await mssql.connect(sqlConfig);

    let users = (await pool.request().execute("getAllUsers")).recordset;

    return res.status(200).json({
      users: users,
    });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};

export const addFollower = async (req: Request, res: Response) => {
  try {
    const { user_id, follower_user_id } = req.body;
    const follower_id = v4();

    const pool = await mssql.connect(sqlConfig);

    await pool
      .request()
      .input("follower_id", mssql.VarChar, follower_id)
      .input("user_id", mssql.VarChar, user_id)
      .input("follower_user_id", mssql.VarChar, follower_user_id)
      .execute("addFollower");

    return res.status(200).json({
      message: "Follower added successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};

export const getFollowers = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params;

    console.log(`Fetching followers for user_id: ${user_id}`);

    const pool = await mssql.connect(sqlConfig);

    const followers = (
      await pool
        .request()
        .input("user_id", mssql.VarChar, user_id)
        .execute("getFollowers")
    ).recordset;

    console.log("Followers retrieved successfully:", followers);

    return res.status(200).json({
      followers: followers,
    });
  } catch (error) {
    console.error("Error in getFollowers:", error);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
};



export const getOneUser = async (req: Request, res: Response) => {


  const { user_id } = req.params;

  try {

    
    const pool = await mssql.connect(sqlConfig);

    const user = (
      await pool
        .request()
        .input("user_id", mssql.VarChar, user_id)
        .execute("getOneUser")
    ).recordset;

    // console.log("user is ",user);
    res.status(200).json(user);
    

  } catch (error) {
    
  }
}

