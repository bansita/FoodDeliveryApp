import React from 'react'
import image1 from'./1.jpg';
import image2 from'./2.jpg';
import image3 from'./3.jpg';
export default function Carousel() {
  return (
    <div>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-inner">
    <div className="carousel-caption" style={{"zIndex":"10"}}>
    <form className="d-flex" role="search" >
      <input className="form-control me-2" type="search" placeholder="Search for food" aria-label="Search"/>
      <button className="btn btn-outline-info" type="submit">Search</button>
    </form>
    </div>
    <div className="carousel-item active">
      <img src={image1} className="d-block w-100" style={{filter:"brightness(30%)",width:"800px",height:"600px"}}alt="..."/> 
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100" style={{filter:"brightness(30%)",width:"800px",height:"600px"}}alt="..."/>   
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100" style={{filter:"brightness(30%)",width:"800px",height:"600px"}}alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
}
