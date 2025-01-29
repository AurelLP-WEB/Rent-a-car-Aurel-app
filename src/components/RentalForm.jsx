import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import CommonSection from '../components/CommonSection';
import ContactForm from '../components/ContactForm';

const RentalForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carModel: '',
    rentalPeriod: '',
    pickupDate: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'rentalRequests'), formData);
      setStatus('Reservation sent with success!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        carModel: '',
        rentalPeriod: '',
        pickupDate: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending the reservation ', error);
      setStatus(
        'There was an error sending the reservation. Please try again later.'
      );
    }
  };

  return (
    <div className="rental-form-container">
      <h3>Rserve a Car</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="carModel">Car model</label>
          <input
            type="text"
            id="carModel"
            name="carModel"
            value={formData.carModel}
            onChange={handleChange}
            className="form-control"
            placeholder="e.g.: SUV, Sedan"
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="rentalPeriod">Rental time (days)</label>
          <input
            type="number"
            id="rentalPeriod"
            name="rentalPeriod"
            value={formData.rentalPeriod}
            onChange={handleChange}
            className="form-control"
            placeholder="e.g.: 3 days"
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="pickupDate">Date for pick up</label>
          <input
            type="date"
            id="pickupDate"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="message">Additional info</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter any additional info here"
            rows="5"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Send Reservation
        </button>

        {status && (
          <p
            className={`mt-3 status-message ${
              status.includes('error') ? 'status-error' : ''
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default RentalForm;
