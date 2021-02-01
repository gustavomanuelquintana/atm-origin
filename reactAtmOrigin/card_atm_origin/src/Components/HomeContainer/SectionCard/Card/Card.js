import React from "react";
import "./Card.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import visaLogo from "../../../../Images/visaLogo.png";
import InputField from "../InputField/InputField";

function Card({ var1, setInputValue }) {

  const cc_format = (value) => {
    var v = value
      .toString()
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "");
    var matches = v.match(/\d{4,16}/g);
    var match = (matches && matches[0]) || "";
    var parts = [];
    var i = 0;
    var len = 0;
    for (i, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join("-");
    } else {
      return value;
    }
  };


  return (
    <Container fluid="md">
      <Row>
        <Col>
          <div className="credit-card">
            <div className="credit-card__logo">
              <img className="logo" src={visaLogo} width="50" />
            </div>

            <div className="credit-card__number">
              <InputField
                formatNumber={cc_format(var1)}
                val={var1}
                onChange={(val) => setInputValue("numberCard", val)}
              />
            </div>

            <div className="credit-card__info">
              <div className="credit-card__info_name">
                <div className="credit-card__info_label">
                  OriginSoftware S.A
                </div>
                <div>Gustavo Quintana</div>
              </div>

              <div className="credit-card__info_expiry">
                <div className="credit-card__info_label">Venc:</div>
                <div>05/2025</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Card;
