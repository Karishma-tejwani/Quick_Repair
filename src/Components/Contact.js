import React, { useState } from "react";
import Button from "./Button";
import "../Style/Style.css";

function Contact() {
  return (
    <>
      <section>
        <div className="Container">
          <div className="contactInfo">
            <div>
              <h2>Contact Information</h2>
              <ul className="info">
                <li>
                  <span className="zmdi zmdi-pin zmdi-hc-2x"></span>
                  <span>Sukkur IBA University</span>
                </li>
                <li>
                  <span className="zmdi zmdi-phone zmdi-hc-2x"></span>
                  <span>+92(314)-4589672</span>
                </li>
                <li>
                  <span className="zmdi zmdi-email zmdi-hc-2x"></span>
                  <span>info@gmail.com</span>
                </li>
              </ul>

              <ul className="social">
                <li>
                  <a href="https://www.facebook.com">
                    <i className="fab fa-facebook-f fa-2x"></i>
                  </a>
                </li>
                <li>
                  <a href="fab fa-twitter">
                    <i className="fab fa-twitter fa-2x"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com">
                    <i className="fab fa-instagram fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="contactForm">
            <h1>GET IN TOUCH</h1>
            <form className="formBox">
              <div className="row pt-5 mx-auto">
                <div className="col-md-8 form-group mx-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Fullname"
                    name="name"
                  />
                </div>
                <div className="col-md-8 form-group pt-2 mx-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                    name="email"
                  />
                </div>
                <div className="col-md-8 form-group pt-2 mx-auto">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone Number"
                    name="phone"
                  />
                </div>
                <div className="col-md-8 form-group pt-2 mx-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                  />
                </div>
                <div className="col-md-8 form-group pt-2 mx-auto">
                  <textarea
                    className="form-control"
                    cols={30}
                    rows={8}
                    placeholder="Write a message"
                    name="message"
                  />
                </div>
                <div className="col-md-8 pt-5 mx-auto">
                  <input
                    type="button"
                    className="btn btn-primary sendBtn"
                    value="Send Message"
                  />
                  {/* <Button title="Send Message" style={{ backgroundColor: 'blue' }} cls='mybtn' />                             */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
