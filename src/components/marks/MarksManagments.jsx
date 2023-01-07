import Api from '../../api/api';
import Container from "react-bootstrap/Container";
import { useState } from 'react';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

export default function MarksManagments(){
    const [subjects,setSubjects] = useState([]);
    useEffect(()=>{
        const getSubjects= async()=>{
            const res =await Api.getCourses();
            setSubjects(res.data)
        }
        getSubjects()
    },[])
  
    return(
         <Container>
            <div style={{backgroundColor:'white',borderRadius:'10px'}} >
         <Table   bordered  >
            <thead  >
                <tr  style={{backgroundColor:'ActiveBorder'}}>
                    <th width={'10%'} >N.</th>
                    <th>subjuct</th>
                    <th>Stage</th>
                    <th>Course</th>
                   
                </tr>
            </thead>
            <tbody>
              
               {subjects.length !== 0 && subjects.map((e,i)=>{
                return(
                    
                   <tr>
                 
                    <td>{i+1}</td>
                    <td>
                        <Link to={`/marks-managments/${e.subjectId}`}>
                        {e.subject}
                        </Link>
                    </td>
                    <td>
                        {e.stage}
                    </td>
                    <td>
                        {e.course}
                    </td>
                    </tr>  
                )
               }) }
            </tbody>
            </Table>
            </div>
          </Container> 
    )
}