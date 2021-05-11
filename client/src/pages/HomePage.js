import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Image } from "react-bootstrap";
import logo from "../logo.png";

export default function HomePage() {
  return (
    <Container className="justify-content-center">
      <Image src={logo} className="logo" />

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
