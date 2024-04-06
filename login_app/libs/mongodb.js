import mongoose from "mongoose";

const connectMongoDB = async () => {
    try{
await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI)
console.log("connected to mongo db");
    }
    catch(error){
console.log(error);
    }
};

export default  connectMongoDB;