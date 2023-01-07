import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SetSchedule from "./SetSchedule";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function Schedule(){
    return(
        <Container>
            {/* <SetSchedule/> */}
            <div style={{backgroundColor:'white'}}>
                <Tabs
                    defaultActiveKey="stageOne"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                    >
                    <Tab  eventKey="stageOne" title="Stage One">
                        <div style={{backgroundColor:"white",textAlign:'center'}}>
                            <Table  striped bordered hover>
                                <thead>
                                   
                                    <th>Sunday</th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                </thead>
                                <tbody>
                                    <tr>
                                     
                                        <td>
                                            <Button>
                                                <SetSchedule/>
                                            </Button>
                                        </td>
                                        <td>
                                            <Button>
                                                <SetSchedule/>
                                            </Button>
                                        </td>
                                        <td>
                                            <Button>
                                            <   SetSchedule/>
                                            </Button>
                                        </td>
                                        <td>
                                            <Button>
                                                <SetSchedule/>
                                            </Button>
                                        </td>
                                        <td>
                                            <Button>
                                                <SetSchedule/>
                                            </Button>
                                        </td>
                                
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                     </Tab>
                    <Tab eventKey="stageTow" title="Stage Two">
                    <div style={{backgroundColor:"white",textAlign:'center'}}>
                            <Table  striped bordered hover>
                                <thead>
                                    
                                    <th>Sunday</th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                </thead>
                                <tbody>
                                    <tr>
                                    
                                        <td>
                                            <Button>
                                                add subject
                                            </Button>
                                        </td>
                                        <td>
                                            <Button>
                                                add subject
                                            </Button>
                                        </td>
                                        <td>
                                            <Button>
                                                add subject
                                            </Button>
                                        </td>
                                        <td>
                                            <Button>
                                                add subject
                                            </Button>
                                        </td>
                                        <td>
                                            <Button>
                                                add subject
                                            </Button>
                                        </td>
                                
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Tab>
                    <Tab eventKey="stageThree" title="Stage Three">
                    <div style={{backgroundColor:"white",textAlign:'center'}}>
                            <Table  striped bordered hover>
                                <thead>
                                   
                                    <th>Sunday</th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                </thead>
                                <tbody>
                                    <tr>
                                      
                                        <td>
                                            <Button>
                                                add subject
                                            </Button>
                                        </td>
                                        <td>
                                            <Button>
                                                add subject
                                            </Button>
                                        </td>
                                        <td>
                                            <Button>
                                                add subject
                                            </Button>
                                        </td>
                                        <td>
                                            <Button>
                                                add subject
                                            </Button>
                                        </td>
                                        <td>
                                            <Button>
                                                add subject
                                            </Button>
                                        </td>
                                
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Tab>

                    <Tab eventKey="stageFour" title="Stage Four">
                    <div style={{backgroundColor:"white",textAlign:'center'}}>
                            <Table  striped bordered hover>
                                <thead>
                                   
                                    <th>Sunday</th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                </thead>
                                <tbody>
                                    <tr>
                                     
                                        <td>
                                            <Button>
                                                add subject
                                            </Button>
                                        </td>
                                        <td>
                                            <Button>
                                                add subject
                                            </Button>
                                        </td>
                                        <td>
                                            <Button>
                                                add subject
                                            </Button>
                                        </td>
                                        <td>
                                            <Button>
                                                add subject
                                            </Button>
                                        </td>
                                        <td>
                                            <Button>
                                                add subject
                                            </Button>
                                        </td>
                                
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </Container>
    )
}





