"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneUser = exports.getFollowers = exports.addFollower = exports.getAllUsers = exports.loginUser = exports.registerUser = void 0;
const mssql_1 = __importDefault(require("mssql"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const sqlConfig_1 = require("../config/sqlConfig");
const uuid_1 = require("uuid");
const userValidator_1 = require("../validators/userValidator");
const dbConnect_1 = __importDefault(require("../services/dbConnect"));
// import { ExtendedUser } from "../middleware/verifyToken";
const dbhelpers = new dbConnect_1.default();
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { username, email, password } = req.body;
        let _id = (0, uuid_1.v4)();
        let { error } = userValidator_1.validateRegisterUser.validate(req.body);
        if (error) {
            return res.status(404).json({
                message: "Either username, email or password may be incorrect ",
                error: error.details,
            });
        }
        const hashedPwd = yield bcrypt_1.default.hash(password, 5);
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        let result = yield pool
            .request()
            .input("_id", mssql_1.default.VarChar, _id)
            .input("username", mssql_1.default.VarChar, username)
            .input("email", mssql_1.default.VarChar, email)
            .input("password", mssql_1.default.VarChar, hashedPwd)
            .execute("registerUser");
        console.log(result);
        return res.status(200).json({
            message: "User Registered Successfully!",
        });
    }
    catch (error) {
        console.log(error);
        return res.json({
            error: error,
        });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { email, password } = req.body;
        const { error } = userValidator_1.validateLoginUser.validate(req.body);
        if (error) {
            return res.status(422).json({
                error: error.message,
            });
        }
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        const user = (yield pool.request().input("email", email).execute("loginUser")).recordset;
        if (user.length === 0) {
            return res.status(404).json({
                error: "User not found",
            });
        }
        const correctPwd = yield bcrypt_1.default.compare(password, (_a = user[0]) === null || _a === void 0 ? void 0 : _a.password);
        if (!correctPwd) {
            return res.status(401).json({
                error: "Incorrect Password",
            });
        }
        const _b = user[0], { password: _ } = _b, userInfo = __rest(_b, ["password"]);
        const token = jsonwebtoken_1.default.sign(userInfo, process.env.SECRET, {
            expiresIn: "48hr",
        });
        return res.status(200).json({
            message: "Logged in Successfully",
            token,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Internal server error",
        });
    }
});
exports.loginUser = loginUser;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        let users = (yield pool.request().execute("getAllUsers")).recordset;
        return res.status(200).json({
            users: users,
        });
    }
    catch (error) {
        return res.json({
            error: error,
        });
    }
});
exports.getAllUsers = getAllUsers;
const addFollower = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_id, follower_user_id } = req.body;
        const follower_id = (0, uuid_1.v4)();
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        yield pool
            .request()
            .input("follower_id", mssql_1.default.VarChar, follower_id)
            .input("user_id", mssql_1.default.VarChar, user_id)
            .input("follower_user_id", mssql_1.default.VarChar, follower_user_id)
            .execute("addFollower");
        return res.status(200).json({
            message: "Follower added successfully",
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Internal server error",
        });
    }
});
exports.addFollower = addFollower;
const getFollowers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_id } = req.params;
        console.log(`Fetching followers for user_id: ${user_id}`);
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        const followers = (yield pool
            .request()
            .input("user_id", mssql_1.default.VarChar, user_id)
            .execute("getFollowers")).recordset;
        console.log("Followers retrieved successfully:", followers);
        return res.status(200).json({
            followers: followers,
        });
    }
    catch (error) {
        console.error("Error in getFollowers:", error);
        return res.status(500).json({
            error: "Internal server error",
        });
    }
});
exports.getFollowers = getFollowers;
const getOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id } = req.params;
    try {
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        const user = (yield pool
            .request()
            .input("user_id", mssql_1.default.VarChar, user_id)
            .execute("getOneUser")).recordset;
        // console.log("user is ",user);
        res.status(200).json(user);
    }
    catch (error) {
    }
});
exports.getOneUser = getOneUser;
