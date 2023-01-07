const {Admins,Students} =require("../models/index")
module.exports  =async (req,res)=>{
    const cookies =req.cookies;
    if(!cookies?.jwt) return res.sendStatus(204)// succesful request with send no content

    const refreshToken =cookies.jwt

    // is refreshToken in db
    let foundUser;
    let role ;
    if(await Admins.findOne({where:{refreshToken:refreshToken}})){
        foundUser =await Admins.findOne({where:{refreshToken:refreshToken}})
        role ="admin"
    }
    else if(await Students.findOne({where:{refreshToken:refreshToken}})){
        foundUser =await Students.findOne({where:{refreshToken:refreshToken}})
        role = 'student'
    }
    if(!foundUser) {res.clearCookie("jwt",{httpOnly:true,maxAge:24 * 60 * 60 * 1000 })
        return res.sendStatus(401);
    };
    //delete refreshToken in db
    if(role === 'admin'){
        await Admins.update({
            refreshToken:''
        },
        {
            where:{username:foundUser.dataValues.username}
        })
    }
    else if(role === 'student'){
        await Students.update({
            refreshToken:''
        },
        {
            where:{username:foundUser.dataValues.username}
        })
    }


    res.clearCookie("jwt",{httpOnly:true,sameSite:"None",secure:true}) //secure:true only serves https
    res.sendStatus(204)
    
}