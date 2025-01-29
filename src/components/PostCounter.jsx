
import "./css/PostCounter.css";
import { Button, Container } from "react-bootstrap";

function PostCounter(props) {
    return (
        <Container className="mx-auto p-3 ml-5 w-100 text-center" >

            <h1 className="display-4">Live post uploads to our community board</h1>
            <h3 className="lead">Total posts: 241,923 </h3>
            <h3 className="lead">Total buying gear posts: 41,145 </h3>
            <h3 className="lead">Total selling gear posts: 100,224 </h3>

            <Button variant="info" href="/board" className="mt-2">Browse our Community Board!</Button>

        </Container>
    );
}

export default PostCounter;
