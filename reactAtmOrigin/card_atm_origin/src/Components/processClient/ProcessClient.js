import React from "react";
import "./ProcessClient.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useCartContext } from "../Context/CartContext";

function ProcessClient() {
  const { itemsCard } = useCartContext();

  async function RegisterMovementCard() {
    const dateOrder = {
      cardNumbers: itemsCard,
      codOperacion: "balance",
    };
    const response = await fetch("/isRegisterMovement", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cardRegister: dateOrder.cardNumbers,
        codOperacion: dateOrder.codOperacion,
      }),
    });
    const result = await response.json();
  }

  return (
    <Container className="containerButtons">
      <Row>
        <Col sm="4">
          <Link to="/balance">
            <button
              onClick={RegisterMovementCard}
              className="menu_button1 button_up_deposit"
            >
              Balance{" "}
            </button>
          </Link>
        </Col>
        <Col sm="4">
          <Link to="/retiro">
            <button
              onClick={() => {}}
              className="menu_button1 button_up_deposit"
            >
              Retiro{" "}
            </button>
          </Link>
        </Col>
        <Col sm="4">
          <Link to="/">
            <button className="menu_button1 button_up_deposit">Salir </button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default ProcessClient;
