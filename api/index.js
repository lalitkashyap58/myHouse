import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
});

const __dirname=path.resolve();
const app=express();//instance of express is created 

app.use(express.json());//to parse json data
app.use(cookieParser());
app.listen(3000,()=>{
    console.log(`server is runnning on ${3000}`)
})
app.get('/',(req,res)=>{
    res.send("hello world");
})

app.use('/api/user',userRouter);//send to /api/user/test/ to user.route.js

app.use('/api/auth',authRouter);//send to /api/auth/signup/ to auth.route.js
app.use('/api/listing',listingRouter);

app.use(express.static(path.join(__dirname,'/client/dist')));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','dist','index.html'));
})
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });