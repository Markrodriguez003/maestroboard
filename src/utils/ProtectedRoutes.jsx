
// REACT
import { useState, useEffect } from "react";

// LIBRARIES
import axios from "axios";
import { Outlet, Navigate } from "react-router";

// COMPONENTS
import PageNotFound from "../components/pages/PageNotFound";
import LoadingSpinner from "../components/ui/LoadingSpinner";



/*----------------------------------------------------------------------------
|   ⚙️ Use: A sort of "Middleware" version of a component that checks to see
|            if user has access to certain pages by checking JWT token.
|       
|   🔧 Todo: Add dashboard for general users
|
|   📦 Returns: JSX component 
*----------------------------------------------------------------------------*/


function ProtectedRoutes() {


    console.log("INSIDE PROTECTED ROUTE!")
    // HOLDS TRIGGER FOR AUTHENTICATED USER
    const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(null);


    useEffect(() => {

        //    GRABBING SESSION MEMORY TO CHECK TO SEE IF USER IS SIGNED IN
        // VIA TOKEN DATA
        function getSessionToken() {
            const tokenString = sessionStorage.getItem('token');
            const userToken = JSON.parse(tokenString);

            return userToken;
        };


        // CHECKS TOKEN WITH THE BACKEND TO SEE IF TOKEN IS VALID 
        async function authenticateUser() {
            const token = getSessionToken();

            if (!token || token === null) {
                console.log(`TOKEN IS EMPTY!`)
                setIsAuthenticatedUser(false);
                return;
            }

            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    "Data": "Custom-Data"
                }
            }

            await axios
                .get("http://localhost:3005/api/auth/user", config)
                .then((response) => {
                    console.log(`Response inside auth route::${JSON.stringify(response.data.adminLogin)} + ${JSON.stringify(response.data.login)}`)

                    if (response.data.login && response.data.adminLogin) {
                        setIsAuthenticatedUser(true);
                    } else {
                        setIsAuthenticatedUser(false);
                    }

                })
                .catch((err) => {
                    setIsAuthenticatedUser(false);

                });
        }

        authenticateUser();

    }, [])

    return isAuthenticatedUser ? <Outlet /> : isAuthenticatedUser === null ? <LoadingSpinner title={"Loading page. . ."}></LoadingSpinner> : <Navigate to={"/404"} />
}

export default ProtectedRoutes;