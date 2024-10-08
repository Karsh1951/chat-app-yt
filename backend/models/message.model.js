import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",//sender id is an id from user model
        required:true
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type:String,
        required:true
    }
    //created at and updated at fields
}, {timestamps: true});

//creating the model
const Message = mongoose.model("Message", messageSchema);
export default  Message;