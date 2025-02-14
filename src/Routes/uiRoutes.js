import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const KYC_TOKEN= process.env.KYC_API_TOKEN

const uiRoutes = express.Router();
uiRoutes.post("/aadharVerify", async(req, res) => {
   try {
    const {id_number} =req.body;
    const response = await axios.post(
        "https://kyc-api.surepass.io/api/v1/aadhaar-validation/aadhaar-validation",
           {id_number},
        {
            headers:{
                "Content-Type" : "application/json",
                 Authorization: `Bearer ${KYC_TOKEN}`
            }

        }
        );
        res.json(response.data);
        

   } catch (error) {
    res.status(500).json({ error: error.response.data });
   }
});
uiRoutes.post("/aadharOtp", async(req,res)=>{
   try {
     const {id_number} =req.body;
     const response = await axios.post(
        "https://kyc-api.surepass.io/api/v1/aadhaar-v2/generate-otp",
        {id_number},
        {
            headers:{
                "Content-Type" : "application/json"
            }
        }
     );
     res.json(response.data);
   } catch (error) {
       res.status ({error : error.response.data})
   }
});

uiRoutes.post("/verifyPan", async (req, res) => {
    try {
        const { id_number, customer_id } = req.body;
        const response = await axios.post(
            "https://kyc-api.surepass.io/api/v1/pan/pan",
            { id_number },
            {
                headers: {
                    "Content-Type": "application/json",
                    "X-Customer-Id": customer_id,
                },
            }
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.response.data });
    }
});


export default uiRoutes;
