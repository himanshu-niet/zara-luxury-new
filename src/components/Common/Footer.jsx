import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="ftco-footer ftco-section">
    <div className="container">
      <div className="row">
        <div className="mouse">
          <a href="#" className="mouse-icon">
            <div className="mouse-wheel">
              <span className="ion-ios-arrow-up" />
            </div>
          </a>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Zara Luxury</h2>
            <p>
            Shop, Slay, Repeat.
            </p>
            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
              <li className=" icon-hover">
                <a href="#">
                  <span className="icon-youtube" />
                </a>
              </li>
              <li className=" icon-hover">
                <a href="#">
                  <span className="icon-facebook" />
                </a>
              </li>
              <li className=" icon-hover">
                <a href="#">
                  <span className="icon-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4 ml-md-5">
            <h2 className="ftco-heading-2">Menu</h2>
            <ul className="list-unstyled">
              <li>
              <Link to={"/"} className="py-2 d-block">
                  Home
                </Link>
              </li>
              <li>
              <Link to={"/about"} className="py-2 d-block">
                  About
                </Link>
              </li>
              <li>
              <Link to={"/products"} className="py-2 d-block">
                  Shop
                </Link>
              </li>
              <li>
              <Link to={"/contact"} className="py-2 d-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Help</h2>
            <div className="d-flex">
              <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
              <li>
              <Link to={"/"} className="py-2 d-block">
                FAQs
              </Link>
            </li>
                <li>
                  <Link to={"/"} className="py-2 d-block">
                    Returns &amp; Exchange
                  </Link>
                </li>
                <li>
                <Link to={"/"} className="py-2 d-block">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="py-2 d-block">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
             
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Have a Questions?</h2>
            <div className="block-23 mb-3">
              <ul>
                <li>
                  <span className="icon icon-map-marker" />
                  <span className="text">
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </span>
                </li>
                <li>
                  <a href="#">
                    <span className="icon icon-phone" />
                    <span className="text">+91 123456789</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon icon-envelope" />
                    <span className="text">info@yourdomain.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © 2023 Zara Luxury. All rights reserved | Developed
           by{" "}
            <a href="https://cybronical.com/" target="_blank">
            Cybronical India Pvt. Ltd
            </a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer