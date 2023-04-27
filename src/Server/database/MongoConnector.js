import mongoose from "mongoose";

const Connection= async ()=>{
    mongoose.connect(process.env.MONGO_ATLAS_URI,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        .then( ()=>{ console.log("ReadyState => ",mongoose.connection.readyState) } )
        .catch( ( error )=>{ console.log(error) } )
}

export default Connection;