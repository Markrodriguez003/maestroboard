// REACT
import { useEffect } from "react"

// LIBRARY
import { useNavigate } from "react-router";

// ASSETS
import { SITE_COLORS } from "./css/site";
import { PersonRaisedHand } from "react-bootstrap-icons";
// COMPONENTS
import { Container } from "react-bootstrap";
import LoadingSpinner from "./ui/LoadingSpinner";

function Logout() {

    let navigate = useNavigate();

    useEffect(() => {

        const signingOut = setTimeout(signout, 1000);

        function signout() {
            sessionStorage.setItem('token', null);
            sessionStorage.setItem('isLoggedIn', false);
            // navigate(0);
            navigate('/home');
            window.location.reload();
        }

        signingOut;
    }, [])

    return (
        <>
            <Container style={{ backgroundColor: SITE_COLORS.main }} className="w-50 p-2 mt-5 mb-5 mx-auto text-center">
                <PersonRaisedHand style={{ fontSize: "110px", color: "white" }} className="mt-5" />
                <LoadingSpinner title={"Logging out"} />
                <br />
                <br />
            </Container>
        </>)


}

export default Logout;