const {Admins,Students,Teachers} =require('../models/index');
const bcrypt = require('bcrypt');

module.exports =async(req,res)=>{
        const name =req.body.name;
        const email=req.body.email
        const username=req.body.username;
        const password =req.body.pwd;
        const gender = req.body.gender;
        const session =req.body.session;
        const stage =req.body.stage;
        const role =req.body.role;
    
       
      
        if(!username || !password ){
            return res.status(400).json({
                "message":"username and password are required"
            })
        }
   
       
        try{
            //encrypt the password
            const hashedPwd= await bcrypt.hash(password,10);
            //store the new user
            if(role === "admin"){
              
                Admins.create({
                username,
                password:hashedPwd,
                name,
                email,
            
            })
            .then(client=>res.status(201).json({
                error:false,
                data:client,
                message:'new user has been created'
            }))
            .catch(error=>res.json({
                error:true,
                data:[],
                error:error
            }))
            }
            else if(role === 'student'){
                Students.create({
                    username,
                    password:hashedPwd,
                    name,
                    email,
                    session,
                    stage,
                    gender
                })
                .then(client=>res.status(201).json({
                    error:false,
                    data:client,
                    message:'new user has been created'
                }))
                .catch(error=>res.json({
                    error:true,
                    data:[],
                    error:error
                }))

            }
            else if(role === 'teacher'){
                Teachers.create({
                    name,
                    email,
                    username,
                    password:hashedPwd,
                    session,
                    gender
                })
                .then(client=>res.status(201).json({
                    error:false,
                    data:client,
                    message:'new user has been created'
                }))
                .catch(error=>res.json({
                    error:true,
                    data:[],
                    error:error
                }))

            }
        }catch(err){
            res.stattus(500).json({
                "message":err.message
            })
        }
    }


    
 
       
           
     
        
    
    
   




    
  
  
        // //-------------------------------------
        // const duplicate = usersDB.user.find(person => person.username === user);
        // if(duplicate) return res.sendStatus(409);
    
     
  