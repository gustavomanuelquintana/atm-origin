import React from 'react';
import './SectionCard.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "./Card/Card";
import Toast from "react-bootstrap/Toast";
import SubmitButton from './SubmitButton/SubmitButton';
import { ExclamationIcon,Succesfull, PlusCircleIcon, EnterKey } from "../../icons/index";
import { useCartContext } from "../../Context/CartContext";

export default function SectionCard() {
  const { num,DoNumber,IngresarAlsistema,show,
    setShow,showBloked,dateCard,setShowBloked, AddNumber,handleDelete } = useCartContext();
  
    return (
      <Row className="mt-2">
        <Col sm="4">
          <Card 
              var1 = {num}
              DoNumber={DoNumber}
          />
        </Col>
        <Col sm="8">
        <div className="calcShow">
                    <div className="numbers">
                        <div className="numbersAnimation">
                            <button    onClick={AddNumber} value="1" className="number">1</button>
                            <button   onClick={AddNumber} value="2" className="number">2</button>
                            <button   onClick={AddNumber} value="3" className="number">3</button>    
                        </div>
                        <div className="numbersAnimation">
                            <button   onClick={AddNumber} value="4" className="number">4</button>
                            <button   onClick={AddNumber} value="5" className="number">5</button>
                            <button   onClick={AddNumber} value="6" className="number">6</button>
                        </div>
                        <div className="numbersAnimation">
                            <button   onClick={AddNumber} value="7" className="number">7</button>
                            <button   onClick={AddNumber} value="8" className="number">8</button>
                            <button   onClick={AddNumber} value="9" className="number">9</button>
                        </div>
                        <div className="numbersAnimation">
                            <button   onClick={handleDelete} value="delete" className="number">&lt;</button>
                            <button   onClick={AddNumber} value="0" className="number">0</button>
                             <button  onClick={DoNumber} className="number ok"> <EnterKey width="60px" height="33px" color="green" /> </button>
                        </div>
                    </div>             
                </div>
        </Col>
        <Col sm="12">
        {dateCard.isValid && (
        <SubmitButton  Text="Ingresar"
        DoNumber={IngresarAlsistema}/>
        )}

        {dateCard.isValid && (
         <Toast
         className="toast"
         onClose={() => setShow(false)}
         show={show}
         delay={4000}
         autohide
       >
         <Toast.Header>
       <PlusCircleIcon width={"20px"}/>
       <strong className="mr-auto msgValidateCard">Validation Card Number</strong>
     </Toast.Header>
         <Toast.Body className="msgValidateCard">
         validated card number
        <Succesfull color={"green"} width={"20px"} />
         </Toast.Body>
       </Toast>
        )}

         {dateCard.item === 0 &&(
        <Toast
        className="toast"
        onClose={() => setShowBloked(false)}
        show={showBloked}
        delay={4000}
        autohide
      >
        <Toast.Header>
      <PlusCircleIcon width={"20px"}/>
      <strong className="mr-auto">Validation Card Number</strong>
    </Toast.Header>
        <Toast.Body>
        card existing but blocked
 <ExclamationIcon color={"red"} width={"20px"} />
        </Toast.Body>
      </Toast>
        )}

  
         {!dateCard.isValid &&(
        <Toast
        className="toast"
        onClose={() => setShow(false)}
        show={show}
        delay={4000}
        autohide
      >
        <Toast.Header>
      <PlusCircleIcon width={"20px"}/>
      <strong className="mr-auto msgValidateCard">Validation Card Number</strong>
    </Toast.Header>
        <Toast.Body className="msgValidateCard">
          Card invalid <ExclamationIcon color={"red"} width={"20px"} />
        </Toast.Body>
      </Toast>
        )}
        </Col>
      </Row>
    )
}
