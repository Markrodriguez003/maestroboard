
import "./css/ForumPostCounter.css";
import { Button, Container } from "react-bootstrap";

function ForumPostCounter(props) {
    return (
        <div className="Forum-PostCounter-container">
            <Container className="Forum-PostCounter-jumbotron mx-auto">
                <div className="Forum-PostCounter-body">
                    <h1 className="display-4">Live post uploads to our community forums</h1>
                    <h3 className="lead">Total forum posts: 41,133 </h3>
                    <Button variant="info" href="/forum" className="mt-2">Browse our Forum!</Button>
                </div>
            </Container>
        </div >
    );
}

export default ForumPostCounter;
