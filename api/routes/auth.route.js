import express from 'express';
import { signup,signin } from "../controllers/auth.Controller.js"; // Fixed the casing of the file name
const router =express.Router();

router.post('/signup',signup);
router.post('/signin',signin);
export default router;


