import Connection from "@/Server/database/MongoConnector";
import Post from "@/Server/models/Post";


export default function savePost(req,res)
{
    if(req.method==="POST")
    {
        Connection().then()
        const singlePost = new Post(req.body)
        singlePost.save()
        res.status(200).json(req.body)
    }
    else
    {
        res.status(405).json({message:`Sorry wrong method (${req.method}) is used. Use (POST) Method`})
    }
}