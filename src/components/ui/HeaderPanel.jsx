
import { Container } from "react-bootstrap";

function HeaderPanel({ children }) {

    return (
        <Container
            style={{
                // border: "rgba(0,0,0,0.3) 3px solid",
                // borderRadius: "20px",
                // backgroundColor: "rgba(0, 99, 97, 0.985)"
            }}
            // className="p-4 mt-5 text-center shadow-lg">
            className="p-3 mt-3 text-center">
            {children}
        </Container>
    )

}

export default HeaderPanel;