import User from "../models/user.models.js";   
import bcryptjs from "bcryptjs";

export const signup=async(req,res,next)=>{
    const {username,email,password}=req.body;
    const hashedPassword=await bcryptjs.hash(password,12);
    
    const newUser=new User({username,email,password:hashedPassword});
    try{
        await newUser.save();
        res.status(200).json(newUser);
    }
    catch(err){
     
          next(err);        

    }
   
}