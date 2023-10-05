const controller=require("../controllers/taskController");
const express=require("express");
const router= express.Router();

router.post("/add",controller.createUser);
router.get("/getList",controller.getAllUsers);
router.get("/get/:id",controller.getUserById);
router.put("/update/:id",controller.updateUserById);
router.delete("/delete/:id",controller.deleteUserById);
//search
router.get("/se",controller.getUsersWithinRadius);

module.exports=router;

