import RegisterStudents from "./RegisterStudents";
import Api from '../../api/api'
import StageIcon from "./StageIcon";
import '../../style/StageIcon.css'
import Container from "react-bootstrap/esm/Container";
import { useEffect, useState } from "react";
//----------------------------------------------------
export default function Students(props){
    let role =props.role;
    const [courses , setCourses] = useState('');
    useEffect(()=>{
        const getData=()=>{
            const res = Api.getCourses()
            setCourses(res.data)
        }
    },[])
    return(
        <Container>
            { role === "admin"&& 
                <RegisterStudents accountType={'student'}/> 
    }{
                <div className="content">
                    <div> <StageIcon link='/students/stageOne' stage='one'/></div>
                    <div> <StageIcon link='/students/stageTwo' stage='two'/></div>
                    <div> <StageIcon link='/students/stageThree' stage='three'/></div>
                    <div> <StageIcon link='/students/stageFour' stage='four'/></div>   
                </div>
            }
       
        </Container>
    )
}