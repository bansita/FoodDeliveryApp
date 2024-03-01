const express=require("express");
const router=express.Router();
const Order=require('../models/Order')

router.post('/orderData',async(req,res)=>{
    let data=req.body.order_data;
    await data.splice(0,0,{Order_date:req.body.order_date})

    let eid=await Order.findOne({'email':req.body.email})
    // if email not existing in the db 
    if(eid===null){
        try{
            await Order.create({
                email:req.body.email,
                order_data:[data]
            }).then(()=>{
                res.json({sucess:true})
            })

        }catch(err){
            console.log(err)
            res.status(400).send(err)
        }
    }
    else{
        try {
            await Order.findOneAndUpdate(
                { email: req.body.email }, // Query object
                { $push: { order_data: data } }, // Update object
            ).then(() => {
                res.json({ success: true })

            })
            
        }catch(err){
            res.status(400).send(err)
        }
    }
})

router.post('/myOrderData', async (req, res) => {
    try {
        const eId = await Order.findOne({ 'email': req.body.email });
        res.json(eId ? eId.order_data : []); // Returning order_data array directly
    } catch (error) {
        res.status(500).send(error);
    }
});





module.exports=router;