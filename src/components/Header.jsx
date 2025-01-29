import React, { useRef, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartUiAction } from '../store/cartUi-Slice';
import RentalForm from '../components/RentalForm'; // Formularul tău
import '../styles/header.css';

const NAV__MENU = [
  { text: 'Home', path: '/home' },

  { text: 'About', path: '/about' },

  { text: 'Services', path: '/services' },

  { text: 'Car Listing', path: '/car-listing' },

  { text: 'Shop', path: '/products' },

  { text: 'Blog', path: '/blogs' },

  { text: 'Contact', path: '/contact' },
];

const Header = () => {
  const menuRef = useRef();
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const [modal, setModal] = useState(false); // Pentru a controla modalul
  const toggleModal = () => setModal(!modal); // Funcție pentru toggle

  const cartShowToggle = () => dispatch(cartUiAction.toggle());
  const menuToggle = () => menuRef.current.classList.toggle('menu__active');

  return (
    <header>
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top-left">
                <span>Need Help?</span>
                <span className="header__top-help">
                  <i className="ri-phone-fill"></i> Call: +321 123 45 978
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" className="text-end">
              <div className="header__top-right">
                <Link to="/signin">
                  <i className="ri-login-circle-line"></i> Login
                </Link>
                <Link to="/signup">
                  <i className="ri-user-line"></i> Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="main__header">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home">
                    <i className="ri-car-line"></i>{' '}
                    <span>
                      Rent Car <br /> Service
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="header__location">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Bucharest</h4>
                  <h6>Bucharest</h6>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="header__location">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>
            <Col
              lg="2"
              md="3"
              sm="0"
              className="text-end d-flex align-items-center justify-content-end"
            >
              <Button className="header__btn btn" onClick={toggleModal}>
                <i className="ri-phone-line"></i> Request a call
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="header__bottom">
        <Container>
          <div className="menu__container d-flex justify-content-between align-items-center">
            <span className="menu__bar">
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
            <div className="menu__list" ref={menuRef} onClick={menuToggle}>
              <div className="menu__left">
                {NAV__MENU.map((item, index) => (
                  <NavLink
                    className={navClass =>
                      navClass.isActive ? 'active me-4 ' : 'me-4'
                    }
                    key={index}
                    to={item.path}
                  >
                    {item.text}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="menu__right d-flex gap-4 align-items-center">
              <span className="header__cart">
                <i
                  className="ri-shopping-bag-line"
                  onClick={cartShowToggle}
                ></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className="search">
                <input type="text" placeholder="search" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Modal pentru formular */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Rezervă o Mașină</ModalHeader>
        <ModalBody>
          <RentalForm />
        </ModalBody>
      </Modal>
    </header>
  );
};

export default Header;
