
import React, { useState, useEffect} from 'react';
import './ViewBalance.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import visaLogo from '../../../Images/visaLogo.png';
import { Link } from 'react-router-dom';


function ViewBalance ({ dateCard }) {
      return (
      <Container fluid="md">
        <Row >
          <Col sm="12 containerCardBalance">
        <div className='credit-cardBalance'>
            <div className='credit-card__logo'>
            <img className='logo' src={visaLogo} width="50"/>
            </div>

            <div className='credit-card__numberBalance'>
              {dateCard.nro_tarjeta}
            </div>
            
            <div className='credit-card__infoBalance'>
                <div className='credit-card__info_nameBalance'>
                    <div className='credit-card__info_labelBalance'>Saldo:</div>
                    <div>$ {dateCard.saldo}</div>
                </div>

                <div className='credit-card__info_expiryBalance'>
                    <div className='credit-card__info_labelBalance'>Venc:</div>
                    <div>{dateCard.vencimiento}</div>
                </div>
            </div>
        </div>
        </Col>
        </Row>
        <Row>
        <Col sm="12">
          
          <div className="buttonsBalance"> 
          <Link to="operations">
            <button className="btn btn-primary ml-4 btn-lg">Atras</button>
            </Link> 
            <Link to="/">
            <button className="btn btn-danger ml-4 btn-lg">Salir</button>
            </Link>
            </div>
        </Col>
        </Row>
        </Container>
    );
}

export default ViewBalance;