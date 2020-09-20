import React from "react";
import "./footer.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="mainfooter">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="footer-pad">
                  <h4> About this site </h4>
                  <hr />
                  <p>
                    this site help your programming skills by build your apps by
                    yourself without any help so I'm so proud of me
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="footer-pad">
                  <h4>Cagtegories</h4>
                  <hr />
                  <ul className="list-unstyled">
                    <li>Movie Books</li>
                    <li>Game Books</li>
                    <li>Kids Books</li>
                    <li>Anime Books</li>
                    <li>Sports Books</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4">
                <h4>Follow Us</h4>
                <hr />

                <ul className="social-network social-circle">
                  <FaFacebookSquare />
                  <FaTwitterSquare />
                  <FaInstagramSquare />
                  <form className="form-inline">
                    <div className="form-group ">
                      <input
                        type="email"
                        className="form-control"
                        id="inputyourEmail"
                        placeholder="Email"
                      ></input>
                    </div>
                    <button type="submit" className="btn btn-success">
                      Subscribe
                    </button>
                  </form>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 copy">
                <p className="text-center">
                  &copy; Copyright 2018 - Company Name. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
