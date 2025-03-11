// ASSETS
import { Container } from "react-bootstrap";
import { Newspaper } from "react-bootstrap-icons";

// DESIGN
import { SITE_COLORS } from "../css/site";

/*----------------------------------------------------------------------------
|   ⚙️ Use: Side ul panel to hold articles and misc. links
|                  
|   🔧 Todo: Offer more robust design options / add icons
|
|   📦 Returns: JSX component 
*----------------------------------------------------------------------------*/

function QuickArticlesPanel({ articles }) {



    return (
        <div className="rounded" style={{ width: "100%", backgroundColor: "rgba(0,0,0,0.7)", paddingBottom: "10px" }}>

            <Container fluid className="p-0 m-0" style={{ backgroundColor: SITE_COLORS.alternateSecondaryLight }}>

                <br />
                <h2 style={{ color: "white", textAlign: "center" }}> <Newspaper style={{ paddingBottom: "7px", fontSize: "40px" }} /> Quick Articles</h2>
                <hr style={{ color: "white" }} />
            </Container>
            <ul>
                {articles.map((a, i) => (
                    <li key={`Quick - ${a.title} - ${i}`} style={{ color: "white", marginBottom: "12px" }}><a style={{ color: "white", fontSize: "20px" }} href={a.link}>{a.title}</a></li>
                ))}
            </ul>
        </div >
    )
}

export default QuickArticlesPanel;