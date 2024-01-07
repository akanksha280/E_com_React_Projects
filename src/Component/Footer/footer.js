import React from "react";

const footer = () => {
  return (
    <>
      <div className="well mt-5">
        <footer
          className="text-center text-lg-start text-dark"
          style={{ backgroundColor: "#f8f8ff" }}
        >
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h3 className="mt-5 fw-bold">Cshop.</h3>
                  <p>
                    @2024 Cshop.
                    <br />
                    All Rights Reserved
                  </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    About Us
                  </h6>
                  <p>
                    <a className="text-dark foot" href=" ">
                      About Us
                    </a>
                  </p>
                  <p>
                    <a className="text-dark foot" href=" ">
                      Store Location
                    </a>
                  </p>
                  <p>
                    <a className="text-dark foot" href=" ">
                      Contact
                    </a>
                  </p>
                  <p>
                    <a className="text-dark foot" href=" ">
                      Orders Tracking
                    </a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Useful links
                  </h6>
                  <p>
                    <a className="text-dark foot" href=" ">
                      Returns
                    </a>
                  </p>
                  <p>
                    <a className="text-dark foot" href=" ">
                      Support Policy
                    </a>
                  </p>
                  <p>
                    <a className="text-dark foot" href=" ">
                      Size guide
                    </a>
                  </p>
                  <p>
                    <a className="text-dark foot" href=" ">
                      FAQs
                    </a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 text-dark">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Follow Us
                  </h6>
                  <p>
                    <a className="text-dark foot" href=" ">
                      Facebook
                    </a>
                  </p>
                  <p>
                    <a className="text-dark foot" href=" ">
                      Twitter
                    </a>
                  </p>
                  <p>
                    <a className="text-dark foot" href=" ">
                      Instagram
                    </a>
                  </p>
                  <p>
                    <a className="text-dark foot" href=" ">
                      Youtube
                    </a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold text-dark">
                    Subscribe
                  </h6>
                  <p>
                    Get E-mail Updates abot our latest shop and special offers.
                  </p>
                  <form className="form-inline">
                    <div className="form-group">
                      <label for="exampleInputEmail1"></label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        style={{
                          border: "none",
                          borderBottom: "1px solid blueviolet",
                        }}
                      />
                    </div>
                    <button
                      type="button"
                      className="btn border-0"
                      style={{
                        textDecorationLine: "overline",
                        textDecorationColor: "blueviolet",
                        color: "blueviolet",
                      }}
                    >
                      Subscribe{" "}
                    </button>
                  </form>
                </div>
              </div>
            </section>

            <hr className="my-3" />

            <section className="p-3 pt-0 text-center">
              <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                  <div className="p-3">
                    © 2020 Copyright:
                    <a className="text-dark foot" href="/">
                      Cshop.com
                    </a>
                  </div>
                </div>

                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  <a
                    className="btn btn-outline-light btn-floating m-1 text-dark"
                    role="button"
                    href=" "
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1 text-dark"
                    role="button"
                    href=" "
                  >
                    <i className="fab fa-twitter"></i>
                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1 text-dark"
                    role="button"
                    href=" "
                  >
                    <i className="fab fa-google"></i>
                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1 text-dark"
                    href=" "
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </>
  );
};

export default footer;
