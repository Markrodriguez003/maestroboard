
// COMPONENTS
import { Button, Container } from "react-bootstrap";

// THEME & DESIGN
import { SITE_COLORS } from "../css/site";

function InfoPanel({ bgColor = SITE_COLORS.main, color = "white", width = "100", rounded = "rounded-0", children }) {
    return (

        <Container
            className={`shadow-lg p-3 text-center w-${width} ${rounded}`}
            style={{ backgroundColor: bgColor, color: color }
            }  >
            {children}
        </Container >
    );
}

export default InfoPanel;
