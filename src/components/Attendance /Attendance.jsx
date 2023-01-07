import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/Table";
import Api from '../../api/api';
import AttendanceRecord from "./AttendanceRecord";
import { faCheck, faFolderOpen, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Attendance(){
    const [students,setStudents] = useState('')

    const date =new Date();
    
   
    useEffect(()=>{
        async function getUser() {
            try {
              const response = await Api.getStudents()
              
              setStudents(response.data)
            } catch (error) {
              console.error(error);
            }
            }
            getUser()
    },[])  
    return(
      <Container>
             <div style={{display:'flex',color:'white' ,marginBottom:'10px'}}>
                <FontAwesomeIcon style={{fontSize:'50px'}} icon={faFolderOpen} />
                <button><h2>Attendance Record</h2></button>
             </div>
           
        <div style={{backgroundColor:'white'}}>
            <form action="">
                <Table striped bordered hover>
                <thead>
                <tr > <td colSpan={3}><h2> Date :{date.getFullYear()}/{date.getMonth() +1}/{date.getDate()}</h2></td></tr>
                    <th width={'10%'} >N.</th>
                    <th width={'50%'} >Name</th>
                   
                    <th width={'10%'} >attendance</th>
                </thead>
                <tbody>
                  
                    {
                        students.length !==0 && students.map((e,i)=>{
                            return(
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{e.name}</td>
                                    <td><input type="checkbox" name="" id="" /></td>

                                </tr>
                            )
                        })
                    }
                </tbody>

            </Table>
           <Button type="submit" size='lg'>Save</Button>
            </form>

        </div>
      </Container>
    )
}