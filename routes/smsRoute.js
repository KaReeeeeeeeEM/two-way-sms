import express from "express";
import  { sendSms } from "../controllers/smsController.js"; 
const router = express.Router();

router.post("/", sendSms)

export default router;