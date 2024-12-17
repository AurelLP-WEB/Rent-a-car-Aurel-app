
import React, { useState } from "react"; // Adaugă importul useState


import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = () => {
  // State pentru a urmări rezervarea
  const [isReserved, setIsReserved] = useState(false);

  // Funcție pentru a rezerva mașina
  const handleReserve = () => {
    setIsReserved(true);
  };

  return (
    <>
      <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment" /> Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment" /> Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment" /> Master Card
        </label>

        <img src={masterCard} alt="MasterCard" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment" /> Paypal
        </label>

        <img src={paypal} alt="PayPal" />
      </div>

      <div className="payment text-end mt-5">
        {/* Buton pentru rezervare */}
        <button onClick={handleReserve}>Reserve Now</button>
      </div>

      {/* Afișarea mesajului de rezervare */}
      {isReserved && (
        <div className="alert alert-success mt-3" role="alert">
          Mașina a fost rezervată cu succes!
        </div>
      )}
    </>
  );
};

export default PaymentMethod;
