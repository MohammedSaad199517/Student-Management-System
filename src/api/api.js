import Axios from './axios';

//---------------------------------
const endpoint={
  isAdmin:'/isAdmin', //To check if there is an administrator registered in the database
  postCourse:'/course',
  getCourses:'/course',
  deleteOrUpdateSubject:(id)=>{
    return `/course/${id}`
  },
  postLogin : '/login',
  register:'/register',
  getStudents:'/students',
  getTeachers:'/teachers',
  logout:"/logout",
  getRefreshToken:"/refresh",

}
//----------------------------------
const requests={
    isAdmin:()=>{return Axios.get(endpoint.isAdmin)},
    getCourses:()=>{return Axios.get(endpoint.getCourses)},
    getTeachers:()=>{return Axios.get(endpoint.getTeachers)},
    postCourse:(data)=>{
      Axios.post(endpoint.postCourse,data).then(()=>{
        console.log("success")
      }).catch(err=>{
       console.log(err )  
      })
    },
    deleteSubject:(id)=>{
      Axios.delete(endpoint.deleteOrUpdateSubject(id)).then(()=>{
        console.log("success")
      }).catch(err=>{
       console.log(err )  
      })
    },
    updateSubject:(data,id)=>{
      Axios.put(endpoint.deleteOrUpdateSubject(id),data).then(()=>{
        console.log("success")
      }).catch(err=>{
       console.log(err )  
      })
    },
    postLogin:(data)=>{
        return( Axios.post(
        endpoint.postLogin,
        data,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }).then(()=>{
        console.log("success")
      }).catch(err=>{
       console.log(err )  
      }))
    },
    register:(data)=>{
      return( 
        Axios.post(
        endpoint.register,
        data,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true

        }).then(()=>{
        console.log("success")
    }).catch(err=>{
     console.log(err )  
    }))
  },
  getStudents:()=>{return Axios.get(endpoint.getStudents)},
  logout:()=>{
    return Axios(endpoint.logout,
      {
        withCredentials: true
      }
    )
  },
  getRefreshToken:()=>{return Axios.get(endpoint.getRefreshToken,
    {
      withCredentials:true
    }
  )}


}
export default requests