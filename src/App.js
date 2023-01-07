import * as React from 'react';
import {Routes,Route} from "react-router-dom";
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import Login from "./components/Login"
import Home from './components/Home'
import Register from './components/admins/RegisterAdmin';
import PersistLogin from './components/PersistLogin';
import Header from './components/Header';

import Api from './api/api'
import Students from './components/students/Students';
import useAuth from "./hooks/useAuth";
import Teachers from './components/teachers/Teachers';
import Courses from './components/courses/Courses';
import StudentsTable from './components/students/StudentsTable';
import Unauthorized from './components/Unauthorized';
import MarksManagments from './components/marks/MarksManagments';
import DistributionGrades from './components/marks/DistributionGrades';
import Attendance from './components/Attendance /Attendance';
import Schedule from './components/schedule/Schedule';
import AttendanceRecord from './components/Attendance /AttendanceRecord';
//-------------------------------------------------------
const roles =["admin","teacher","student"]
function App() {
      const { auth } = useAuth();
      const [login ,setLogin] = React.useState("")
      React.useEffect(()=>{
          Api.isAdmin().then(
          (res)=>{  
            if(res.data){setLogin('login')}
            else{
                  setLogin("register")
            }
            }
          )
      },[])
      return (       
      <div className='App'>
            <Header />
            {/* <Container > */}
          <Routes>
                  <Route path='/' element={<Layout/>}>
                         {/* public routes */}

                        { (login ==="register" && !auth?.role)&& 
                              <Route path='/register' element={<Register />}/> 
                        }
                        <Route path="/login" element={<Login />} />
                        <Route path='/unauthorized'element={<Unauthorized/>}/>
                      
                        {/* we want to protect these routes */}
                        <Route element={<PersistLogin/>}>
                              <Route element={<RequireAuth allowedRoles={['student' , 'teacher', 'admin']} login={login}/>}>
                                    <Route path="/" element={<Home />} />
                              </Route>
                              <Route element={<RequireAuth allowedRoles={['admin']}  login={login}/>}>
                                    <Route path="/students" element={<Students role ={auth?.role}/>} />
                              </Route>
                              <Route element={<RequireAuth allowedRoles={['admin','teacher']}  login={login}/>}>
                                    <Route path="/teachers" element={<Teachers role ={auth?.role}/>} />
                              </Route>
                              <Route element={<RequireAuth allowedRoles={['admin']}  login={login}/>}>
                                    <Route path="/courses" element={<Courses />} />
                              </Route>
                              <Route element={<RequireAuth allowedRoles={['admin']}  login={login}/>}>
                                    <Route path="/marks-managments" element={<MarksManagments />} />
                              </Route>
                              <Route element={<RequireAuth allowedRoles={['admin']}  login={login}/>}>
                                    <Route path="/marks-managments/:id" element={<DistributionGrades />} />
                              </Route>
                              <Route element={<RequireAuth allowedRoles={['teacher']}  login={login}/>}>
                                    <Route path="/attendance" element={<Attendance />} />
                              </Route>
                              <Route element={<RequireAuth allowedRoles={['admin']}  login={login}/>}>
                                    <Route path="/schedule" element={<Schedule />} />
                              </Route>
                              <Route element={<RequireAuth allowedRoles={['admin']}  login={login}/>}>
                                    <Route path="/attendance/record" element={<AttendanceRecord />} />
                              </Route>
                              <Route element={<RequireAuth allowedRoles={['student' , 'teacher', 'admin']}  login={login}/>}>
                                    <Route path="/students/stageOne" element={<StudentsTable  stage='one'/>} />
                              </Route>
                              <Route element={<RequireAuth allowedRoles={roles}  login={login}/>}>
                                    <Route path="/students/stageTwo" element={<StudentsTable  stage='two'/>} />
                              </Route>
                              <Route element={<RequireAuth allowedRoles={roles}  login={login}/>}>
                                    <Route path="/students/stageThree" element={<StudentsTable  stage='three'/>} />
                              </Route>
                              <Route element={<RequireAuth allowedRoles={roles}  login={login}/>}>
                                    <Route path="/students/stageFour" element={<StudentsTable  stage='four'/>} />
                              </Route>
                        </Route>
                  </Route>
          </Routes>
          {/* </Container> */}
    </div>
  );
}
export default App;
