const User=require("../models/taskModel");
const geolib=require("geolib");



exports.createUser=async (req,res)=>{
    try{
        //let  data=req.body
       const {name,latitude,longitude} =req.body;
       if(!name || !latitude ||!longitude){
        return res.status(400).send({error:"mising field"});
       }
       const newUser=new User({
        name,
        latitude,
        longitude
       });
       const savedUser=await newUser.save();
       res.status(201).send(savedUser);
    }
    catch(error){
        console.error(error);
        res.status(500).send({error:"Internal server error",error});
    }
};

//get all users

exports.getAllUsers=async(req,res)=>{
    try{
        const users=await User.find({});
        res.send(users);
    }
    catch(error){
        console.error(error);
        res.status(500).send({error:"Internal server error"});
    }
};

//get user by Id
exports.getUserById=async(req,res)=>{
    try{
        const userId=req.params.id;
        const user=await User.findById(userId);
        if(!user){
            return res.status(404).send({error:"User not found"});
        }
        res.send(user);
    }
    catch(error){
        console.error(error);
        res.status(500).send({error:"Internal server error",error});
    }
};


//update 

exports.updateUserById=async(req,res)=>{
    try{
        const userId=req.params.id;
        const {name,latitude,longitude}=req.body;

        const updatedUser=await User.findByIdAndUpdate(
            userId,
            {name,latitude,longitude},
            {new:true}
        );
        if(!updatedUser){
            return res.status(401).send({error:"User not found"});

        }
        res.send(updatedUser);
    }
    catch(error){
        console.log(error);
        res.status(500).send({error:"Internal server error"});
    }
};

// delete

exports.deleteUserById=async (req,res)=>{
    try{
    const userId=req.params.id;
    const deleteUser=await User.findByIdAndRemove(userId);
    if(!deleteUser){
        return res.status(404).send({error:" user not found"});
    }
    res.send(deleteUser);
}
catch(error){
    console.error(error);
    res.status(500).send({error:"Internal server error"});
}
}

// serach 
exports.getUsersWithinRadius=async (req,res)=>{
try {
    const {latitude,longitude}=req.query;
    const users=await User.find({});

    const sortedUsers=users.map((user)=>{
        const distance=geolib.getDistance(
            {latitude,longitude},
            {latitude:user.latitude,longitude:user.longitude}
            
            );
            return {...user.toObject(),distance};
    });

    sortedUsers.sort((a,b)=>a.distance-b.distance);
    res.send(sortedUsers);
    
}
catch(error){
    console.error(error);
    res.status(500).send({error:"Internal server error"});
}

};



 