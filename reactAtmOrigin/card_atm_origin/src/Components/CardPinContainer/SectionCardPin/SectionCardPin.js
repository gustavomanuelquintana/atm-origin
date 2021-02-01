import React, { useState } from "react";
import "./SectionCardPin.css";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardPin from "./CardPin/CardPin";
import Toast from "react-bootstrap/Toast";
import { useCartContext } from "../../Context/CartContext";
import {
  PlusCircleIcon,
  EnterKey,
  ExclamationIcon,
} from "../../icons/index";

export default function SectionCard() {
  const history = useHistory();
  const {
    dateCard,
    numPin,
    AddNumberPin,
    handleDelete,
  } = useCartContext();
  const [showMsgError, setShowMsgError] = useState(false);
  const [msgBloked, setMsgBloked] = useState(false);

  async function IsValidatePin() {
    const dateOrder = {
      cardNumbers: numPin,
    };
    const response = await fetch("/isValidatePin", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        numberPin: dateOrder.cardNumbers,
        numberCard: dateCard.item[0].nro_tarjeta,
      }),
    });
    const result = await response.json(); 

    let resultIntento = result.map((values) => values);
    let intentos = resultIntento[0],
      nroPin = intentos.pin,
      estadoCard = intentos.estado,
      cantIntento = intentos.intento;

    if (numPin === nroPin) {
      if (cantIntento < 4 && estadoCard === 1) {
        GetNumberCard();
      }
    } else {
      if (numPin !== nroPin) {
        if (cantIntento < 4) {
          setShowMsgError(true);
        } else if (cantIntento > 3) {
          setMsgBloked(true);
        }
      }
    }
  }

  const GetNumberCard = () => {
    history.push("/operations");
  };

  return (
    <Container>
      <Row className="mt-2">
        <Col sm="4">
          <CardPin var1={numPin} />
        </Col>
        <Col sm="8">
          <div className="calcShow">
            <div className="numbers">
              <div className="numbersAnimation">
                <button onClick={AddNumberPin} value="1" className="number">1</button>
                <button onClick={AddNumberPin} value="2" className="number">2</button>
                <button onClick={AddNumberPin} value="3" className="number">3</button>
              </div>
              <div className="numbersAnimation">
                <button onClick={AddNumberPin} value="4" className="number">4</button>
                <button onClick={AddNumberPin} value="5" className="number">5</button>
                <button onClick={AddNumberPin} value="6" className="number">6</button>
              </div>
              <div className="numbersAnimation">
                <button onClick={AddNumberPin} value="7" className="number">7</button>
                <button onClick={AddNumberPin} value="8" className="number">8</button>
                <button onClick={AddNumberPin} value="9" className="number">9</button>
              </div>
              <div className="numbersAnimation">
                <button onClick={handleDelete} value="delete" className="number">&lt;</button>
                <button onClick={AddNumberPin} value="0" className="number">0</button>
                <button onClick={IsValidatePin} className="number ok">
                  <EnterKey width="60px" height="33px" color="green" />
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm="4 text-center justify-content-center m-auto pt-3"></Col>
        <Col sm="8">
          {msgBloked && (
            <Toast className="toastPin"
              onClose={() => setMsgBloked(false)}
              show={msgBloked}
              delay={4000}
              autohide
            >
              <Toast.Header>
                <PlusCircleIcon color={"green"} width={"20px"} />
                <strong className="mr-auto">Validation Card Pin</strong>
              </Toast.Header>
              <Toast.Body>
                Tarjet Bloked !
                <ExclamationIcon
                  color={"green"}
                  width={"25px"}
                  height={"25px"}
                />
              </Toast.Body>
            </Toast>
          )}
          {showMsgError && (
            <Toast
              className="toastPin"
              onClose={() => setShowMsgError(false)}
              show={showMsgError}
              delay={4000}
              autohide
            >
              <Toast.Header>
                <PlusCircleIcon color={"red"} width={"20px"} />
                <strong className="mr-auto">Validation Card PIN</strong>
              </Toast.Header>
              <Toast.Body>
                Pin Incorrect, you have 4 intents !
                <ExclamationIcon color={"red"} width={"25px"} />
              </Toast.Body>
            </Toast>
          )}
        </Col>
      </Row>
    </Container>
  );
}
