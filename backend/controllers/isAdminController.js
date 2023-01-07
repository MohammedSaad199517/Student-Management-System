
const {Admins} =require('../models/index');



module.exports =async (req,res)=>{
    const findAdmin = await Admins.findOne({where:{adminId:'1'}});
    
    if(!findAdmin) return res.send(false);
    
        res.send(findAdmin.dataValues)
 
}
