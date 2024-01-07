import React from "react";

import blogs from "./blogs";
const blog = () => {
  return (
    <>
      <h3 className="fw-bold text-center text-uppercase mt-5">
        ━━━ Our Blog ━━━
      </h3>
      <div className="row mt-3">
        {blogs.map((item) => {
          return (
            <>
              <div className="m-5 col-12 col-sm-6 col-md-4 col-lg-3  blogs  ">
                <div className="card-deck stretched-link">
                  <div className="card offset-1">
                    <img
                      src={item.img}
                      className="card-img-top img-hover-zoom"
                      alt="med imag"
                      style={{ width: "2vw;", height: "250px" }}
                    />

                    <div
                      className="card-body"
                      style={{ width: "2vw;", height: "auto" }}
                    >
                      <h5 className="card-title fw-bold ">{item.title}</h5>
                      <br />
                      <h6 className="card-text fw-light m-0">
                        <cite>By Admin</cite>
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

export default blog;
