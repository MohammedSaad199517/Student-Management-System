import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'
import defaultUser from '../images/male-user.jpg'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../style/Header.css'
import Nav from 'react-bootstrap/Nav';
import useAuth from '../hooks/useAuth';
//----------------------------------------------------------
function Header() {
    const navigate = useNavigate();
    const logout = useLogout();
    const signOut = async () => {
        await logout();
        navigate('/login');
    }
    const { auth } = useAuth();
    
  return (
    <Navbar bg="dark"  variant='primary' expand="sm">
      <Container  >
        <div className="header">
        <Navbar.Brand  bg='light' href="#home">
         
            <img style={{
            backgroundColor:'#fff',
            borderRadius:'10px'
          }} width='300'  src={logo} alt="" />
          
          
          </Navbar.Brand>
        <h1 style={{textAlign:'center',color:'white'}}>student Management System</h1>
        <div  className="dropdown text-end">
    
         
          { auth?.role &&<DropdownButton
               as={ButtonGroup}
             
              id={`dropdown-button-drop-down`}
              drop='down'
              variant="dark"
              key="dark"
              title={
                <a href="#" style={{alignItems:'center'}} className="d-flex   link-dark text-decoration-none  show" data-bs-toggle="dropdown" aria-expanded="true">
                  <p style={{margin:'auto 5px', color:'#fff',fontWeight:'bold', textTransform: "capitalize"}}>
                  {auth?.name}
                  </p>
                  <img src={defaultUser} alt="mdo" width="32" height="32" class="rounded-circle"/>
              </a>
              }
            
            >
            
              <Dropdown.Item style={{color:'black'}} eventKey="2">Profile</Dropdown.Item>
              <Dropdown.Item style={{color:'black'}} eventKey="3">Setting</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item style={{color:'black'}} onClick={signOut} eventKey="4">Sign Out</Dropdown.Item>
            </DropdownButton>}
        </div>
        <div className='options'>
 
      <Navbar bg="dark" variant="dark">
        <Container>
         
          <Nav className="me-auto">
            <Nav.Link > <Link  style={{color:'white',textDecoration:'none'}} to='/'> Home</Link></Nav.Link>
          { auth?.role ==="student" &&  <Nav.Link > <Link style={{color:'white',textDecoration:'none'}} to='/'> My courses</Link></Nav.Link>}
         
        
          </Nav>
        </Container>
        </Navbar>


        </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;