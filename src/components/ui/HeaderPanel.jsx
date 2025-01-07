
import { Container } from "react-bootstrap";

function HeaderPanel({ children }) {

    return (
        <Container style={{backgroundColor:"darkCyan"}} className=" p-4 mt-5 shadow-lg">
            {children}
        </Container>
    )

}

export default HeaderPanel;