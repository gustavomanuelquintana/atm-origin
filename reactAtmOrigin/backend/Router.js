const bcrypt = require("bcrypt");

class Router {
  constructor(app, db) {
    this.isValidatePin(app, db);
    this.isValidateNumber(app, db);
    this.isRegisterMovement(app, db);
    this.isValidateBalance(app,db);
  }

  isValidateNumber(app, db) {
    app.post("/isValidateNumber", (req, res) => {
      let numberCardStatus = req.body.numberCard;

      const sqlSelect = `SELECT * FROM tarjetas WHERE nro_tarjeta = ${numberCardStatus} `;
      db.query(sqlSelect, (err, result) => {
        res.send(result);
      });
    });
  }

  isValidatePin(app, db) {
    app.post("/isValidatePin", (req, res) => {
      let pinCard = req.body.numberPin;
      let cardNumber = req.body.numberCard;
      let intento = 0;

      if (pinCard.length > 4) {
        res.json({
          success: false,
          msg: "An errros ocurred, please try again",
        });
        return;
      }

      const sqlSelect =
        //`SELECT * FROM tarjetas WHERE pin = ?`, pinCard
        `SELECT * FROM tarjetas WHERE pin = ${pinCard} and nro_tarjeta = ${cardNumber} and intento < '5' and estado = '1' `;
      db.query(sqlSelect, (err, result) => {
        if (result.length === 0 || result.length === undefined) {
          const sqlSelectIntento = `SELECT * FROM tarjetas WHERE  nro_tarjeta = ${cardNumber}`;
          db.query(sqlSelectIntento, (err, result) => {
            result.map((values) => {
              let valores = Object.values(values);
              let intento = valores[6] + 1;
              const sqlUpdateIntento = `UPDATE tarjetas SET intento= ${intento} WHERE nro_tarjeta =  ${cardNumber} `;
              db.query(sqlUpdateIntento, (err, result) => {
               /* if (intento === 4) {
                  const sqlUpdateIntento = `UPDATE tarjetas SET estado= '0', intento = 0 WHERE nro_tarjeta =  ${cardNumber} `;
                  db.query(sqlUpdateIntento, (err, result) => {
                    let intentosRestantes = 4 - parseInt(intento);
                    res.send(intentosRestantes);
                    //res.send(`Pin incorrecto, tiene ${intentosRestantes} oportunidades`);
                  });
                }*/
              });
            });
          });
        } else {

          const sqlUpdateIntento = `UPDATE tarjetas SET intento = 0 WHERE nro_tarjeta =  ${cardNumber} `;
          db.query(sqlUpdateIntento, (err, result) => {
          });
        }
      });
      const sqlSelectIntentos = `SELECT * FROM tarjetas WHERE  nro_tarjeta = ${cardNumber}`;
      db.query(sqlSelectIntentos, (err, result) => {
        let intentos = result;
        res.send(intentos);
      })

    });
  }

  isRegisterMovement(app, db){
    app.post("/isRegisterMovement", (req, res) => {
        let numberCardStatus = req.body.cardRegister;
        let codOperacion = req.body.codOperacion;
        let values = Object.values(numberCardStatus);
  
        const sqlInsertMovement = "INSERT INTO movimientos (id_movimiento, id_tarjeta, time, cod_operacion, monto) VALUES (?,?,?,?,?)"
        db.query(sqlInsertMovement, [0, values[0], values[4], codOperacion, values[5]], (err, result) => {
        });
      });
  }


  isValidateBalance(app, db){
    app.post("/isValidateBalance", (req, res) => {
      let balance = req.body.balance;
      let cardDate = req.body.cardDate;
      let codOperator1 = req.body.codOperator;
      let dateCard = cardDate.nro_tarjeta;

      const sqlInsertMovement = `SELECT * FROM tarjetas WHERE  nro_tarjeta = ${dateCard}`
      db.query(sqlInsertMovement, (err,res) => {
        res.map( (values) => {
          let valores = Object.values(values);
 
          let currentBalance = valores[5];
          if(balance <= currentBalance){
            const sqlInsertOperation = "INSERT INTO movimientos (id_movimiento, id_tarjeta, time, cod_operacion, monto) VALUES (?,?,?,?,?)"
        db.query(sqlInsertOperation, [0, valores[0], valores[4], codOperator1, valores[5]], (req, res) => {
                  let resultBalance = currentBalance - balance;
                  const sqlUpdateIntento = `UPDATE tarjetas SET saldo = ${resultBalance} WHERE nro_tarjeta =  ${dateCard} `;
                  db.query(sqlUpdateIntento, (err, result) => {
                  });
        });
          }
        })
      });
      const consultaOperacion = `SELECT * FROM tarjetas WHERE nro_tarjeta = ${dateCard} `;
      db.query(consultaOperacion, (err, result) => {
        res.send(result);
      });
    });


    

  } 
}
module.exports = Router;
