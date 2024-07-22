import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js"

export const sendMessage = async( req, res )=>{
    try{
        const{message}= req.body;
        const{id:receiverId}= req.params;
        const senderId = req.user._id;//getting the userId//sender id coming from request.user

    let conversation = await Conversation.findOne({
            participants:{ $all:[senderId, receiverId]},//retrieve both from mongo
        })

        //if sending message for the first time(null)
        if(!conversation){
            conversation= await Conversation.create({
                participants: [senderId, receiverId],
            });
        }
    //creating a new message that is coming from the user
    const newMessage = new Message({
        //has the following fields
        senderId,
        receiverId,
        message,
    });

    if(newMessage){
        conversation.messages.push(newMessage._id);
    }
    //await conversation.save();
    //await newMessage.save();
    //for the message to run in parallel
    await Promise.all([conversation.save(),newMessage.save()]);

    res.status(201).json(newMessage);


    }
    catch(error) {
        console.log("Error  in SendMessage controller:", error.message)
        res.status(500).json({error:"internal Server error"});

    }
};

export const getMessages = async(req, res)=>{
    try {
        //its going to give  the id field//renamed to userTOCH ( the user you are chatting with)
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;//coming from protect route func
        const conversation = await Conversation.findOne({
            participants: {$all:[senderId, userToChatId]},
        }).populate("messages")

        if(!conversation) return res.status(200).json([])
            const messages= conversation.messages

        res.status(200).json(messages);
        
    } catch (error) {
        console.log("Error  in getMessage controller:", error.message)
        res.status(500).json({error:"internal Server error"})
        
    }
}