import React, { useState } from 'react';
import CommonSection from '../components/CommonSection';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Importă configurarea Firebase

import '../styles/sign-in.css';

const SignIn = () => {
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
      navigate('/Home'); // Mergi la dashboard sau pagina dorită după login
    } catch (err) {
      setError(err.message); // Afișează mesajul de eroare
    }
  };

  return (
    <Helmet title="Login">
      <section className="p-0">
        <CommonSection title="Login Page" />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="4" md="6" sm="8" xs="10" className="m-auto">
              <h4 className="d-flex align-items-center gap-2 justify-content-center mb-5">
                <i className="ri-key-2-line"></i> Sign In
              </h4>
              <Form onSubmit={handleLogin}>
                {error && <p style={{ color: 'red' }}>{error}</p>} {/* Afișează erorile */}
                <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">
                  <span>
                    <i className="ri-user-line"></i>
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
                <h6 className="fs-6  text-end">
                  <Link to="#">Forgot Password?</Link>
                </h6>
                <button className="login__btn" type="submit">
                  Login
                </button>
              </Form>

              <h6 className="fs-6 text-center mt-4">
                <Link to="/signup">Do you need an Account?</Link>
              </h6>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default SignIn;

