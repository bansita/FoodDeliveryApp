const mongoose=require('mongoose');
const mongoURL="mongodb+srv://patrobansita2002:Bansita2002@cluster0.w1nn5nw.mongodb.net/food?retryWrites=true&w=majority"
const connectToMongo=async()=>{
    try{
        const connection=await mongoose.connect(mongoURL)
        if(connection){
            console.log("Connected to MongoDB");
            const fetchdata=connection.connection.db.collection("foodData");
            const Catgorydata=connection.connection.db.collection("Category");
            const data = await fetchdata.find({}).toArray();
            const catData=await Catgorydata.find({}).toArray();
            global.foodData=data;
            global.foodCategory=catData;
            // console.log(global.foodCategory);
   
        }
    }catch(err){
        console.error("Failed to connect to MongoDB:", err);
        process.exit(1);
      }
}
module.exports=connectToMongo;
