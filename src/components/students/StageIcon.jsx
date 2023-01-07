import { useState } from "react";
import { useEffect } from "react";
import Api from '../../api/api';
import useRefreshApi from "../../hooks/useRefreshApi";
import StageImage from '../../images/Students-icon.jpg';
import '../../style/StageIcon.css';
import { Link } from "react-router-dom";
//-------------------------------------------------------

export default function StageIcon(props){
  let stage = props.stage
  let link =props.link

  const {refresh}= useRefreshApi();
  
    const [students,setStudents] = useState('')


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
    },[refresh])    
  
    return(
        <div className="box-holder">
            {students&& students.find((e)=>e.stage ===stage) !==undefined && [students.find((e)=>e.stage ===stage)].map((e)=> {
              return(
                  <div className="box" >
                    <Link to='/students/stageOne'>
                      <img  src={StageImage} alt="" /> 
                      <p>stage {e.stage}</p>
                    </Link>
                  </div>
              )})
            }
        </div>
    )
}
