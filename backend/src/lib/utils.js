import jwt from "jsonwebtoken";
export const generateToken = async (userId,res)=>{
    const token = jwt.sign({ userId },process.env.JWT_SECRET,{
        expiresIn:"7d"
    });

    res.cookie("jwt",token,{
        maxAge:1000*60*60*24*7, //7 days 
        httpOnly:true,
        sameSite:"strict",
        secure:process.env.NODE_ENV!=="development"
    });

    return token;

}