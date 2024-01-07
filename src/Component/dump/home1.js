/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import im from "../../images/backgr.jpg";
import { Button } from "../Home/HomeStyle";
const home1 = () => {
  const [details, setData] = useState([]);

  const loadApplication = () => {
    axios
      .get("http://localhost:3001/carousel")

      .then((response) => {
        setData(response.data);
        // console.log(details,"hh",response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    loadApplication();
  }, []);

  return (
    <>
      <div id="carouselExampleIndicators" className="carousel carousel-dark slide carousel-fade">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
   
  </div>
  <div className="carousel-inner">
          {details.map((item) => {
            console.log(item);
            return (
              <>
              <div className="well">
                {item.id}
                <div
                  className={
                    item.id === 1 ? "carousel-item active" : "carousel-item"
                  }
                  key={item.id}
                >
                  <div
                    className="card card-responsive object-fit-cover  bg-light"
                    style={{ width: "18rem;", height: "1000px;" }}
                  >
                    <div className="card-body">
                      <img
                        className="card-img img-responsive"
                        src={im}
                        alt={item.alt}
                        style={{
                          width: "500px",
                          height: "auto",
                          float: "right",
                          objectPosition: "right",
                        }}
                      />
                      <div
                        className="card-img-overlay img-responsive"
                        style={{
                          textAlign: "left",
                          marginTop: "150px",
                          marginLeft: "100px",
                          width: "100%",
                          height: "auto",
                          maxWidth: "100%",
                        }}
                      >
                        <h1
                          className="card-title fw-light"
                          style={{ fontSize: "2.5vw",marginLeft: "8vw" }}
                        >
                          <b className="fw-light">Smart Products</b>
                        </h1>
                        <p
                          className="card-text fw-light"
                          style={{ fontSize: "4vw" ,marginLeft:"8vw"}}
                        >
                          {item.weather} offer <br /> 2024 collection
                        </p>
                        <Button className="btn   btn-round " style={{marginLeft: "8vw"}} >SHOP NOW</Button>
                      </div>
                    </div>
                  </div>

                 
                </div>
                </div>
              </>
            );
          })}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
      </div>

      {/* jjj */}
     
    </>
  );
};

export default home1;
