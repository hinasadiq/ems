/**
 * The function `connectToDatabase` uses Mongoose to connect to a MongoDB database using the URL
 * provided in the environment variables.
 */
import mongoose from "mongoose";

const  connectToDatabase = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URL)
    }catch(error){
        console.log(error)
    }
    
} 
export default connectToDatabase