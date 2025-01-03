
import "./css/ReplyForm.css";
import {
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const accountLogo = "";
function ReplyForm() {
  return (
    <div>
      <p className="font-weight-bold">Report Cases: </p>
      <InputGroup className="mb-3">

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Did not post Contact Information"
          />
        </Form.Group>
        {/* <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Scam or Fake Botted Post" />
        </Form.Group> */}
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Illegal or Stolen Merchandise" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Overposted or Fake Botted Post" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Obscene and/or vulgar imagery" />
        </Form.Group>
      </InputGroup>
      <p className="font-weight-bold">Additional Information: </p>
      <InputGroup>
        <FormControl as="textarea" rows="5" aria-label="With textarea" />
      </InputGroup>
    </div>
  );
}

export default ReplyForm;
