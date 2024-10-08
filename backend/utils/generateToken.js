import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId, res)=> {
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn:"15d"
    })

    res.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000,//converting the days to ms
        httpOnly:true,//prevents xss attacks(cross site scripting attacks)
        sameSite:"strict",//CSRF attacks 
        secure: process.env.NODE_ENV !=="development",
    });

};
export default generateTokenAndSetCookie