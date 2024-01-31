import express from 'express';
import { google,signup,signin,signOut } from "../controllers/auth.controller.js"; // Fixed the casing of the file name
const router =express.Router();

router.post('/signup',signup);
router.post('/signin',signin);
router.post('/google',google);
router.get('/signout',signOut);
export default router;


