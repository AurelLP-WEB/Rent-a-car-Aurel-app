import React, { useState } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { auth } from '../firebase'; // Importă configurația Firebase
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async e => {
    e.preventDefault();

    // Verifică dacă email-ul conține caracterul '@'
    if (!email.includes('@')) {
      setError("Please include a '@' in the email address.");
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      alert('Passwords do not match.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName: username });

      alert('Account created successfully!');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Form onSubmit={handleRegister}>
        {error && <p style={{ color: 'red' }}>{error}</p>}{' '}
        {/* Afișează erorile */}
        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i className="ri-user-line"></i>
          </span>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
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
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            value={password}
            onChange={e => setPassword(e.target.value)}
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
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
        </FormGroup>
        <h6 className="fs-6  text-center">
          <label>
            <input type="checkbox" /> Accept Terms & Conditions
          </label>
        </h6>
        <button className="login__btn " type="submit">
          Register Now
        </button>
      </Form>
      <h6 className="fs-6 text-center mt-4">
        <Link to="/signin">Already Have an Account?</Link>
      </h6>
    </>
  );
};

export default Register;
