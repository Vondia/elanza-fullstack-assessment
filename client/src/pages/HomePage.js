import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchCareRequests } from "../store/careRequest/actions";
import { selectCareRequests } from "../store/careRequest/selectors";
import logo from "../logo.png";
import RequestCard from "../components/RequestCard";
import { Table } from "react-bootstrap";

export default function HomePage() {
  const dispatch = useDispatch();
  const allRequests = useSelector(selectCareRequests);
  console.log("allRequests:", allRequests);

  useEffect(() => {
    dispatch(fetchCareRequests());
  }, [dispatch]);

  return (
    <Container className="justify-content-center">
      <Image src={logo} className="logo" />
      <div>
        <h2>Open requests</h2>
        <Table striped hover style={{ width: "60%" }}>
          <thead
            style={{
              backgroundColor: "#51bbbc",
              border: "1px solid black",
              textAlign: "start",
            }}
          >
            <tr>
              <th>Client name</th>
              <th>start date</th>
              <th>Care needed</th>
            </tr>
          </thead>

          {!allRequests ? (
            <p>loading...</p>
          ) : (
            allRequests.map((request) => {
              return <RequestCard request={request} />;
            })
          )}
        </Table>
      </div>

      <div>
        <Link to={"/NewRequestPage"}>
          <Button className="mt-3" variant="success">
            Add new request
          </Button>
        </Link>
      </div>
    </Container>
  );
}
