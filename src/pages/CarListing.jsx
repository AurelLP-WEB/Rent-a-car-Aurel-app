import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom"; // Importă useLocation
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import { db } from "../firebase"; // Importă db din firebase.js
import { collection, getDocs, query, where } from "firebase/firestore"; // Importă funcțiile necesare din Firestore

const CarListing = () => {
  const [carData, setCarData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation(); // Preia datele transmise de FindCarForm
  const searchParams = location.state; // Datele transmise prin navigate

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        let carsQuery = collection(db, "cars");

        // Dacă avem parametri de căutare, aplicăm filtrarea în Firestore
        if (searchParams) {
          const { carType } = searchParams; // Extrage tipul de mașină din parametrii de căutare
          carsQuery = query(carsQuery, where("type", "==", carType));
        }

        const querySnapshot = await getDocs(carsQuery);
        const cars = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCarData(cars);
        setIsLoading(false);
      } catch (err) {
        setError("Error fetching car data");
        setIsLoading(false);
      }
    };

    fetchCarData();
  }, [searchParams]);

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {isLoading ? (
              <Col lg="12" className="text-center">
                <p>Loading cars...</p>
              </Col>
            ) : error ? (
              <Col lg="12" className="text-center">
                <p>{error}</p>
              </Col>
            ) : carData.length > 0 ? (
              carData.map((item) => <CarItem item={item} key={item.id} />)
            ) : (
              <Col lg="12" className="text-center">
                <p>No cars found matching your criteria.</p>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
