import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import DefaultImage from '../images/male-user.jpg'
import useAuth from '../hooks/useAuth';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container';
function SideBar() {
    const {auth} = useAuth();
    
  return (
    <Container>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={DefaultImage}/>
      <Card.Body>
        <Card.Title>{auth?.name}</Card.Title>
        <Card.Text>
          {/* Some quick example text to build on the card title and make up the
          bulk of the card's content. */}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      {auth.role === "admin" && 
        <ListGroup.Item 
        >
          <Link 
          style={{
            textDecoration: "none",
            color:'black',
          
          }}
          to='/students'
          > Students</Link>
        </ListGroup.Item>
      }

        <ListGroup.Item 
        >
          <Link 
          style={{
            textDecoration: "none",
            color:'black',
          
          }}
          to='/teachers'
          > Teachers</Link>
        </ListGroup.Item>
        
    {auth.role === "admin" &&   <ListGroup.Item>
          <Link 
            style={{
              textDecoration: "none",
              color:'black',
            }}
            to='/courses'>
            Courses
          </Link>
        </ListGroup.Item>}
    {auth.role === "admin" &&   <ListGroup.Item>
      <Link 
        style={{
          textDecoration: "none",
          color:'black',
        }}
        to='/marks-managments'>
        Marks Management
      </Link>
    </ListGroup.Item>}
    
    {auth.role === "teacher" &&   <ListGroup.Item>
      <Link 
        style={{
          textDecoration: "none",
          color:'black',
        }}
        to='/attendance'>
        attendance
      </Link>
    </ListGroup.Item>}
    {auth.role === "admin" &&   <ListGroup.Item>
      <Link 
        style={{
          textDecoration: "none",
          color:'black',
        }}
        to='/attendance/record'>
        Attendance Record
      </Link>
    </ListGroup.Item>}
    {auth.role === "admin" &&   <ListGroup.Item>
      <Link 
        style={{
          textDecoration: "none",
          color:'black',
        }}
        to='/schedule'>
        Schedule
      </Link>
    </ListGroup.Item>}
    {auth.role === "admin" &&   <ListGroup.Item>
      <Link 
        style={{
          textDecoration: "none",
          color:'black',
        }}
        to='/'>
        Admin Assistant
      </Link>
    </ListGroup.Item>}
        
        </ListGroup>
    
    </Card>
    </Container>
  );
}

export default SideBar;