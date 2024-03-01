const express=require("express");
const router=express.Router();
const User=require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt=require("bcrypt")
const jwt=require('jsonwebtoken');
const jwtSecret="ITISABHAI";
// create a user 
router.post('/createUser',
body("name").isLength({ min: 4 }),
body("email").isEmail(),
body("password").isLength({ min: 6 }),
async(req,res,next)=>{
    const error=validationResult (req);
    if (!error.isEmpty()) {
        return res.status(402).json({ errors: error.array() });
      }
      const salt=await bcrypt.genSalt(10);
      const hasedPassword=await bcrypt.hash(req.body.password,salt);
      next();
    try{
        
        User.create({
            name:req.body.name,
            location:req.body.location,
            email:req.body.email,
            password:hasedPassword,
        }).then(res.status(200).json({sucess:true}))
    }catch(err){
        console.log(err);
        res.status(400).json({sucess:false})
    }
})

// login a user 
router.post('/login',
body("email").isEmail(),
body("password").isLength({ min: 6 }),
async(req,res)=>{
    const error=validationResult (req);
    if (!error.isEmpty()) {
        return res.status(402).json({ errors: error.array() });
      }
      const email=req.body.email;
    try{
        const validUser=await User.findOne({email});
        if(!validUser){
            return res.status(400).json({error:"Not a valid user"});
        }
        const password=await bcrypt.compare(req.body.password,validUser.password)
        if(!password){
            return res.status(404).json({error:"Enter valid credential"});
        }
        const data={
            user:{
                id:validUser.id
            }
        }
        const authtoken=jwt.sign(data,jwtSecret);
        res.status(200).json({sucess:true,authtoken:authtoken})
        
       
    }catch(err){
        console.log(err);
        res.status(400).json({sucess:false})
    }
})
module.exports=router;
