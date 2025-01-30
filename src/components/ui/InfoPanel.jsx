
// COMPONENTS
import { Button, Container } from "react-bootstrap";

// THEME & DESIGN
import { SITE_COLORS } from "../css/site";


/*----------------------------------------------------------------------------
|   ⚙️ Use: A panel that can be used as a header or paragraph container panel 
|        
|   🔧 Todo: Add design themes & css functionality
|
|   📦 Returns: JSX component 
*----------------------------------------------------------------------------*/

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
