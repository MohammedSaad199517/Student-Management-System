import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Api from '../../api/api';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
//----------------------------------------------------------
     
export default function AddCourse(props){
    const stage = props.stage
    const [subjectCourse1,setSubjectCourse1] = useState('')
    const [subjectCourse2,setSubjectCourse2] = useState('')
    const[subject,setSubject] = useState('');
    const [refresh,setRefresh] = useState(true)
    const handleAdd =(e)=>{
        e.preventDefault() 
        let course=e.target.id
        if (course ==='one'){ Api.postCourse({course,subject:subjectCourse1,stage})  }
        else if (course ==='two'){ Api.postCourse({course,subject:subjectCourse2,stage,})  }
        setSubjectCourse1('');
        setSubjectCourse2('');
        setRefresh(!refresh);  
     
    }
    useEffect(()=>{
        async function getcourses() {
            try {
                const response = await Api.getCourses();
                setSubject(response.data)
            } catch (error) {
              console.error(error);
            }}
            getcourses()
    },[refresh]) 

    const deleteSubject = (e)=>{
        let id =e.target.id;
        console.log(id)
        Api.deleteSubject(id);
        setRefresh(!refresh)
    }
    return(
        <div className="box">
        <h2 className='head'>{stage}</h2>
        <div style={{display:'flex'}} >
            <Table  striped bordered hover >
            <thead  >
                <tr >
                    <th width={'10%'} >N.</th>
                    <th>Course One</th>
                </tr>
            </thead>
            <tbody>
                {(subject.length !== 0)   &&
                    subject.filter(e=> e.stage === stage && e.course ==='one')
                .map((e,i)=>{
                    return(
                        <tr>
                            <td width={'10%'}>{i+1}</td>
                            <td width={"80%"}>{e.subject}</td>
                            <td >
                            <Button id ={e.subjectId} 
                                onClick={deleteSubject} 
                                type="button" variant="outline-danger">Delete</Button>
                            </td>
                        </tr>
                    )
                })}
                <tr>
                    
                <td colSpan={3}>
                    <form id='one' onSubmit={handleAdd}>
                        <input required value={subjectCourse1}
                         onChange={(e)=>{setSubjectCourse1(e.target.value)}} type="text" /> 
                        <Button   type="submit" variant="primary">add Subject</Button>
                    </form>
                </td>
                
                </tr>
            </tbody>
            </Table>
            <Table  striped bordered hover >
            <thead  >
                <tr >
                    <th width={'10%'}>N.</th>
                    <th>Course Two</th>
                </tr>
            </thead>
            <tbody>
                {(subject.length !== 0) &&
                subject.filter(e=> e.stage === stage && e.course ==='two')
                .map((e,i)=>{
                    return(
                        <tr>        
                            <td width={'10%'} >{i+1}</td>
                            {(e.course ==="two")&&<td width={"80%"}> {e.subject}</td>}
                            <td>
                            <Button id ={e.subjectId} 
                                onClick={deleteSubject} 
                                type="button" 
                                variant="outline-danger">Delete</Button>
                                
                            </td>
                        </tr>
                    )
                })}
                <tr>
                <td colSpan={3}>
                    <form id='two' onSubmit={handleAdd}>
                        <input required value={subjectCourse2}
                         onChange={(e)=>{setSubjectCourse2(e.target.value)}} type="text" /> 
                        <Button   type="submit" variant="primary">add Subject</Button>
                    </form>
                </td>
                </tr>
            </tbody>
            </Table>
          

   
        </div>
    </div>
    )
}