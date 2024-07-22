import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res)=>{
    try{
        //get logged in user id //to prevent seeing the password of other users
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers)

    } catch(error) {
        console.log("Error in getUserForsidebar:", error.message)
        res.status(500).json({ error:'Internal server error2'})
    }
}