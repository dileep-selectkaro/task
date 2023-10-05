const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://dileepkm:L3cuCdGwQQWTF3Hs@cluster0.iqkms8u.mongodb.net/companyTask")
.then(()=>{
    console.log("Mongoose is sucessfully connected");
})
.catch((error)=>{
    console.log("Connection Error",error)
})

mongoose.Promise=global.Promise;
module.exports=mongoose;