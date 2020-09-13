import React, { useState } from "react";
// import "./css/SignUpForm.css";
// import { PersonCircle } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components
import { Dropdown, InputGroup, Form, Button } from "react-bootstrap";
import FormSelector from "./FormSelector";

const accountLogo = "";
function BoardPostForm() {

    // Dropdown hook to grab value from selected/targeted dropdown item
    //    const [dropdownItem, setDropdownItem] = useState(-1) 
    // Form selection value to grab value from dropdown item as reference to select which form to fill out    
    //    const [formSelectId, setformSelectId] = useState(0);

    // Grabs and updates dropdown selection id 
    //   function grabDropdownItem(event){
    //     // console.log(event);
    //     // console.log("The event key is: " + event)
    //     setDropdownItem(event);
    //   }


    let [newPost, setNewPost] = useState({
        
    })

    // Function that creates new user via fetch POST request
    async function CREATE_NEW_POST(newPost) {
        fetch('/api/insertpost', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newPost)

        })
            .then((res) => { return res })
            .then((data) => { console.log("data:" + data) })
            .catch(err => { console.log("An error has occurred:::: " + err) })
    }

    function formAccSubmit(e) {
        e.preventDefault();
        console.log(newPost);
        CREATE_NEW_POST(newPost);
    }
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Type of Post</Form.Label>
                    <Form.Control
                        as="select"
                        onChange={e => setNewPost(newPost, newPost["type"] = e.target.value)}
                        value={newPost.type}
                    >
                        <option>Selling Instrument</option>
                        <option>Buying Instrument</option>
                    </Form.Control>
                    <br />
                    <Form.Label>Instrument</Form.Label>
                    <Form.Control
                        as="select"
                        onChange={e => setNewPost(newPost, newPost["instrument"] = e.target.value)}
                        value={newPost.instrument}
                    >
                        <option>Guitar</option>
                        <option>Bass</option>
                        <option>Drums</option>
                        <option>Percussion</option>
                        <option>Synthesizer</option>
                        <option>Brass</option>
                        <option>Woodwinds</option>
                        <option>Microphones</option>
                        <option>Studio Equipment</option>
                    </Form.Control>
                    <br />
                    <Form.Group controlId="formGridTitle">
                        <Form.Label>Post Title:</Form.Label>
                        <Form.Control placeholder="..."
                            onChange={e => setNewPost(newPost, newPost["title"] = e.target.value)}
                            value={newPost.title}
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridPhone">
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control placeholder="..."
                            onChange={e => setNewPost(newPost, newPost["number"] = e.target.value)}
                            value={newPost.phone}
                        />
                    </Form.Group>
                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control placeholder="..."
                            onChange={e => setNewPost(newPost, newPost["email"] = e.target.value)}
                            value={newPost.email}
                        />
                    </Form.Group>

                    <Form.Group controlId="formGrid.body">
                        <Form.Label>Post Body</Form.Label>
                        <Form.Control as="textarea" rows="4" 
                         onChange={e => setNewPost(newPost, newPost["pBody"] = e.target.value)}
                         value={newPost.pBody}
                        />
                    </Form.Group>
                    <br />
                    <Form.Label>Price:</Form.Label>
                    <Form.Control type="number" placeholder="Price"
                           onChange={e => setNewPost(newPost, newPost["price"] = e.target.value)}
                           value={newPost.price}
                    />
                    <Form.Group controlId="formGrid-trade">
                        <br />
                        <Form.Check type="checkbox" label="...Or trade" />
                        <Form.Text className="text-muted">
                            Tick this if you want to add the tag "Or trade" next to your price!
                    </Form.Text>
                    </Form.Group>
                    <Form.File id="browseImageControl" label="Load your post images" />
                    <Button onClick={formAccSubmit}>TEST</Button>
                </Form.Group>

            </Form>

            {/* <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1"><span className="font-weight-bold">Type Of Post:</span></InputGroup.Text>
                </InputGroup.Prepend>
                <Dropdown>
                    <Dropdown.Toggle variant="white" id="dropdown-basic">Post Type</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" eventKey = {1} onSelect={grabDropdownItem}>Selling Gear</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" eventKey = {2} onSelect={grabDropdownItem}>Buying Gear</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" eventKey = {3} onSelect={grabDropdownItem}>Trading Gear</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" eventKey = {4} onSelect={grabDropdownItem}>Bandmate Search</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" eventKey = {5} onSelect={grabDropdownItem}>Repair Search</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey = {6} onSelect={grabDropdownItem}>Gig Search</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey = {7} onSelect={grabDropdownItem}>Gig Offering</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey = {8} onSelect={grabDropdownItem}>Jam Shesh Search</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey = {9} onSelect={grabDropdownItem}>Jam Shesh Offering</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey = {10} onSelect={grabDropdownItem}>Lesson Search</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey = {11} onSelect={grabDropdownItem} >Lesson Offering</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey = {12} onSelect={grabDropdownItem}>Promoter Search</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey = {13} onSelect={grabDropdownItem}>Promoter Offering</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey = {14} onSelect={grabDropdownItem}>Misc. Services Search</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" eventKey = {15} onSelect={grabDropdownItem}>Misc. Services Offering</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </InputGroup> */}
            {/* <h1 style={{color:"red"}}>{dropdownItem}</h1> */}
            {/* <FormSelector id={dropdownItem} />                */}


        </div >
    );
}

export default BoardPostForm;


