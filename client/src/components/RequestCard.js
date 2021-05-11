import React from "react";
import moment from "moment";
import { Container, Button } from "react-bootstrap";
import { Table } from "react-bootstrap";

export default function RequestCard({ request }) {
  return (
    <Container>
      <Table striped hover style={{ width: "60%" }}>
        <tbody>
          <tr>
            <td>{request.clientName}</td>
            <td>{moment(request.startDate).format("dddd DD MMMM")}</td>
            <td>{request.careNeeded}</td>
            {/* <td style={{ textAlign: "center" }}>
              <Button>Request details</Button>
            </td> */}
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
