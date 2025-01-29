import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import image22 from '../../assets/all-images/image22.jpg';

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === 'aboutPage'
          ? { marginTop: '0px' }
          : { marginTop: '280px' }
      }
    >
      <Container>
        <Row>
          {/* Text Section */}
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car rent service</h2>
              <p className="section__description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum blanditiis esse accusantium dignissimos labore
                laborum. Veniam, corporis mollitia temporibus, in quaerat vero
                deleniti amet dolorem repudiandae, pariatur nam dolore! Impedit
                neque sit ad temporibus quam similique dolor ipsam praesentium
                sunt.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                  sit amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                  sit amet.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                  sit amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                  sit amet.
                </p>
              </div>
            </div>
          </Col>

          {/* Image Section */}
          <Col lg="6" md="6">
            <div className="about__img">
              <img
                src="https://media.istockphoto.com/id/1330071835/photo/automotive-business-car-sale-or-rental-concept-happy-customer-with-car-dealer-agent-making.jpg?s=612x612&w=0&k=20&c=2MHg8zS_WDrr4qdpkcoH2DWgwf2dSEr41XoO9vvRkgo="
                alt="Happy customer with car dealer agent making a deal"
                className="w-100"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
