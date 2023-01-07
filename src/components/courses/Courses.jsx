import Container from 'react-bootstrap/esm/Container'
import '../../style/courses.css'
import AddCourse from './AddCourse'
export default function Courses(){
    return(
        <div className='courses'>
            <Container>
                {/* -------------------------------stage one------------------------------------ */}
                <AddCourse stage={'Stage One'}/>
                 {/* -------------------------------stage two------------------------------------ */}
                 <AddCourse stage={'Stage Two'}/>
                {/* -------------------------------stage three------------------------------------ */}
                <AddCourse stage={'Stage Three'}/>
                {/* -------------------------------stage four------------------------------------ */}
                <AddCourse stage={'Stage Four'}/>
 
            </Container>
        </div>
    )
}