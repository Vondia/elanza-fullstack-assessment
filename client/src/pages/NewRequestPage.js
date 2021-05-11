import React, { useState } from "react";
import { useHistory } from "react-router";
import logo from "../logo.png";
import Form from "react-bootstrap/Form";
import { Col, Button } from "react-bootstrap";

// import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import { postCareRequest } from "../store/careRequest/actions";

export default function NewRequestPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [clientname, setClientName] = useState("");
  const [caretype, setCareType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [extraInformation, setExtraInformation] = useState("");

  function submitForm(event) {
    event.preventDefault();
    dispatch(
      postCareRequest(
        clientname,
        caretype,
        startDate,
        endDate,
        extraInformation,
        history
      )
    );
  }
  return (
    <Form as={Col} md={{ span: 6, offset: 3 }}>
      <h1 className="mt-5 mb-5">New care request</h1>
      <Form.Group>
        <Form.Label>Client name</Form.Label>
        <Form.Control
          value={clientname}
          onChange={(event) => setClientName(event.target.value)}
          type="text"
          placeholder="Your name"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>CareType</Form.Label>
        <select
          className="form-control"
          onChange={(event) => setCareType(event.target.value)}
        >
          <option>Selecteer je zorgtype</option>
          <option value={"household"}>Household</option>
          <option value={"medical"}>Medical</option>
        </select>
      </Form.Group>
      <Form.Group>
        <Form.Label>start date</Form.Label>
        <Form.Control
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
          type="datetime-local"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>end date</Form.Label>
        <Form.Control
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
          type="datetime-local"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Extra information</Form.Label>
        <Form.Control
          value={extraInformation}
          onChange={(event) => setExtraInformation(event.target.value)}
          type="text"
          placeholder="Enter extra information"
        />
      </Form.Group>

      <Form.Group className="mt-5">
        <Button
          className="mt-3"
          variant="success"
          type="submit"
          onClick={submitForm}
        >
          Post your care request!
        </Button>
      </Form.Group>
    </Form>
  );
}
