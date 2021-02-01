import React, { useState } from "react";
import "./Retiro.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast";
import {
  Succesfull,
  PlusCircleIcon,
  EnterKey,
  ExclamationIcon,
} from "../icons/index";
import { useCartContext } from "../Context/CartContext";
import ResumenOperacion from "../ResumenOperacion/ResumenOperacion";

function Retiro() {
  const {
    itemsCard,
    numRetiro,
    AddNumberRetiro,
    handleDelete,
  } = useCartContext();
  const [showBalanceStatus, setShowBalanceStatus] = useState(false);
  const [currentOperation, setCurrentOperation] = useState("");

  async function isValidateBalance() {
    const dateOrder = {
      cash: numRetiro,
      cardDate: itemsCard,
      codOperationCard: "retiro",
    };

    if (numRetiro > itemsCard.saldo) {
      setShowBalanceStatus(true);
    }

    const response = await fetch("/isValidateBalance", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        balance: dateOrder.cash,
        cardDate: dateOrder.cardDate,
        codOperator: dateOrder.codOperationCard,
      }),
    });
    const result = await response.json();
    setCurrentOperation(result);
  }

  const verEstado = () => {
    console.log(currentOperation);
  };

  return (
    <Container className="containerRetiro">
      <Row>
        <Col sm="12">
          <header>
            <h1 className="titleAnimationRetiro">Operaciones</h1>
          </header>
          <hr className="hrAnimationRetiro" />
        </Col>
      </Row>
      <Row>
        <Col sm="6">
          <div className="calcShow">
            <div className="numbers">
              <div className="numbersAnimation">
                <button onClick={AddNumberRetiro} value="1" className="number">1</button>
                <button onClick={AddNumberRetiro} value="2" className="number">2</button>
                <button onClick={AddNumberRetiro} value="3" className="number">3</button>
              </div>
              <div className="numbersAnimation">
                <button onClick={AddNumberRetiro} value="4" className="number">4</button>
                <button onClick={AddNumberRetiro} value="5" className="number">5</button>
                <button onClick={AddNumberRetiro} value="6" className="number">6</button>
              </div>
              <div className="numbersAnimation">
                <button onClick={AddNumberRetiro} value="7" className="number">7</button>
                <button onClick={AddNumberRetiro} value="8" className="number">8</button>
                <button onClick={AddNumberRetiro} value="9" className="number">9</button>
              </div>
              <div className="numbersAnimation">
                <button
                  onClick={handleDelete}
                  value="delete"
                  className="number"
                >
                  &lt;
                </button>
                <button onClick={AddNumberRetiro} value="0" className="number">0</button>
                <button onClick={() => {}} className="number ok">
                  <EnterKey width="60px" height="33px" color="green" />
                </button>
              </div>
            </div>
          </div>
        </Col>
        <Col sm="6">
          <div className="showQuantityRetiro">
            <div className="buttonsRetiro">
              <button class="btn btn-outline-primary btn-lg"> Limpiar </button>
              <button
                onClick={isValidateBalance}
                class="btn btn-outline-success ml-3 btn-lg"
              >
                {" "}
                Aceptar{" "}
              </button>
              <button
                onClick={verEstado}
                class="btn btn-outline-danger ml-3 btn-lg"
              >
                {" "}
                Salir{" "}
              </button>
            </div>

            <div className="quantityRetiro">
              <p className="quantity_sizeRetiro">$ {numRetiro}</p>
              <hr className="quantity_hrRetiro" />
            </div>
          </div>
          {showBalanceStatus && (
            <Toast
              className="toastPin"
              onClose={() => setShowBalanceStatus(false)}
              show={showBalanceStatus}
              delay={3000}
              autohide
            >
              <Toast.Header>
                <PlusCircleIcon color={"red"} width={"20px"} />
                <strong className="mr-auto">Validacion Saldo</strong>
              </Toast.Header>
              <Toast.Body>
                No tienes fondos suficientes para esta operación !
                <ExclamationIcon color={"red"} width={"25px"} />
              </Toast.Body>
            </Toast>
          )}
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          {currentOperation.length > 0 && (
            <ResumenOperacion finalOperation={currentOperation} />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Retiro;
