/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import axios from "axios";
import cards from "./card.jsx";
import "../../index.css";
const card = () => {
  // eslint-disable-next-line
  const [details, setData] = useState([]);

  const loadApplication = () => {
    axios
      .get("http://localhost:3001/cards")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    loadApplication();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container border-0" style={{ marginTop: "10px" }}>
        <div className="row" style={{ marginRight: "9px" }}>
          {cards.map((item) => {
            return (
              <>
                <div className="col">
                  <div
                    className="card w-100 "
                    style={{ width: "100%", border: "none" }}
                  >
                    <div className="card-body" style={{ width: "4vw" }}></div>
                    <div className="row" style={{ alignItems: "center" }}>
                      <div className="col">
                        <img
                          className="img-hover-zoom hov"
                          src={item.src}
                          alt="imgg"
                        />
                      </div>
                      <div className="col ">
                        <h6 className="card-title">{item.cardTitle}</h6>
                        <p className="card-text">Free shipping on all order</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default card;
