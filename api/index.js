import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
});

const app=express();//instance of express is created 

app.listen(300,()=>{
    console.log(`server is runnning on ${3000}`)
})

