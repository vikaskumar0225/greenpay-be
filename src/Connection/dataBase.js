import dotenv from 'dotenv';
import mongoose from 'mongoose';
 dotenv.config();
const connectDb = async ()=> {
  try {
   await mongoose.connect(process.env.MongoDB_URL);
   console.log("MONGODB DATABASE CONNECTED SUCCESSFULLY !!");
  } catch (error) {
    console.error("MONGODB CONNECTION ERROR :",error);
    process.exit(1);
  };
}
export default connectDb;