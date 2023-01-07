import Container from "react-bootstrap/Container";
import { faCheck, faFolderOpen, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AttendanceRecord (){
    return(
        <Container>
            
            <FontAwesomeIcon icon={faFolderOpen} />
        </Container>
    )
}