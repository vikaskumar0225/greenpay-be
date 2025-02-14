import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./src/Connection/dataBase.js";
import dashboardRoutes from "./src/Routes/dashboardRoutes.js";
import uiRoutes from "./src/Routes/uiRoutes.js";
import authRoutes from "./src/Routes/authRoutes.js";
dotenv.config();
 connectDb();
const app=express();
app.use(cors());
app.use(express.json());
app.use('/api/dashboardRoutes',dashboardRoutes);
app.use('/api/ui',uiRoutes);
app.use('/api/authRoutes',authRoutes);
const PORT= process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`server is ready at http://localhost:${PORT}`);
});