import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homes from "./home";
// eslint-disable-next-line
import jsonData from "../../db.json";
import { useState, useEffect } from "react";
import axios from "axios";
import "./../../index.css";
import { Button } from "./HomeStyle";
const Home2 = () => {
  // eslint-disable-next-line
  const [details, setData] = useState([]);

  const loadApplication = () => {
    axios
      .get("http://localhost:3001/carousel")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    loadApplication();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
  };

  return (
    <>
      <div
        className="well border-0"
        style={{ marginTop: "12px", border: "none" }}
      >
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={400}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {homes.map((item) => {
            return (
              <div className="carousel-item active" key={item.id}>
                <div className="card border-0">
                  <div
                    className="card card-responsive object-fit-cover  bg-light"
                    style={{
                      width: "18rem;",
                      height: "1000px;",
                      border: "none",
                    }}
                  >
                    <div className="card-body">
                      <img
                        className="card-img img-responsive"
                        src={item.src}
                        alt={item.alt}
                        style={{
                          width: "47vw",
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
                          style={{ fontSize: "2.5vw", marginLeft: "0.5vw" }}
                        >
                          <b className="fw-light">Smart Products</b>
                        </h1>
                        <p
                          className="card-text fw-light"
                          style={{ fontSize: "4vw", marginLeft: "0.5vw" }}
                        >
                          {item.weather} offer <br /> 2024 collection
                        </p>
                        <Button
                          className="btn   btn-round bt"
                          style={{ marginLeft: "0.5vw" }}
                        >
                          SHOP NOW
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Home2;
