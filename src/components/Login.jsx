import React, { useState } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase'; // Importă configurația Firebase
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Pentru a naviga după login

  const handleLogin = async (e) => {
    e.preventDefault();
  
    // Verifică dacă email-ul conține caracterul '@'
    if (!email.includes('@')) {
      setError("Please include a '@' in the email address.");
      return;
    }
  
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
      navigate('../Home');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Form onSubmit={handleLogin}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
          <span>
            <i className="ri-mail-line"></i>
          </span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <button className="login__btn" type="submit">
          Login Now
        </button>
      </Form>
      <h6 className="fs-6 text-center mt-4">
        <Link to="/register">Don't have an account?</Link>
      </h6>
    </>
  );
};

export default Login;
