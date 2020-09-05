import React from "react";
import "./css/Forum.css";
import Header from "./Header";
import Footer from "./Footer";
import { MusicNoteBeamed, MusicNoteList,CardHeading, PencilSquare, NutFill } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components
import { Row, Col, Button, Pagination, Card, ListGroup, Accordion, Jumbotron } from "react-bootstrap";
function Forum() {
    let active = 2;
    let items = [];
    for (let number = 1; number < 12; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <div>
            <Header />
            <Card className="forum-container">
                <Card.Header className="display-4 forum-header"><CardHeading /> MaestroBoard Forums</Card.Header>
                <Card.Body className="forum-body">
                    <Card.Text className="font-weight-bold lead forum-sub-header">
                    <MusicNoteBeamed /> Gear Talk -
                      <small>  Talk here about everything gear related! <Button  className="float-right forum-post-btn"><PencilSquare /> Create Post</Button></small>
                    </Card.Text>
                    <ListGroup variant="flush" className="forum-section-headers">
                        <ListGroup.Item className="font-weight-bold float-left"><a><MusicNoteList /> Guitar - <small className="ml-3 text-muted">Discussions: 566 Messages: 117,684</small></a>
                            <small className="ml-3 text-muted float-right">Latest Post: Review - Ibanez 7 string Gem - Posted By: Asmongo22</small> </ListGroup.Item>

                        <ListGroup.Item className="font-weight-bold float-left"><a><MusicNoteList /> Bass - <small className="ml-3 text-muted">Discussions: 231 Messages: 92,244</small></a>
                            <small className="ml-3 text-muted float-right">Latest Post: Bass Intonation Problems - Posted By: Bassdude1092</small></ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold float-left"><a><MusicNoteList /> Drums and Percussion -   <small className="ml-3 text-muted">Discussions: 431 Messages: 122,108</small></a>
                            <small className="ml-3 text-muted float-right">Latest Post: Drum tuner worth it? - Posted By: RushBandThebest</small></ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold float-left"><a><MusicNoteList /> Brass</a> - <small className="ml-3 text-muted">Discussions: 122 Messages: 4,237</small>
                            <small className="ml-3 text-muted float-right">Latest Post: Wine cork for pads good or bad? - Posted By: WinterJazz420</small></ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold float-left"><a><MusicNoteList /> Woodwinds - <small className="ml-3 text-muted">Discussions: 71 Messages: 2,125</small></a>
                            <small className="ml-3 text-muted float-right">Latest Post: Basson players help!  - Posted By: WinterJazz420</small></ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold float-left"><a><MusicNoteList /> Studio Equipment - <small className="ml-3 text-muted">Discussions: 431 Messages: 232,553</small></a>
                            <small className="ml-3 text-muted float-right">Latest Post: UAD 4710D is an AMAZING preamp! - Posted By: JasonXBorne</small></ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>



            <Card className="forum-container">
                <Card.Body className="forum-body">
                    <Card.Text className="font-weight-bold lead forum-sub-header">
                    <MusicNoteBeamed /> Artist Lounge -
                      <small>  Meet and mingle with your fellow artists! <Button className="float-right forum-post-btn"><PencilSquare /> Create Post</Button></small>
                    </Card.Text>
                     <div className="forum-section-headers">
                     <ListGroup variant="flush" >
                        <ListGroup.Item className="font-weight-bold float-left"><a><MusicNoteList /> Introduce Yourself! -   <small className="ml-3 text-muted">Discussions: 221 Messages: 25,558</small></a>
                            <small className="ml-3 text-muted float-right">Latest Post: Sup ya'll. It's ya boy Asmon - Posted By: Asmongo22</small></ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold float-left"><a><MusicNoteList /> Album & Vinyl Drop - <small className="ml-3 text-muted">Discussions: 226 Messages: 87,242</small></a>
                            <small className="ml-3 text-muted float-right">Latest Post: Mars Volta - Francis the Mute - Best album - Posted By: progheadhunter</small> </ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold float-left"><a><MusicNoteList /> Concerts & Venues - <small className="ml-3 text-muted">Discussions: 81 Messages: 8,108</small></a>
                            <small className="ml-3 text-muted float-right">Latest Post: Between the buried and me - Posted By: BobPromoter</small></ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold float-left"><a><MusicNoteList /> Help corner</a> - <small className="ml-3 text-muted">Discussions: 1822 Messages: 127,113</small>
                            <small className="ml-3 text-muted float-right">Latest Post: Major 7th interval help - Posted By: rickyjazzguy14</small></ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold float-left"><a><MusicNoteList /> Recording & Production - <small className="ml-3 text-muted">Discussions: 12,411 Messages: 322,125</small></a>
                            <small className="ml-3 text-muted float-right"> Latest Post: In box or out of box mixing? - Posted By: 42PropLet42</small></ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold float-left"><a><MusicNoteList /> DIY - <small className="ml-3 text-muted">Discussions: 4231 Messages: 142,277</small></a>
                            <small className="ml-3 text-muted float-right">Latest Post: Custom sound isolation pads - Posted By:YXqcXds82</small></ListGroup.Item>
                    </ListGroup>
                     </div>
                </Card.Body>
            </Card>

            <Card className="forum-container">
                <Card.Body className="forum-body">
                    <Card.Text className="font-weight-bold lead forum-sub-header">
                    <MusicNoteBeamed />  Site Help -
                      <small>  Offer your suggestions regarding the site! <Button className="float-right forum-post-btn"><PencilSquare /> Create Post</Button></small>
                    </Card.Text>
                     <div className="forum-section-headers">
                     <ListGroup variant="flush" >
                        <ListGroup.Item className="font-weight-bold float-left"><a><NutFill /> Site recommendations -   <small className="ml-3 text-muted">Discussions: 81 Messages: 4558</small></a>
                            <small className="ml-3 text-muted float-right">Latest Post - Profile Pictures? - Posted By: AlfonsoXIV</small></ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold float-left"><a><NutFill /> Advertisement - <small className="ml-3 text-muted">Discussions: 44 Messages: 442</small></a>
                            <small className="ml-3 text-muted float-right">Latest Post: Cosmo Pedalworks - Posted By: Cmos</small> </ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold float-left"><a><NutFill /> Legal - <small className="ml-3 text-muted">Discussions: 12 Messages: 223</small></a>
                            <small className="ml-3 text-muted float-right">Latest Post: Licensing for custom work - Posted By: gnarlsy1</small></ListGroup.Item>
                        <ListGroup.Item className="font-weight-bold float-left"><a><NutFill /> Site Help</a> - <small className="ml-3 text-muted">Discussions: 52 Messages: 90</small>
                            <small className="ml-3 text-muted float-right">Latest Post: Locked out of account help! - Posted By: phillpo</small></ListGroup.Item>
                    </ListGroup>
                     </div>

                </Card.Body>
                <div className="forum-pagination"> <Pagination className="mt-4 ml-4 ">{items}</Pagination></div>
            </Card>




            <Footer />
        </div>
    )
}
export default Forum