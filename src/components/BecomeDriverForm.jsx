import React, { useState } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Importă configurația Firebase

const BecomeDriverForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    license: '',
    country: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('User registered successfully!');
      setError('');
      // Pot adăuga cod pentru a salva date adiționale în baza de date dacă e nevoie
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {error && <p className="text-danger text-center">{error}</p>}
        {success && <p className="text-success text-center">{success}</p>}
        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i className="ri-user-line"></i>
          </span>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i className="ri-mail-line"></i>
          </span>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i className="ri-phone-line"></i>
          </span>
          <input
            type="number"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i className="ri-steering-2-line"></i>
          </span>
          <input
            type="text"
            placeholder="Driving License Number"
            name="license"
            value={formData.license}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i className="ri-global-line"></i>
          </span>
          <input
            type="text"
            placeholder="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i className="ri-lock-2-line"></i>
          </span>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i className="ri-lock-2-line"></i>
          </span>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <h6 className="fs-6 text-center">
          <label htmlFor="">
            <input type="checkbox" required /> Accept Terms & Conditions
          </label>
        </h6>
        <button className="login__btn" type="submit">
          Register Now
        </button>
      </Form>
      <h6 className="fs-6 text-center mt-4">
        <Link to="/signin">Already Have an Account?</Link>
      </h6>
    </>
  );
};

export default BecomeDriverForm;
