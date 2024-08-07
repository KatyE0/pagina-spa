import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Carousel() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://via.placeholder.com/800x400.png?text=First+Slide" className="d-block w-100" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/800x400.png?text=Second+Slide" className="d-block w-100" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/800x400.png?text=Third+Slide" className="d-block w-100" alt="Third slide" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
