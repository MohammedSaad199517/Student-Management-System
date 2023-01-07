import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function SetSchedule() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log('test')
    }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Subject
      </Button>

      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
            <Modal.Title>Add Subject</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{display:'flex' ,flexDirection:'column'}}>
                <div style={{marginBottom:'10px'}}>
                    <label >Select Subject : </label>
                    <select style={{margin:' 0px 10px'}}>
                        <option>subject one</option>
                        <option>subject Two</option>
                    </select>  
                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                    <label>Select Time  : </label>
                    <label style={{margin:' 0px 10px'}}>From</label>
                    <input type={'time'}/>
                    <label style={{margin:' 0px 10px'}} >To</label>
                    <input type={'time'}/>
                </div>


            
            </Modal.Body>
            <Modal.Footer>
            <Button  variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button type='submit' variant="primary" onClick={handleClose}>
                Add 
            </Button>
            </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}






// import '../../style/setSchedule.css';
// import Button from "react-bootstrap/esm/Button";

// export default function SetSchedule(){
//     return(
//         <div className='cover-setSchedule' >
//             <div className="box">
         
//                 <form  className='add-form'>
//                     <div>
//                     <label>Select Subject :</label>
//                     <select>
//                         <option>wwwwwwwwwww</option>
//                         <option>2</option>

//                     </select>
//                     </div>
//                     <div>
//                     <label>Time :</label>
//                     <input type='text' placeholder='example : 08:30 - 10:30'/>
//                     </div>
//                     <Button type='submit'>Add</Button>
//                 </form>
        

//             </div>

//         </div>
//     )
// }

