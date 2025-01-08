
import { Container } from "react-bootstrap";

function HeaderPanel({ children }) {

    return (
        <Container fluid
            style={{
                // border: "rgba(0,0,0,0.3) 3px solid",
                // borderRadius: "20px",
                // backgroundColor: "rgba(0, 99, 97, 0.985)"
            }}
            // className="p-4 mt-5 text-center shadow-lg">
            className="p-4 mt-3 text-start">
            {children}
        </Container>
    )

}

export default HeaderPanel;