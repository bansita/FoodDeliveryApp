const express=require("express");
const router=express.Router();

router.post('/foodData',(req,res)=>{
    try{
        res.send([global.foodData,global.foodCategory])
        
    }catch(err){
        console.log(err);
    }
})
module.exports=router;