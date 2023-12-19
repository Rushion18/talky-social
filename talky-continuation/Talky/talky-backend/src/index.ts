import express, {json, NextFunction, Request, Response} from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import user_router from "./routes/userRoute";
import post_router from "./routes/postRoute";

dotenv.config();

const app = express();

app.use(json());
app.use(cors());

app.use('/user', user_router)
app.use('/post', post_router)
app.use('/comment', post_router)
app.use('/like', post_router)
app.use('/delete', post_router)
app.use('/update', post_router)


app.use((error: Error, req:Request, res:Response, next:NextFunction)=>{
    res.json({
        message: error.message
    })
})

const port = process.env.PORT || 8500

app.listen(port, () => {
    console.log(`server running at port ${port}`)
})