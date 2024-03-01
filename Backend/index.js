const express = require('express') 
const connectToMongo=require('./db');
var cors = require('cors')
connectToMongo();
const app=express();
const port = 5000 

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Hello, World!' })) 
app.use('/api',require("./Routes/user"))  ;
app.use('/api',require("./Routes/foodDetails"))  ;
app.use('/api',require("./Routes/order"))  ;
app.listen(port, () => { 
    console.log(`Example app listening at http://localhost:${port}`) 
}) 