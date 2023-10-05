const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    name:String,
    latitude:Number,
    longitude:Number,
});

module.exports=mongoose.model("User",UserSchema);