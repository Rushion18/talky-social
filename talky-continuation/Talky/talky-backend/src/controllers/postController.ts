import { v4 } from "uuid";
import mssql from "mssql";
import Connection from "../services/dbConnect";
import { Request, Response } from "express";
import { sqlConfig } from "../config/sqlConfig";

const dbhelper = new Connection();

export const createPost = async (req: Request, res: Response) => {
  try {
    const id = v4();

    const { post_description, post_image, user_id } = req.body;

    dbhelper.execute("createpost", {
      post_id: id,
      post_description,
      post_image,
      user_id
    });

    return res.status(200).json({
      message: "Post created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: error
    });
  }
};

export const addComment = async (req: Request, res: Response) => {
  try {
      const { user_id, post_id, comment_text } = req.body;
      const comment_id = v4();

      const pool = await mssql.connect(sqlConfig);

      await pool
          .request()
          .input("comment_id", mssql.VarChar, comment_id)
          .input("user_id", mssql.VarChar, user_id)
          .input("post_id", mssql.VarChar, post_id)
          .input("comment_text", mssql.VarChar, comment_text)
          .execute("addComment");

      return res.status(200).json({
          message: "Comment added successfully",
      });
  } catch (error) {
      console.error("Error in addComment:", error);
      return res.status(500).json({
          error: "Internal server error",
      });
  }
};


export const updateComment = async (req: Request, res: Response) => {
  try {
    const { comment_id, comment_text } = req.body;

    const pool = await mssql.connect(sqlConfig);

    await pool
      .request()
      .input("comment_id", mssql.VarChar, comment_id)
      .input("comment_text", mssql.VarChar, comment_text)
      .execute("updateComment");

    return res.status(200).json({
      message: "Comment updated successfully",
    });
  } catch (error) {
    console.error("Error in updateComment:", error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};




export const likePost = async (req: Request, res: Response) => {
  try {
    const { user_id, post_id } = req.body;
    const like_id = v4();

    const pool = await mssql.connect(sqlConfig);

    await pool
      .request()
      .input("like_id", mssql.VarChar, like_id)
      .input("user_id", mssql.VarChar, user_id)
      .input("post_id", mssql.VarChar, post_id)
      .execute("likePost");

    return res.status(200).json({
      message: "Post liked successfully",
    });
  } catch (error) {
    console.error("Error in likePost:", error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};


export const deletePost = async (req: Request, res: Response) => {
  try {
    const { post_id } = req.params;

    const pool = await mssql.connect(sqlConfig);

    const rowsAffected = (
      await pool
        .request()
        .input("post_id", mssql.VarChar, post_id)
        .execute("deletePost")
    ).recordset[0].RowsAffected;

    console.log("rows affected is ",rowsAffected );
    

    if (rowsAffected == 1) {
      return res.status(200).json({
        message: "Post deleted successfully",
      });
    } else {
      return res.status(400).json({
        error: "No post with the given ID",
      });
    }
  } catch (error) {
    console.error("Error in deletePost:", error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};


export const getCommentsForPost = async (req: Request, res: Response) => {
  try {
      const { post_id } = req.params;

      const pool = await mssql.connect(sqlConfig);

      const comments = (
          await pool
              .request()
              .input("post_id", mssql.VarChar, post_id)
              .execute("getCommentsForPost")
      ).recordset;

      return res.status(200).json({
          comments: comments,
      });
  } catch (error) {
      console.error("Error in getCommentsForPost:", error);
      return res.status(500).json({
          error: "Internal server error",
      });
  }
};

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const pool = await mssql.connect(sqlConfig);

    const result = await pool.request().execute("getAllPosts");

    return res.status(200).json({
      posts: result.recordset,
    });
  } catch (error) {
    console.error("Error in getAllPosts:", error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};


export const getPostById = async (req: Request, res: Response) => {
  try {
    const { post_id } = req.params;

    const pool = await mssql.connect(sqlConfig);

    const result = await pool
      .request()
      .input("post_id", mssql.VarChar, post_id)
      .execute("getPostById");

    const post = result.recordset[0];

    if (!post) {
      return res.status(404).json({
        error: "Post not found",
      });
    }

    return res.status(200).json({
      post,
    });
  } catch (error) {
    console.error("Error in getPostById:", error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};





