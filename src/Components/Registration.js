import axios from "axios";
import { useState } from "react";
import "../Style/Style.css";
import Background from "./Background";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:1234/registerAdmin", {
        name: name,
        email: email,
        password: password,
        phone: phone,
        address: address,
        city: city,
        country: country,
        description: description,
      });
      alert("User Registation Successfully");
      setName("");
      setEmail("");
      setPassword("");
      setCity("");
      setPhone("");
      setAddress("");
      setCountry("");
      setDescription("");
    } catch (err) {
      alert("User Registation Failed");
    }
  }
  return (
    <>
      <Background />
      <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <br></br>
          <h1>Register</h1>
          <p>Fill in the Information Below</p>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />

          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />

          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />

          <input
            type="text"
            name="phone"
            placeholder="phone"
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />

          <input
            type="text"
            name="address"
            placeholder="address"
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />

          <input
            type="text"
            name="city"
            placeholder="city"
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />

          <input
            type="text"
            name="country"
            placeholder="country"
            onChange={(event) => {
              setCountry(event.target.value);
            }}
          />

          <input
            type="text"
            name="description"
            placeholder="description"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default Registration;
