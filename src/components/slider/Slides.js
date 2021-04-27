import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src:
      "https://i.ibb.co/cXPyJPd/MONEDAS1.png",
    alt: "Project 1",
    desc: "Project 1",
  },
  {
    src:
      "https://i.ibb.co/C088nm8/MONEDAS2.png",
    alt: "Project 2",
    desc: "Project 2",
  },
  {
    src:
      "https://i.ibb.co/FXQL2Mv/MONEDAS-3.png",
    alt: "Project 3",
    desc: "Project 3",
  },
  {
    src:
      "https://i.ibb.co/hgZcppD/MONEDAS4.png",
    alt: "Project 4",
    desc: "Project 4",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;