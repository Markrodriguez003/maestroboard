
// REACT COMPONENTS
import { Container, Spinner } from "react-bootstrap";

function LoadingSpinner({ title, type = "border" }) {



    return (
        <Container className="mx-auto text-center mt-5">
            <h1 style={{ color: "white" }}>{title}. . . </h1>
            <Spinner animation={type} variant="info" className="mt-4" style={{
                height: '5rem',
                width: '5rem',
                fontSize: "45px"
            }} />
        </Container>

    )
}


export default LoadingSpinner;