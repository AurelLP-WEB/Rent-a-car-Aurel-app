import ServicesItem from '../components/ServicesItem';
import Helmet from '../components/Helmet';
import CommonSection from '../components/CommonSection';
import { Container, Row } from 'reactstrap'; // Asigură-te că ai importat Container și Row
import carData from '../assets/carData';

const Services = () => {
  return (
    <Helmet title="Services">
      <section className="pt-0">
        <CommonSection title="Services" />
        <Container>
          <Row>
            <ServicesItem />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Services;
