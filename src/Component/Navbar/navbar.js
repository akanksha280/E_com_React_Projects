import React, { Fragment } from "react";
//import fa-sharp from 'react-icons';
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { Nav } from "./NavbarStyle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../index.css";
const navbar = () => {
  return (
    <Fragment>
      <section id="navv" className="card pb-5">
        <Nav className=" navbar navbar-expand-lg navbar-light fixed-top  ">
          <div class="container-fluid">
            <a className="navbar-brand fw-bolder" href=" ">
              Cshop
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href=" ">
                    Home
                    {/* <span className="sr-only">(current)</span> */}
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href=" ">
                    Shop
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href=" ">
                    Collection
                    {/* Collection <span className="sr-only">(current)</span> */}
                  </a>
                </li>

                <li className="nav-item active">
                  <a className="nav-link " href=" ">
                    Pages
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link " href=" ">
                    Blog
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href=" ">
                    Contact Us
                    {/* <span className="sr-only">(current)</span> */}
                  </a>
                </li>
              </ul>
              <div className="nav-linkk">
                <IoSearchSharp className="nav-link-left " size={30} />
                <FaRegUser className="nav-link-left " size={30} />
                <FaRegHeart className="nav-link-left " size={30} />
              </div>

              <div></div>
            </div>
          </div>
        </Nav>
      </section>
    </Fragment>
  );
};

export default navbar;
