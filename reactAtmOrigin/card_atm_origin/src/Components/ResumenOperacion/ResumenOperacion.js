import React from 'react';
import './ResumenOperacion.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import visaLogo from '../../Images/visaLogo.png';
import { useCartContext } from '../Context/CartContext';

function ResumenOperacion( { finalOperation }){
  const { getParsedDate } = useCartContext();

  

  return finalOperation.map((dateOperation) => {
    return (
      <Container>
        <div className="row col-sm-12 ml-4 no-gutters py-2">
          <div className="col-sm-3 p-2">
           <img src={visaLogo} width="100px"/>
          </div>
          <div className="col-sm-3 p-2 detailItem">
            <h5 className="mb-1">Nro tarjeta</h5>
            <p className="mb-1 typeSize">{dateOperation.nro_tarjeta} </p>
          </div>
          <div className="col-sm-3 p-2 text-center detailItem ">
            <h5 className="mb-1">Saldo Actual</h5>
            <p className="mb-0 typeSize">$ {dateOperation.saldo}</p>
          </div>
          <div className="col-sm-3 p-2 text-center detailItem ">
            <h5 className="mb-1">Fecha</h5>
            <p className="mb-0 typeSize">{ getParsedDate(dateOperation.vencimiento)}</p>
          </div>
          <div className="col-sm-3 p-2 text-center detailItem ">
            <h5 className="mb-1">Operación</h5>
            <p className="mb-0 typeSize">{dateOperation.pin}</p>
          </div>
          <div className="col-sm-3  text-right ">
            <Link to="/">
          <button class="btn btn-danger"> Salir </button>
          </Link>
          </div>
        </div>
      </Container>
    )
  })
}

export default ResumenOperacion;