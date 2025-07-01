import mongoose, { connection } from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
    try {
      const connectionInstance =   await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
      console.log(`\n MongoDB Connected !! \n DB HOST: ${connectionInstance.connection.host}`);
      
    } catch (error) {
        console.log("MONGODB connection error ", error  );
        process.exit(1)
        
    }
}

export default connectDB;