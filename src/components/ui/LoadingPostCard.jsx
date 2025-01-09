
import { useState, useEffect } from "react"; // React module for JSX functionaity
import "../css/PostBoardCard.css"; // CSS file for PostBoardCard


import { Card, Row, Col, Spinner } from "react-bootstrap";



function LoadingPostCard(prop) {
    useEffect(() => {
    }, []);

    return (
        <div className="card-container">
            <Card style={{ width: "400px", height: "500px", backgroundColor: "rgba(88, 88, 88, 0.762)" }}>
                <Col>
                    <Row style={{ backgroundColor: "rgba(74, 73, 73, 0.662)", height: "300px" }} className="w-100 mx-auto justify-content-center align-content-center">
                        <Spinner animation="grow" style={{ width: "105px", height: "105px" }} variant="secondary" className="" />

                    </Row>
                    <Row
                        className="mx-auto m-auto w-100 h-25 pt-5 justify-content-center align-content-center"
                    >
                        <Spinner animation="border" style={{ width: "50px", height: "50px" }} variant="secondary" />
                    </Row>
                </Col>
            </Card>
        </div>
    );
}

export default LoadingPostCard;
