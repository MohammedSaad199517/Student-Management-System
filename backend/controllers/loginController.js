
const bcrypt = require('bcrypt');
const {Admins,Students,Teachers} =require('../models/index');
const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports =async (req,res)=>{
    const {username,pwd} =req.body;
    
    if(!username || !pwd ){
        return res.stattus(400).json({
            "message":"username and passwordare required"
        })
    }
    let foundUser;
    let role;
    if(await Admins.findOne({ where: { username} })){
         foundUser = await Admins.findOne({ where: { username} });
         role='admin'
         console.log("++++++++++++++++++++++"+foundUser +"+++++++"+role)
    }
    else if(await Students.findOne({ where: { username} })){
        foundUser = await Students.findOne({ where: { username} });
        role = 'student'
        console.log("++++++++++++++++++++++"+foundUser+"+++++++"+role)
    }
    else if(await Teachers.findOne({ where: { username} })){
        foundUser = await Teachers.findOne({ where: { username} });
        role = 'teacher'
        console.log("++++++++++++++++++++++"+foundUser+"+++++++"+role)
    }

    if(!foundUser) return res.sendStatus(401);
    const match = await bcrypt.compare(pwd,foundUser.dataValues.password);
   
    if(match){
      
        const name = foundUser.dataValues.name

        //create JWTs
        const accessToken = jwt.sign(
            {"UserInfo":{
                "username":foundUser.dataValues.username,
                "role":role

            }},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '30s'}
            );
        const refreshToken = jwt.sign(
            {"UserInfo":{
                "username":foundUser.dataValues.username,
                "role":role

            }},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: '1d'}
            );
        // saveing refreshToken with current user
            if (role === "admin"){
                await Admins.update({
                    refreshToken:refreshToken
                },
                {
                    where:{username:foundUser.dataValues.username}
                })
            }
            else if (role === "student"){
                await Students.update({
                    refreshToken:refreshToken
                },
                {
                    where:{username:foundUser.dataValues.username}
                })
            }
            else if (role === "teacher"){
                await Teachers.update({
                    refreshToken:refreshToken
                },
                {
                    where:{username:foundUser.dataValues.username}
                })
            }
        // set the cookie as http only it is not available to javascript 
        res.cookie('jwt',refreshToken,{httpOnly:true,sameSite:"None",secure:true,maxAge:24 * 60 * 60 * 1000 })
        res.json({accessToken,role,name})
    }else{
        res.sendStatus(401)
    }
}
