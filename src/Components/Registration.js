import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Style.css";
import Background from "./Background";
import {
  FaUserAlt,
  FaEnvelope,
  FaLock,
  FaPhoneAlt,
  FaCity,
  FaHome,
} from "react-icons/fa";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    if (
      name.length === 0 ||
      password.length === 0 ||
      email.length === 0 ||
      phone.length === 0 ||
      address.length === 0 ||
      city.length === 0
    ) {
      setError(true);
    }

    try {
      await axios.post("http://localhost:1234/registerCustomer", {
        name: name,
        email: email,
        password: password,
        phone: phone,
        address: address,
        city: city,
      });

      alert("User Registation Successfully");
      navigate("/login");
      setName("");
      setEmail("");
      setPassword("");
      setCity("");
      setPhone("");
      setAddress("");
    } catch (err) {
      alert("User Registation Failed");
    }
  }

  function handleClick() {
    navigate("/login");
  }

  return (
    <>
      <Background />
      <div className="register-container">
        <form
          className="register-form shadow-lg p-2 my-5 rounded"
          onSubmit={handleSubmit}
        >
          <br></br>
          <h3>Registration</h3>
          <br></br>
          <div>
            <FaUserAlt />
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          {error && name.length <= 0 ? (
            <label className="label">Please enter name!</label>
          ) : (
            ""
          )}

          <div>
            {" "}
            <FaEnvelope />
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          {error && email.length <= 0 ? (
            <label className="label">Please enter Email!</label>
          ) : (
            ""
          )}

          <div>
            <FaLock />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          {error && password.length <= 0 ? (
            <label className="label">Please enter Password!</label>
          ) : (
            ""
          )}

          <div>
            <FaPhoneAlt />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
          </div>
          {error && phone.length <= 0 ? (
            <label className="label">Please enter Phone!</label>
          ) : (
            ""
          )}

          <div>
            <FaHome />
            <input
              type="text"
              name="address"
              placeholder="Address"
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
          </div>
          {error && address.length <= 0 ? (
            <label className="label">Please enter Address!</label>
          ) : (
            ""
          )}

          <div>
            <FaCity />
            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </div>
          {error && city.length <= 0 ? (
            <label className="label">Please enter City!</label>
          ) : (
            ""
          )}

          <button type="submit" className="btnReg">
            Register
          </button>

          <p
            onClick={handleClick}
            className="registered text-right fs-5 my-2"
            style={{ color: "black" }}
          >
            Already registered log in?
          </p>
        </form>
      </div>
    </>
  );
}

export default Registration;
