import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import image1 from "./1.jpg"
import image2 from "./2.jpg"
import image3 from "./3.jpg"

export default function Home() {
  const [search,setSearch]=useState('');
  const [foodcategory, setFoodCatergoy] = useState([]);
  const [fooditem, setFoodItem] = useState([]);

  const data = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCatergoy(response[1]);
  };
  useEffect(() => {
    data();
  }, []);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-inner">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center" >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for food"
                  aria-label="Search"
                  value={search}
                  onChange={(e)=>setSearch(e.target.value)}
                />
                {/* <button className="btn btn-outline-info" type="submit">
                  Search
                </button> */}
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src={image1}
                className="d-block w-100"
                style={{
                  filter: "brightness(30%)",
                  width: "700px",
                  height: "400px",
                }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={image2}
                className="d-block w-100"
                style={{
                  filter: "brightness(30%)",
                  width: "700px",
                  height: "400px",
                }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={image3}
                className="d-block w-100"
                style={{
                  filter: "brightness(30%)",
                  width: "700px",
                  height: "400px",
                }}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        {foodcategory.length > 0 ? (
          foodcategory.map((data) => (
            <div className="row mb-3" key={data._id}>
              <div className="fs-3 m-3">{data.CategoryName}</div>
              <hr />
              {fooditem.length > 0 ? (
                <div className="row">
                  {fooditem
                    .filter((item) => (
                      item.CategoryName === data.CategoryName &&
                      item.name.toLowerCase().includes(search.toLowerCase())
                    ))
                    .map((filteritem) => (
                      <div key={filteritem._id} className="col-12 col-md-6 col-lg-4 mb-3">
                        <Card
                          food={filteritem}
                          options={filteritem.options[0]}
                          
                        />
                      </div>
                    ))}
                </div>
              ) : (
                <div>No such data found</div>
              )}
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
} 
