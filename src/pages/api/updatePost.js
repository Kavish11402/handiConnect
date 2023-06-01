import Connection from "@/Server/database/MongoConnector";
import Post from "@/Server/models/Post";

export default async function updatePost(req, res)
{
    if(req.method==="POST")
    {
        Connection().then()
        const data = req.body;
        console.log(data)



        const result = await Post.updateMany(
            {_id:data.postId} ,
            { $set:data.updatedPostData }
        )

        console.log(result)

        res.status(200).json({msg:"result"})
    }
    else
    {
        res.status(405).json({message:`Sorry wrong method (${req.method}) is used. Use (POST) Method`})
    }
}