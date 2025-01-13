
import { Container } from "react-bootstrap";

// STYLING
import { SITE_COLORS } from "../css/site";

function HeaderPanel(props) {
    const { bgColor = SITE_COLORS.main, width = "w-100", color = "white" } = props;
    return (
        <Container fluid
            style={{
                backgroundColor: bgColor,
            }}
            className={`p-2     shadow-lg ${width} `}
        // className={`p-0 m-0 shadow-lg ${width} `} 
        >
            {props.children}
        </Container >
    )

}

export default HeaderPanel;