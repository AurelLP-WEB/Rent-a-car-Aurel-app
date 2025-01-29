import React from 'react';
import CommonSection from '../components/CommonSection';
import Helmet from '../components/Helmet';
import { Container, Row, Col } from 'reactstrap';
import BillingForm from '../components/BillingForm';
import PaymentMethod from '../components/PaymentMethod';
import { useSelector } from 'react-redux';
import { db } from '../firebase';  // Importă instanța Firebase
import { collection, addDoc } from 'firebase/firestore';  // Importă funcțiile necesare pentru Firestore

const Checkout = () => {
  const totalAmount = useSelector(state => state.cart.totalAmount);
  
  // Functia de salvare a comenzii in Firestore
  const handlePlaceOrder = async (billingData) => {
    try {
      const orderData = {
        billing: billingData,
        totalAmount: totalAmount,
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

  return (
    <Helmet title="Checkout">
      <section className="pt-0">
        <CommonSection title="Checkout" />
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <h6 className="mb-4">Billing Details</h6>
              <BillingForm onSubmit={handlePlaceOrder} /> {/* Transmite funcția onSubmit */}
            </Col>

            <Col lg="6">
              <h6 className="mb-4">Order Summary</h6>
              <div className="mb-5 w-50">
                <div className="d-flex align-items-center justify-content-between">
                  <p className="section__description">Cart subtotal amount:</p>
                  <h6>${totalAmount}</h6>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="section__description">Shipping:</p>
                  <h6 className="fs-6">Free Shipping</h6>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <p className="section__description">Total Amount:</p>
                  <h6>${totalAmount}</h6>
                </div>
              </div>
              <h6 className="mb-4">Payment Method</h6>
              <PaymentMethod btnText="Place Order" onClick={() => handlePlaceOrder()} />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;

