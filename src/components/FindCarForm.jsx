import React, { useState } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { db } from '../firebase'; // Importă configurarea Firebase
import { collection, addDoc } from 'firebase/firestore'; // Funcții Firestore
import { useNavigate } from 'react-router-dom'; // Importă useNavigate pentru navigare
import '../styles/find-cars-from.css';

const FindCarForm = () => {
  const [enterFromAddress, setEnterFromAddress] = useState('');
  const [enterToAddress, setEnterToAddress] = useState('');
  const [enterJourneyDate, setEnterJourneyDate] = useState('');
  const [enterJourneyTime, setEnterJourneyTime] = useState('');
  const [enterDeliveryTime, setEnterDeliveryTime] = useState(''); // Variabilă pentru ora de predare
  const [selectedAc, setSelectedAc] = useState('AC Car');
  const [message, setMessage] = useState(''); // Pentru afișarea mesajelor

  const navigate = useNavigate(); // Hook pentru navigare

  const submitHandler = async (e) => {
    e.preventDefault();

    // Crează obiectul cu datele formularului
    const bookingData = {
      fromAddress: enterFromAddress,
      toAddress: enterToAddress,
      journeyDate: enterJourneyDate,
      journeyTime: enterJourneyTime,
      deliveryTime: enterDeliveryTime, // Adaugă ora de predare
      carType: selectedAc,
      createdAt: new Date().toISOString(), // Data salvării
    };

    try {
      // Salvează datele în Firestore
      const docRef = await addDoc(collection(db, 'carBookings'), bookingData);
      setMessage(`Car booking successfully created! ID: ${docRef.id}`);
   
      // Navighează la pagina car-listing cu datele formularului
      navigate("/car-listing", { state: bookingData });
   
      // Resetează formularul
      setEnterFromAddress('');
      setEnterToAddress('');
      setEnterJourneyDate('');
      setEnterJourneyTime('');
      setEnterDeliveryTime('');
      setSelectedAc('AC Car');
    } catch (err) {
      console.error('Error adding document: ', err);
      console.log(bookingData); // Verifică datele trimise
 // Afișează eroarea completă în consolă
      setMessage('Failed to create booking. Please try again.');
    }
  };

  return (
    <Form className="form" onSubmit={submitHandler}>
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <Input
            placeholder="From Address"
            type="text"
            required
            value={enterFromAddress}
            onChange={(e) => setEnterFromAddress(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="form__group">
          <Input
            placeholder="To Address"
            type="text"
            required
            value={enterToAddress}
            onChange={(e) => setEnterToAddress(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <Input
            placeholder="Journey Date"
            type="date"
            required
            value={enterJourneyDate}
            onChange={(e) => setEnterJourneyDate(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <Input
            placeholder="Journey Time"
            type="time"
            className="journey__time"  // Asigură-te că ai o clasă separată pentru journeyTime
            required
            value={enterJourneyTime}
            onChange={(e) => setEnterJourneyTime(e.target.value)}
          />
        </FormGroup>

        {/* Câmp pentru ora de predare a mașinii */}
        <FormGroup className="form__group">
          <Input
            placeholder="Delivery Time"
            type="time"
            className="delivery__time"  // Clasă diferită pentru Delivery Time
            required
            value={enterDeliveryTime}
            onChange={(e) => setEnterDeliveryTime(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="select__form">
          <select
            value={selectedAc}
            onChange={(e) => setSelectedAc(e.target.value)}
          >
            <option value="AC Car">AC Car</option>
            <option value="Non AC Car">Non AC Car</option>
          </select>
        </FormGroup>
        
        <FormGroup className="form__group">
          <Button className="btn find__car__btn" type="submit">
            Find Car
          </Button>
        </FormGroup>
      </div>
      {message && <p className="text-center mt-3">{message}</p>} {/* Afișează mesajul */}
    </Form>
  );
};

export default FindCarForm;
