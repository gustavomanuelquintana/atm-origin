import React, { useState, useContext, useEffect } from "react";

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children, defaultCart }) => {
  const [num, setNumState] = useState("");
  const [numPin, setNumPin] = useState("");
  const [numRetiro, setNumRetiro] = useState("");
  let [dateCard, setDateCard] = useState({
    isValid: false,
    id: null,
    item: {},
  });
  const [show, setShow] = useState(false);
  const [showBloked, setShowBloked] = useState(false);

  // Get Values of DataBase MySQL
  async function DoNumber() {
    const dateOrder = {
      cardNumbers: num,
    };

    const response = await fetch("/isValidateNumber", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        numberCard: dateOrder.cardNumbers,
      }),
    });
    const result = await response.json();

    if (result.length > 0) {
      if (result[0].estado === 0) {
        const date = { item: result[0].estado };
        setDateCard(date);
        setShowBloked(true);
      } else if (result[0].estado === 1) {
        const date = { isValid: true, id: "id", item: result };
        setDateCard(date);
      }
    } else if (result.length == 0) {
      setShow(true);
    }
  }

  useEffect(() => {
    DoNumber();
  }, []);

  const AddNumber = (val) => {
    const addmoney = num;

    if (addmoney.toString().length + 1 <= 16) {
      //9 billones
      if (addmoney == 0) {
        setNumState(val.target.value);
      } else {
        setNumState(addmoney + val.target.value);
      }
    }
  };

  const AddNumberPin = (val) => {
    const addmoney = numPin;

    if (addmoney.toString().length + 1 <= 4) {
      //9 billones
      if (addmoney == 0) {
        setNumPin(val.target.value);
      } else {
        setNumPin(addmoney + val.target.value);
      }
    }
  };

  const AddNumberRetiro = (val) => {
    const addmoney = numRetiro;

    if (addmoney.toString().length + 1 <= 6) {
      //9 billones
      if (addmoney == 0) {
        setNumRetiro(val.target.value);
      } else {
        setNumRetiro(addmoney + val.target.value);
      }
    }
  };

  const handleDelete = (val) => {
    if (num != 0) setNumState(num.substring(0, num.length - 1));
    setNumPin(numPin.substring(0, numPin.length - 1));
    setNumRetiro(numRetiro.substring(0, numRetiro.length - 1));
  };

  const setInputValue = (property, val) => {
    val = val.trim();
    if (val.length > 16) {
      return;
    }
  };

  function getParsedDate(strDate) {
    var strSplitDate = String(strDate).split(" ");
    var date = new Date(strSplitDate[0]);
    // alert(date);
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!

    var yyyy = date.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    date = dd + "-" + mm + "-" + yyyy;
    return date.toString();
  }

  return (
    <CartContext.Provider
      value={{
        DoNumber,
        AddNumber,
        AddNumberPin,
        AddNumberRetiro,
        handleDelete,
        setInputValue,
        getParsedDate,
        num,
        numPin,
        numRetiro,
        show,
        setShow,
        showBloked,
        setShowBloked,
        dateCard,
        itemsCard: dateCard.item[0],
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
