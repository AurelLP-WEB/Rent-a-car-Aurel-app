import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import { Link } from 'react-router-dom'; // Importă Link pentru navigare
import carImg from '../assets/img/toyota-offer-2.png';
import '../styles/become-driver.css';

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={carImg} alt="Driver" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Do You Want to Earn With Us? So Don't Be Late!
            </h2>

            {/* Folosește Link pentru navigare */}
            <Link
              to="/BecomeDriverForm"
              className="btn become__driver-btn mt-4"
            >
              Become a Driver
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
