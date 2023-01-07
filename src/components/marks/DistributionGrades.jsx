import Api from '../../api/api';
import Container from "react-bootstrap/Container";
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams  } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//-------------------------------------------------
export default function DistributionGrades(){
    let { id } = useParams();
   
    const [subjects,setSubjects] = useState([]);
    useEffect(()=>{
        const getSubjects= async()=>{
            const res =await Api.getCourses();
            setSubjects(res.data)
        }
        getSubjects()
    },[])
    console.log(subjects.length !==0 && subjects.find(e=>e.subjectId ==id))
    return(
     <Container>
        <h1 style={{color:'white',border:'none'}}>subject name : {subjects.length !==0 && subjects.find(e=>e.subjectId ==id).subject}</h1>
 

<div style={{backgroundColor:'white',width:'40%',margin:'0px  auto 100px '}}>
    <Form style={{padding:'10px',}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> activity name</Form.Label>
        <Form.Control required type="text" placeholder="activity name" />
     
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>grade</Form.Label>
        <Form.Control required type="number" placeholder="grade" />
      </Form.Group>
  
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
        <div style={{backgroundColor:'white' }}>
        <Table striped bordered hover >
            <thead>
                <th>mid one</th>
                <th>mid two</th>
                <th> assignment</th>
                <th>attendance</th>
                <th>final</th>
            </thead>
            <tbody>
                <td>15%</td>
                <td>15%</td>
                <td>15%</td>
                <td>5%</td>
                <td>50%</td>
            </tbody>
        </Table>
        </div>
     </Container>
    )
}