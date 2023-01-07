const {Admins,Students,Teachers} = require('../models/index')
const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports =async(req,res)=>{
    const cookies =req.cookies;
    if(!cookies?.jwt) return res.sendStatus(401)
    
    const refreshToken =cookies.jwt
   
    let foundUser ;
    let role;
    if(await Admins.findOne({ where: { refreshToken:  refreshToken} })){
        foundUser = await Admins.findOne({ where: { refreshToken:  refreshToken} });
        role = 'admin'
    }
    else if(await Students.findOne({ where: { refreshToken:  refreshToken} })){
        foundUser = await Students.findOne({ where: { refreshToken:  refreshToken} });
        role = "student"
        
    }
    else if(await Teachers.findOne({ where: { refreshToken:  refreshToken} })){
        foundUser = await Teachers.findOne({ where: { refreshToken:  refreshToken} });
        role = "teacher"
        
    }
    
    if( !foundUser ) return res.sendStatus(401); //forbidden
    
    //evaluate jwt
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err,decoded)=>{
         
            if(err || foundUser.dataValues.username !== decoded.UserInfo.username) return res.sendStatus(403);
         
            const name =foundUser.dataValues.name
            
            const accessToken =jwt.sign(
                {"UserInfo":{
                    "username":decoded.username,
                    "roles":role
                }},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn:"30s"}
            );
            res.json({role,accessToken,name})
            }
    )   
}
