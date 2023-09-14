const mongoose=require('mongoose');

const task=new mongoose.Schema({
    
    images:String,
    heading:String,
    desc:String,
   
 
},{timestamps:true})
const Task=mongoose.model("Task",task);
module.exports=Task;