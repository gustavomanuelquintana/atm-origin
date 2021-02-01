import React from "react";
import "./HomeContainer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionCard from "./SectionCard/SectionCard";
//import { useParams } from "react-router-dom";

function HomeContainer({ titulo }) {
  return (
    <Container>
      <Row>
        <Col sm="12">
          <div className="text-center pt-3">
            <h2>ATM - Cajero Virtual</h2>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col sm="12">
          <SectionCard />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeContainer;
