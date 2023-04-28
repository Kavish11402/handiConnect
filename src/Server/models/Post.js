import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        uploaderName : String,
        uploaderLocation : String,
        postImage : [String],
        productName: String,
        productDesc : String,
        productPrice : String,
    }
)
mongoose.models = {}

const Post = mongoose.model( "posts" , postSchema )

export default Post