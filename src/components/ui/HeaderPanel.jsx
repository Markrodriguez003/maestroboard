
import { Container } from "react-bootstrap";

function HeaderPanel({ children }) {

    return (
        <Container fluid
            style={{
                // border: "rgba(0,0,0,0.3) 3px solid",
                // borderRadius: "20px",
                backgroundColor: "rgb(0, 66, 65)"
            }}
            // className="p-4 mt-5 text-center shadow-lg">
            className="p-4 mb-2 mt-3 text-start">
            {children}
        </Container>
    )

}

export default HeaderPanel;