import { useEffect } from 'react';
import { useState } from 'react';

import Table from 'react-bootstrap/Table';
import Api from '../../api/api';

export default function TeachersTable(){
    const [teachers,setTeachers] = useState('');
    const [subjects,setSubjects] = useState('');

    useEffect(()=>{
        const getTeacher=async()=>{
            const response = await Api.getTeachers();
            
            const response2 = await Api.getCourses();
      
            setTeachers(response.data);
            setSubjects(response2.data);
        }
        getTeacher();
    },[]);

    const findSubject=(teacherId)=>{
        if(subjects.length !==0){
            return subjects.filter((e)=>e.teacherId ===teacherId) 
            }}
    //    console.log( findSubject(3).length !== 0  )
return(
    <div style={{display:'flex',backgroundColor:'#fff'}}>
        
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>N.</th>
          <th>Teacher's Name</th>
          <th>Subject</th>
          <th>Stage</th>
          <th>Course</th>
          <th>Session</th>
         
          
        </tr>
      </thead>
      <tbody>
        {
            (teachers.length !==0) && teachers.map((e,i)=>{
                return(
                    <tr>
                    <td>{i+1}</td>
                    <td>{e.name}</td>
                    <td>{ findSubject(e.teacherId).length !== 0  && findSubject(e.teacherId)[0].subject}</td>
                    <td>{ findSubject(e.teacherId).length !== 0  && findSubject(e.teacherId)[0].stage}</td>
                    <td>{ findSubject(e.teacherId).length !== 0  && findSubject(e.teacherId)[0].course}</td>
                    <td>{ e.session}</td>
                  </tr>
                )
            })
        }

     
      </tbody>
    </Table> 
    </div>
    )
}






