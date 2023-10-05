const express=require("express");
const app= express();
//const mongoose=require("mongoose");
const mongoose=require('./config/db');
const route=require("./routes/route")

const PORT=4000;
app.use(express.json());



app.use("/",route);





app.listen(PORT,()=>{
    console.log("Server is connected port:",PORT)
});



