import Connection from "@/Server/database/MongoConnector";
import Post from "@/Server/models/Post";

async function getAllPosts(req,res)
{
    if (req.method==="GET")
    {
        Connection().then()
        /*console.log("GetUsers API Called")*/
        const data = await Post.find()
        /*console.log("data from API =>",data)*/
        res.status(200).json( data )

    }
    else
    {
        res.status(405).json({message:`Sorry wrong method (${req.method}) is used. Use (Get) Method`})
    }
}
export default getAllPosts