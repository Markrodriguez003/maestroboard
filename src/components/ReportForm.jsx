// DESIGN - STYLING
import "./css/ReplyForm.css";
import { SITE_COLORS } from "./css/site";

// COMPONENTS
import {
  Form,
  InputGroup,
  FormControl,
  Stack,
} from "react-bootstrap";


/*----------------------------------------------------------------------------
|   ⚙️ Use: Report post panel text
|                     
|   🔧 Todo: Add more reporting options || google captcha verification 
| 
|   📦 Returns: JSX component 
*----------------------------------------------------------------------------*/

function ReplyForm() {
  return (
    <div className="p-4" style={{ backgroundColor: SITE_COLORS.lightMain, color: "white" }}>
      <p className="font-weight-bold">Report Cases - <small style={{ color: "white", fontSize: "12px" }}>Please select the below option(s) that may apply.</small> </p>
      <InputGroup className="mb-3">

        <Stack direction="vertical">

          <Form.Group controlId="missing-info">
            <Form.Check
              type="checkbox"
              label="Did not post Contact Information"
            />
          </Form.Group>
          <Form.Group controlId="scam">
            <Form.Check type="checkbox" label="Scam Post" />
          </Form.Group>
          <Form.Group controlId="Illegal-Stolen">
            <Form.Check type="checkbox" label="Illegal or Stolen Merchandise" />
          </Form.Group>
          <Form.Group controlId="Overpost-bot">
            <Form.Check type="checkbox" label="Overposted or Fake Botted Post" />
          </Form.Group>
          <Form.Group controlId="vulgar">
            <Form.Check type="checkbox" label="Obscene and/or vulgar imagery" />
          </Form.Group>
        </Stack>
      </InputGroup>
      <p className="font-weight-bold">Additional Information: </p>
      <InputGroup>
        <FormControl as="textarea" rows="5" aria-label="With textarea" />
      </InputGroup>
    </div>
  );
}

export default ReplyForm;
