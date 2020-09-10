import React, { useState } from "react";
// import "./css/SignUpForm.css";
// import { PersonCircle } from "react-bootstrap-icons"; // Importing Bootstrap Icon Components
import { Dropdown, InputGroup, Form } from "react-bootstrap";
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



    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Type of Post</Form.Label>
                    <Form.Control as="select">
                        <option>Selling Instrument</option>
                        <option>Buying Instrument</option>
                    </Form.Control>
                    <br />
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Post Title:</Form.Label>
                        <Form.Control placeholder="..." />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control placeholder="..." />
                    </Form.Group>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control placeholder="..." />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Post Body</Form.Label>
                        <Form.Control as="textarea" rows="4" />
                    </Form.Group>
                    <br />
                    <Form.Label>Price:</Form.Label>
                    <Form.Control type="number" placeholder="Price" />
                    <Form.Group controlId="formBasicCheckbox">
                    <br />
                    <Form.Check type="checkbox" label="...Or trade" />
                    <Form.Text className="text-muted">
                        Tick this if you want to add the tag "Or trade" next to your price!
                    </Form.Text>
                    </Form.Group>

                    <Form.File id="browseImageControl" label="Load your post images" />


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


