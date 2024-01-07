/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
// eslint-disable-next-line
import axios from "axios";
import newArrival1 from "./newArrival.jsx";
import bestSeller1 from "./bestSeller.jsx";
import saleItem1 from "./saleItem.jsx";
import { FaRegHeart, FaRegEye } from "react-icons/fa6";
// import im3 from "../../images/blog3.jpg";

const deals = () => {
  const [arrNew, setArr1] = React.useState([]);
  const [arr, setArr] = React.useState([]);
  const [arrBest, setArr2] = React.useState([]);
  const [arrSale, setArr3] = React.useState([]);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isHovered1, setIsHovered1] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsHovered1(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const loadApplication1 = () => {
    // axios
    //   .get("http://localhost:3001/newArrival")
    //   .then((response) => {
        setArr1(newArrival1);
        setArr(newArrival1);
      // })
      // .catch((error) => {
      //   console.error("Error fetching data:", error);
      // });
  };
  const loadApplication2 = () => {
    // axios
    //   .get("http://localhost:3001/bestSeller")
    //   .then((response) => {
        setArr2(bestSeller1);
      // })
      // .catch((error) => {
      //   console.error("Error fetching data:", error);
      // });
  };
  const loadApplication3 = () => {
    // axios
    //   .get("http://localhost:3001/saleItem")
    //   .then((response) => {
        setArr3(saleItem1);
      // })
      // .catch((error) => {
      //   console.error("Error fetching data:", error);
      // });
  };

  React.useEffect(() => {
    loadApplication1();
    loadApplication2();
    loadApplication3();
  }, []);

  const newArrival = () => {
    setArr(arrNew);
  };
  const bestSeller = () => {
    setArr(arrBest);
  };
  const saleItem = () => {
    setArr(arrSale);
  };

  return (
    <>
      <h3 className="fw-bold text-center text-uppercase mt-5">
        ━━━ Daily Deals ━━━
      </h3>
      <br />
      <div className="row mt-4">
        {/* style={{display:"inline",marginTop:"300px"}}     style={{width:"18vw",height:"auto"}}  */}
        <span className=" mt-3" style={{ display: "inline" }}>
          <span
            className="text-dark btn fw-bold"
            
            onClick={newArrival}
            style={{ textDecoration: "none" }}
          >
            New Arrivals
          </span>
          <span
            className="text-dark btn fw-bold"
            onClick={bestSeller}
            style={{ textDecoration: "none" }}
          >
            Best Sellers
          </span>
          <span
            className="text-dark btn fw-bold"
            onClick={saleItem}
            style={{ textDecoration: "none" }}
          >
            Sale Items
          </span>
        </span>

        {arr.map((item) => {
          return (
            <>
              <div className="m-5 col-12 col-sm-6 col-md-4 col-lg-3 blog ">
                <div className="card-deck ">
                  <div className="card">
                    <img
                      src={isHovered ? item.img : item.hovimg}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className="card-img-top img-hover-zoom"
                      alt="med imag"
                      style={{ width: "2vw;", height: "280px" }}
                    />
                    {isHovered1 ? (
                      <div
                        class="btn-group btg"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button type="button" className="btn btn-primary btn-sm">
                          <FaRegHeart />
                        </button>
                        <button type="button" className="btn btn-secondary btn-lg">
                          Add to Card
                        </button>
                        <button type="button" className="btn btn-primary btn-sm">
                          <FaRegEye />
                        </button>
                        <br />
                      </div>
                    ) : null}
                    <div
                      className="card-body"
                      style={{ width: "2vw;", height: "100px" }}
                    >
                      <h5 className="card-title fw-bold ">{item.title}</h5>
                      <br />
                      <h6 className="card-text fw-bold mb-3 fst-italic">
                        Price:{item.price}
                      </h6>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default deals;
