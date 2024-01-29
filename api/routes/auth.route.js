import express from 'express';
import { signup } from "../controllers/auth.Controller.js"; // Fixed the casing of the file name
const router =express.Router();

router.post('/signup',signup);
export default router;


