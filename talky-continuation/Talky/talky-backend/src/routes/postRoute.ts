import { Router } from "express";
import { addComment, createPost, deletePost, getAllPosts, getCommentsForPost, getPostById, likePost, updateComment } from "../controllers/postController";


const post_router = Router()

post_router.post('/create', createPost)
post_router.get('/all', getAllPosts)
post_router.post('/add', addComment);
post_router.get('/:post_id', getPostById);
post_router.put('/update', updateComment);
post_router.post('/like', likePost);
post_router.delete('/:post_id', deletePost);
post_router.get('/comment/:post_id', getCommentsForPost);


export default post_router;