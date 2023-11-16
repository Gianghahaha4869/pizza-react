import React, { useState } from "react";

import pizza1 from ".././images/anh_mon_1.jpg";
import pizza2 from ".././images/anh_mon_2.jpg";
import pizza3 from ".././images/anh_mon_3.jpg";
import pizza4 from ".././images/anh_mon_4.jpg";
import pizza5 from ".././images/anh_mon_5.jpg";

const Header = () => {
  return (
    <header>
      <Nav />
      <Content />
    </header>
  );
};

function Content() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      imgSrc: pizza1,
      alt: "Photo 1",
    },
    {
      imgSrc: pizza2,
      alt: "Photo 2",
    },
    {
      imgSrc: pizza3,
      alt: "Photo 3",
    },
    {
      imgSrc: pizza4,
      alt: "Photo 4",
    },
    {
      imgSrc: pizza5,
      alt: "Photo 5",
    },
  ];
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const gotoSlide = (slide) => {
    setCurrentSlide(slide);
  };

  return (
    <div className="container container-header">
      <h1>Pizza 365</h1>
      <p>Truly Italian!</p>
      <div className="slider">
        {slides.map((slide, i) => (
          <Slide slide={slide} currentSlide={currentSlide} i={i} key={i} />
        ))}
        <button className="slider__btn slider__btn--left" onClick={prevSlide}>
          &larr;
        </button>
        <button className="slider__btn slider__btn--right" onClick={nextSlide}>
          &rarr;
        </button>
        <Dots slides={slides} onClick={gotoSlide} currentSlide={currentSlide} />
      </div>
    </div>
  );
}

function Dots({ slides, currentSlide, onClick }) {
  return (
    <div className="dots">
      {slides.map((_, i) => (
        <button
          className={`dots__dot ${currentSlide === i ? "dots__dot--active" : ""}`}
          data-slide={i}
          key={i}
          onClick={() => onClick(i)}
        ></button>
      ))}
    </div>
  );
}

function Slide({ slide, currentSlide, i }) {
  return (
    <div
      className="slide"
      key={i}
      style={{
        transform: `translateX(${(i - currentSlide) * 100}% )`,
      }}
    >
      <img
        className={`slide__img ${currentSlide === i ? "slide__img--active" : ""}`}
        data-img={i}
        src={slide.imgSrc}
        alt={slide.alt}
      />
    </div>
  );
}

function Nav() {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className={showNav ? "nav-links show-links" : "nav-links"}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#size">Size combos</a>
          </li>
          <li>
            <a href="#type">Pizza Types</a>
          </li>
          <li>
            <a className="last-link" href="#contact">
              Form Contact
            </a>
          </li>
        </ul>
        <div
          className={showNav ? "nav-toggle show-nav" : "nav-toggle"}
          onClick={() => setShowNav((showNav) => !showNav)}
        >
          <i className="ri-close-fill icon-close"></i>
          <i className="ri-menu-line icon-menu"></i>
        </div>
      </div>
    </nav>
  );
}

export default Header;
