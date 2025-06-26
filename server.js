import express from 'express';
import cors from 'cors';
import {connectDB} from './config/db.js';
import Form from './model/form.js';
import Register from './model/register.js';
import Checkout from './model/checkout.js';
import dotenv from 'dotenv';


dotenv.config();


const app=express();

app.use(express.urlencoded())
connectDB()

app.use(express.json());
app.use(cors())


app.methodFind=(req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
}


app.get('/get',async(req,res)=>{
    const user=await Form.find();
    res.json(user);
})

app.post('/register',async(req,res)=>{
    const {name,email,password}=req.body;
    const newUser=new Register({name,email,password});
    await newUser.save();
    res.json(newUser);
})

app.post('/checkout',async(req,res)=>{
    const {email,cardNumber,expiryDate,cvv,billingName,billingAddress,city,zipCode,country}=req.body;
    const newCheckout=new Checkout({email,cardNumber,expiryDate,cvv,billingName,billingAddress,city,zipCode,country});
    await newCheckout.save();
    res.json(newCheckout);
})
app.post('/form',async(req,res)=>{
    const {email,password,rememberMe}=req.body;
    const newForm=new Form({email,password,rememberMe});
    await newForm.save();
    res.json(newForm);
})

app.post('/postform',async(req,res)=>{
    try{
        const {email,password,rememberMe}=req.body;
        const newForm=new Form({email,password,rememberMe});
        await newForm.save();
        res.json(newForm);
    }catch(error){
        console.error("Error occurred while posting form:", error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
})

app.post('/postregister',async(req,res)=>{
    try{
        const {name,email,password,confirmPassword,rememberMe}=req.body;
        const newRegister=new Register({name,email,password,confirmPassword,rememberMe});
        await newRegister.save();
        res.json(newRegister);
    }catch(error){
        console.error("Error occurred while posting register:", error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
})

app.post('/postcheckout',async(req,res)=>{
    try{
        const {email,cardNumber,expiryDate,cvv,billingName,billingAddress,city,zipCode,country}=req.body;
        const newCheckout=new Checkout({email,cardNumber,expiryDate,cvv,billingName,billingAddress,city,zipCode,country});
        await newCheckout.save();
        res.json(newCheckout);
    }catch(error){
        console.error("Error occurred while posting checkout:", error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
})



app.get('/getform/:email',async(req,res)=>{
    try{
        const {email}=req.params;
        const form=await Form.findById(req.params.email);
        res.json(form);
    }catch(error){
        console.error("Error occurred while getting form:", error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
})


app.use(express.json());


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})