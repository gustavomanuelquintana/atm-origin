import React from "react";
import "./Balance.css";
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ViewBalance from './ViewBalance/ViewBalance';
import { useCartContext } from "../Context/CartContext";

function Balance() {
  const { itemsCard } = useCartContext();

  

  return (
    <Container>
      <Row>
        <Col sm="12">
        <ViewBalance dateCard = {itemsCard}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Balance;
