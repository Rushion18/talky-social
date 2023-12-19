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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostById = exports.getAllPosts = exports.getCommentsForPost = exports.deletePost = exports.likePost = exports.updateComment = exports.addComment = exports.createPost = void 0;
const uuid_1 = require("uuid");
const mssql_1 = __importDefault(require("mssql"));
const dbConnect_1 = __importDefault(require("../services/dbConnect"));
const sqlConfig_1 = require("../config/sqlConfig");
const dbhelper = new dbConnect_1.default();
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = (0, uuid_1.v4)();
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
    }
    catch (error) {
        return res.status(500).json({
            error: error
        });
    }
});
exports.createPost = createPost;
const addComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_id, post_id, comment_text } = req.body;
        const comment_id = (0, uuid_1.v4)();
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        yield pool
            .request()
            .input("comment_id", mssql_1.default.VarChar, comment_id)
            .input("user_id", mssql_1.default.VarChar, user_id)
            .input("post_id", mssql_1.default.VarChar, post_id)
            .input("comment_text", mssql_1.default.VarChar, comment_text)
            .execute("addComment");
        return res.status(200).json({
            message: "Comment added successfully",
        });
    }
    catch (error) {
        console.error("Error in addComment:", error);
        return res.status(500).json({
            error: "Internal server error",
        });
    }
});
exports.addComment = addComment;
const updateComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { comment_id, comment_text } = req.body;
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        yield pool
            .request()
            .input("comment_id", mssql_1.default.VarChar, comment_id)
            .input("comment_text", mssql_1.default.VarChar, comment_text)
            .execute("updateComment");
        return res.status(200).json({
            message: "Comment updated successfully",
        });
    }
    catch (error) {
        console.error("Error in updateComment:", error);
        return res.status(500).json({
            error: "Internal server error",
        });
    }
});
exports.updateComment = updateComment;
const likePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_id, post_id } = req.body;
        const like_id = (0, uuid_1.v4)();
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        yield pool
            .request()
            .input("like_id", mssql_1.default.VarChar, like_id)
            .input("user_id", mssql_1.default.VarChar, user_id)
            .input("post_id", mssql_1.default.VarChar, post_id)
            .execute("likePost");
        return res.status(200).json({
            message: "Post liked successfully",
        });
    }
    catch (error) {
        console.error("Error in likePost:", error);
        return res.status(500).json({
            error: "Internal server error",
        });
    }
});
exports.likePost = likePost;
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { post_id } = req.params;
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        const rowsAffected = (yield pool
            .request()
            .input("post_id", mssql_1.default.VarChar, post_id)
            .execute("deletePost")).recordset[0].RowsAffected;
        console.log("rows affected is ", rowsAffected);
        if (rowsAffected == 1) {
            return res.status(200).json({
                message: "Post deleted successfully",
            });
        }
        else {
            return res.status(400).json({
                error: "No post with the given ID",
            });
        }
    }
    catch (error) {
        console.error("Error in deletePost:", error);
        return res.status(500).json({
            error: "Internal server error",
        });
    }
});
exports.deletePost = deletePost;
const getCommentsForPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { post_id } = req.params;
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        const comments = (yield pool
            .request()
            .input("post_id", mssql_1.default.VarChar, post_id)
            .execute("getCommentsForPost")).recordset;
        return res.status(200).json({
            comments: comments,
        });
    }
    catch (error) {
        console.error("Error in getCommentsForPost:", error);
        return res.status(500).json({
            error: "Internal server error",
        });
    }
});
exports.getCommentsForPost = getCommentsForPost;
const getAllPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        const result = yield pool.request().execute("getAllPosts");
        return res.status(200).json({
            posts: result.recordset,
        });
    }
    catch (error) {
        console.error("Error in getAllPosts:", error);
        return res.status(500).json({
            error: "Internal server error",
        });
    }
});
exports.getAllPosts = getAllPosts;
const getPostById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { post_id } = req.params;
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        const result = yield pool
            .request()
            .input("post_id", mssql_1.default.VarChar, post_id)
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
    }
    catch (error) {
        console.error("Error in getPostById:", error);
        return res.status(500).json({
            error: "Internal server error",
        });
    }
});
exports.getPostById = getPostById;
