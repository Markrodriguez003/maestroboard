
// COMPONENTS
import { Container, Spinner, Stack } from "react-bootstrap";
import { SITE_COLORS } from "../css/site";


function LoadingPageElement({ header, icon, children, bgColor = SITE_COLORS.main, spinner = false }) {
    return (
        <Container as={"div"} className={"p-5 mt-5  shadow-lg text-light rounded text-center"} style={{ backgroundColor: bgColor }}>
            <Stack direction="vertical" >
                <div className="mb-4">
                    {icon}
                </div>
                <h1>{header}</h1>
            </Stack>
            {spinner ? <Spinner style={{ color: "teal", fontSize: "35px", width: "50px", height: "50px" }} /> : <></>}
            <br />
            <div>{children}</div>
        </Container >
    )
}

export default LoadingPageElement;