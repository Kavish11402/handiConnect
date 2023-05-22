import Connection from "@/Server/database/MongoConnector";
import Post from "@/Server/models/Post";


export default async function deletePostAPI(req, res)
{
    if(req.method==="DELETE")
    {
        Connection().then()


        const result = await Post.deleteOne({_id:req.body.id})
        console.log(result)


        res.status(200).json({msg:"ok"})
    }
    else
    {
        res.status(405).json({message:`Sorry wrong method (${req.method}) is used. Use (DELETE) Method`})
    }
}