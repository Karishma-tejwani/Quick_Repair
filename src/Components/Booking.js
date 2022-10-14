import axios from "axios";
import { useState } from "react";
import "../Style/Style.css";
import {
  FaUserAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaCity,
  FaHome,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Booking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    if (
      name.length === 0 ||
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
        phone: phone,
        address: address,
        city: city,
      });

      alert("You order has been placed Successfully");
      navigate("/");
      setName("");
      setEmail("");
      setCity("");
      setPhone("");
      setAddress("");
    } catch (err) {
      alert("Order placed Failed");
    }
  }

  return (
    <>
      <div className="register-container">
        <form
          className="register-form shadow-lg p-2 my-5 rounded"
          onSubmit={handleSubmit}
        >
          <br></br>
          <h3>Confirm Order</h3>
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
            Confirm Order
          </button>
        </form>
      </div>
    </>
  );
}

export default Booking;
