import Container from "react-bootstrap/esm/Container";
import RegisterTeacher from "./RegisterTeacher";
import TeachersTable from "./TeachersTable";
export default function Teachers(props){
    const role = props.role;
    return(
        <>
            <Container>
              {role ==='admin' &&  <RegisterTeacher/>}
                <TeachersTable/>
            </Container>
        </>
    )
}