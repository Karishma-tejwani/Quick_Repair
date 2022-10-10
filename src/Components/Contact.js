import React, { useState } from "react";
import axios from "axios";
import "../Style/Style.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { IoIosPin } from "react-icons/io";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:1234/registerCustomer", {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        msg: msg,
      });
      alert("Thanks for submiting form!");
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMsg("");
    } catch (err) {
      alert("Message send failed!");
    }
  }

  return (
    <>
      <section>
        <div className="Container">
          <div className="contactInfo">
            <div>
              <h2>Contact Information</h2>
              <ul className="info">
                <li>
                  <IoIosPin size={30} />
                  <span>Sukkur IBA University</span>
                </li>
                <li>
                  <FaPhoneAlt size={20} />
                  <span>+92(314)-4589672</span>
                </li>
                <li>
                  <FaEnvelope size={20} />
                  <span>zoyamemon767@gmail.com</span>
                </li>
              </ul>

              <ul className="social">
                <li>
                  <a href="https://www.facebook.com">
                    <FaFacebookF size={30} />
                  </a>
                </li>
                <li>
                  <a href="fab fa-twitter">
                    <FaInstagram size={30} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com">
                    <FaTwitter size={30} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="contactForm text-center">
            <h1>GET IN TOUCH</h1>
            <form className="formBox" onSubmit={handleSubmit}>
              <div className="row pt-5 mx-auto">
                <div className="col-md-8 form-group mx-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Fullname"
                    name="name"
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                </div>
                <div className="col-md-8 form-group pt-2 mx-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                    name="email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
                <div className="col-md-8 form-group pt-2 mx-auto">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone Number"
                    name="phone"
                    onChange={(event) => {
                      setPhone(event.target.value);
                    }}
                  />
                </div>
                <div className="col-md-8 form-group pt-2 mx-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    onChange={(event) => {
                      setSubject(event.target.value);
                    }}
                  />
                </div>
                <div className="col-md-8 form-group pt-2 mx-auto">
                  <textarea
                    className="form-control"
                    cols={30}
                    rows={8}
                    placeholder="Write a message"
                    name="message"
                    onChange={(event) => {
                      setMsg(event.target.value);
                    }}
                  />
                </div>
                <button type="submit" className="btn btn-primary sendBtn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
