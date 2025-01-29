import '../styles/contact-form.css';
import React, { useState } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBOCq7H9Az5ITko4qRdgZkyN8vM3fD6ukY',
  authDomain: 'fusionrentacar-874b2.firebaseapp.com',
  projectId: 'fusionrentacar-874b2',
  storageBucket: 'fusionrentacar-874b2.firebasestorage.app',
  messagingSenderId: '756774099935',
  appId: '1:756774099935:web:8217db3678e5fa2e7f826a',
  measurementId: 'G-Z6TTRTX9N4',
};

// Inițializează aplicația Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = async e => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contacts'), formData);
      alert('Message was sent successfully. Mesajul a fost trimis cu succes.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Error on seding the message: ', error);
      alert(
        'There was a problem. Please try again. A apărut o problemă. Încercați din nou.'
      );
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="contact__form d-inline-block mb-4 me-4">
        <Input
          type="text"
          name="firstName"
          placeholder="Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup className="contact__form d-inline-block mb-4 ms-1">
        <Input
          type="text"
          name="lastName"
          placeholder="SurName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup className="contact__form d-inline-block mb-4 me-4">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup className="contact__form d-inline-block mb-4 ms-1">
        <Input
          type="text"
          name="phone"
          placeholder="Telephone"
          value={formData.phone}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className="contact__form w-100">
        <textarea
          name="message"
          className="w-100 p-3"
          rows="5"
          placeholder="Add your message here"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </FormGroup>
      <button className="btn mt-4" type="submit">
        Send Message
      </button>
    </Form>
  );
};

export default ContactForm;
