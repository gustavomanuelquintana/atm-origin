import React from "react";
import "./CardPinContainer.css";
import { useHistory } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionCardPin from './SectionCardPin/SectionCardPin';
//import { useParams } from "react-router-dom";

function CardPinContainer({ titulo }) {
  const history = useHistory();
  

  return (
    <Container>
      <Row>
        <Col sm="12">
          <div className="text-center pt-3">
            <h2>ATM - Cajero Virtual - Pin</h2>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col sm="12">
          <SectionCardPin />
        </Col>
      </Row>
    </Container>
  );
}

export default CardPinContainer;
