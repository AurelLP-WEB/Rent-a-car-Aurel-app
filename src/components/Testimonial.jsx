import React from 'react';
import Slider from 'react-slick';

import ava1 from '../assets/img/ava-1.jpg';
import ava2 from '../assets/img/ava-2.jpg';
import ava3 from '../assets/img/ava-3.jpg';
import '../styles/testimonial.css';
import ava4 from '../assets/img/ava-4.jpg';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="mt-4">
      <div className="py-4 px-3 testimonial">
        <p className="section__description">
          As a frequent traveler, I rely on the rent-a-car app for all my
          transportation needs, and I must say, it has truly exceeded my
          expectations. The app is user-friendly, making it easy to book a car
          in just a few taps. The selection of vehicles is impressive, catering
          to different preferences and budgets. What sets this app apart is the
          seamless pickup and drop-off process, saving me valuable time during
          my trips. The customer service is top-notch, always ready to assist
          with any inquiries or concerns. Overall, I highly recommend the
          rent-a-car app for its convenience, reliability, and exceptional
          service.{' '}
        </p>

        <div className="mt-3 d-flex align-items-center gap-4 ">
          <img src={ava1} alt="" className="w-25 h-25" />

          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
      <div className="py-4 px-3 testimonial">
        <p className="section__description">
          As a frequent traveler, I rely on the Rent-A-Car app for all my car
          rental needs. The app's user-friendly interface makes it easy to
          search for and book a vehicle in just a few taps. I appreciate the
          wide selection of cars available, ensuring that I always find the
          perfect vehicle for my trip. The convenience of being able to pick up
          and drop off the car at various locations has made my travel
          experience seamless and stress-free. The Rent-A-Car app's competitive
          prices and excellent customer service have earned my trust, making it
          my go-to choice for car rentals wherever I go. I highly recommend this
          app to anyone looking for a reliable and efficient car rental service.{' '}
        </p>

        <div className="mt-3 d-flex align-items-center gap-4 ">
          <img src={ava2} alt="" className="w-25 h-25" />

          <div>
            <h6 className="mb-0 mt-3">Daniella Cooper</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
      <div className="py-4 px-3 testimonial">
        <p className="section__description">
          I recently used the rent-a-car app for my business trip, and I must
          say it exceeded all my expectations. The app was user-friendly, making
          it easy to browse through a wide selection of vehicles and choose the
          perfect one for my needs. The booking process was seamless, and I was
          able to secure a car quickly and efficiently. The vehicle I rented was
          in excellent condition, clean, and well-maintained, providing a
          comfortable and reliable driving experience throughout my trip. I
          highly recommend this rent-a-car app to anyone in need of convenient
          and hassle-free car rental services.{' '}
        </p>

        <div className="mt-3 d-flex align-items-center gap-4 ">
          <img src={ava3} alt="" className="w-25 h-25" />

          <div>
            <h6 className="mb-0 mt-3">Martin Cooper</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
      <div className="py-4 px-3 testimonial">
        <p className="section__description">
          I rely on the rent-a-car app for all my transportation needs. The
          app's user-friendly interface makes it easy to book a car quickly and
          efficiently, saving me valuable time during my trips. The wide
          selection of vehicles available ensures that I always find the perfect
          car for my needs, whether it's a compact for city driving or an SUV
          for outdoor adventures. With competitive prices and excellent customer
          service, the rent-a-car app has become my go-to choice for hassle-free
          car rentals. Highly recommended!{' '}
        </p>

        <div className="mt-3 d-flex align-items-center gap-4 ">
          <img src={ava4} alt="" className="w-25 h-25" />

          <div>
            <h6 className="mb-0 mt-3"> Lily Davis</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
