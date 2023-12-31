"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postController_1 = require("../controllers/postController");
const post_router = (0, express_1.Router)();
post_router.post('/create', postController_1.createPost);
post_router.get('/all', postController_1.getAllPosts);
post_router.post('/add', postController_1.addComment);
post_router.get('/:post_id', postController_1.getPostById);
post_router.put('/update', postController_1.updateComment);
post_router.post('/like', postController_1.likePost);
post_router.delete('/:post_id', postController_1.deletePost);
post_router.get('/comment/:post_id', postController_1.getCommentsForPost);
exports.default = post_router;
