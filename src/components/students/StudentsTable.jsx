import { useEffect } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';

import Table from 'react-bootstrap/Table';
import Api from '../../api/api';
//-------------------------------------
export default function StudentsTable(props){
    const stage =props.stage
    const [students,setStudents] = useState('');

    useEffect(()=>{
        const getTeacher=async()=>{
            const response = await Api.getStudents();
            
      
           setStudents(response.data)
        }
        getTeacher();
    },[]);
 
    return(
        <Container>
        <div style={{display:'flex',backgroundColor:'#fff'}}>
        
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>N.</th>
            <th>Student's Name</th>  
          </tr>
        </thead>
        <tbody>
          {
              students.length !==0 && students.filter(e=> e.stage ===stage).map((e,i)=>{
                  return(
                    <tr>
                      <td>{i+1}</td>
                      <td>{e.name}</td>
                    </tr>
                  )
              })
            }     
          </tbody>
        </Table> 
        </div>
    </Container>
    )
}








   







