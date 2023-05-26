import mongoose from "mongoose";

const postSchema = new mongoose.Schema
(
    {
            uploaderName : String,
            uploaderProfileImage : String,
            uploaderLocation : String,
            postImage : [String],
            productName: String,
            productDesc : String,
            productPrice : String,
            productLikesList : [String],
            productComments : [String],
            address : String

    }
)
mongoose.models = {}

const Post = mongoose.model( "posts" , postSchema )

export default Post