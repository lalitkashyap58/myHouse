import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
});

const app=express();//instance of express is created 

app.listen(3000,()=>{
    console.log(`server is runnning on ${3000}`)
})
app.get('/',(req,res)=>{
    res.send("hello world");
})

app.use('/api/user',userRouter);//send to /api/user/test/ to user.route.js

