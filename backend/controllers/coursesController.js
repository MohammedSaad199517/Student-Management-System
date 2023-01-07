const {Courses} =require('../models/index');

   const postCourse= async(req,res)=>{
    const stage =req.body.stage;
    const course=req.body.course
    const subject=req.body.subject;
    console.log(req.body)
    try{
        //store the new subject
            Courses.create({
            stage,
            course,
            subject,
       
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
       
    }catch(err){
        res.stattus(500).json({
            "message":err.message
        })
    }}
    const getCourses=async(req,res)=>{
        const courses = await Courses.findAll();
        if(!courses) return res.sendStatus(401);
            res.send(courses)     
    }
    const deleteSubject = (req,res)=>{
        let id = req.params.id;
    
        Courses.destroy({
            where:{subjectId:id}
        }).then(status=>res.status(201).json({
            error:false,
            message:'subject has been deleted'
        }))
        .catch(error=>res.json({
            error:true,
         
            error:error
        }))

    }
    const updateSubject = (req,res)=>{
        let id = req.params.id;
        let teacherId =req.body.teacherId;
        Courses.update({
            teacherId:teacherId
        },
        {
            where:{subjectId:id}
        }).then(status=>res.status(201).json({
            error:false,
            message:'subject has been updated'
        }))
        .catch(error=>res.json({
            error:true,
         
        }))
     

    }

module.exports ={postCourse,getCourses,deleteSubject,updateSubject};


    
 
       
           
     
        
    
    
   




    
  
  
        // //-------------------------------------
        // const duplicate = usersDB.user.find(person => person.username === user);
        // if(duplicate) return res.sendStatus(409);
    
     
  