import React, { useState } from 'react';
import { db } from '../firebase';  // Importă instanța Firebase
import { collection, addDoc } from 'firebase/firestore';  // Importă funcțiile necesare pentru Firestore
import masterCard from '../assets/img/master-card.jpg';
import paypal from '../assets/img/paypal.jpg';

import '../styles/payment-method.css';

const PaymentMethod = ({ btnText, totalAmount, billingData }) => {
  const [paymentMethod, setPaymentMethod] = useState(''); // State pentru metoda de plată

  // Funcție pentru a salva comanda în Firestore
  const handlePayment = async () => {
    if (!paymentMethod) {
      alert('Te rugăm să alegi o metodă de plată!');
      return;
    }

    try {
      const orderData = {
        billing: billingData,
        totalAmount: totalAmount,
        paymentMethod: paymentMethod,
        status: 'Pending',
        date: new Date(),
      };
      // Salvează comanda în colecția 'orders' în Firestore
      await addDoc(collection(db, 'orders'), orderData);
      alert('Comanda a fost plasată cu succes!');
    } catch (error) {
      console.error('Eroare la plasarea comenzii:', error);
      alert('A apărut o eroare. Te rugăm să încerci din nou.');
    }
  };

  // Schimbă metoda de plată selectată
  const handleMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div>
      <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            name="paymentMethod"
            checked={paymentMethod === 'Bank Transfer'}
            onChange={() => handleMethodChange('Bank Transfer')}
          />
          Direct Bank Transfer
        </label>
        <p className="section__description mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
          molestias aspernatur quisquam fugit eius quas exercitationem
          laboriosam praesentium illum similique!
        </p>
      </div>

      <div className="payment mb-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            name="paymentMethod"
            checked={paymentMethod === 'Cheque Payment'}
            onChange={() => handleMethodChange('Cheque Payment')}
          />
          Cheque Payment
        </label>
      </div>

      <div className="payment mb-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            name="paymentMethod"
            checked={paymentMethod === 'Credit Card'}
            onChange={() => handleMethodChange('Credit Card')}
          />
          Credit Card
        </label>

        <img src={masterCard} alt="" />
      </div>

      <div className="payment mb-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            name="paymentMethod"
            checked={paymentMethod === 'Paypal'}
            onChange={() => handleMethodChange('Paypal')}
          />
          Paypal
        </label>
        <img src={paypal} alt="" />
      </div>

      <div className="payment text-end mt-5">
        <button onClick={handlePayment}>{btnText}</button>
      </div>
    </div>
  );
};

export default PaymentMethod;
