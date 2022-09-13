import React, { useState, useEffect } from "react";
import apiCall from "../Components/apiCall";
import "../Style/Style.css";
import Background from "./companyBg";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Companyname"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .min(3)
    .required("Password should be atleast 3 characters")
    .label("Password"),
  phone: Yup.string().required().label("Phone number"),
  address: Yup.string().required().label("Address"),
  city: Yup.string().required().label("city"),
  country: Yup.string().required().label("country"),
  description: Yup.string().required().label("description"),
});

function Registration() {
  const navigate = useNavigate();
  async function admin(values) {
    try {
      let result = await fetch("http://localhost:1234/registerAdmin", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      result = await result.json();
      console.log(result);
      navigate("/login");
      alert("Registration sucessfully!");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }

  function handleClick() {
    navigate("/login");
  }

  return (
    <>
      <Background />
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          phone: "",
          address: "",
          city: "",
          country: "",
          description: "",
        }}
        onSubmit={admin}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <div className="container-reg my-5 ">
              <h2 className="register" style={{ marginLeft: "2%" }}>
                Company Registration
              </h2>
              <form style={{ marginTop: "5%" }}>
                <div className="form-group m-2">
                  <label>
                    <span className="zmdi zmdi-account material-icons-name"></span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    className="inputText"
                    placeholder="Enter Company Name"
                    onBlur={(e) => setFieldTouched("name")}
                    onChange={handleChange("name")}
                  />
                  {errors.name && touched.name ? (
                    <p className="text-danger">{errors.name}</p>
                  ) : null}
                </div>

                <div className="form-group m-2">
                  <label>
                    <span className="zmdi zmdi-email material-icons-name"></span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    autoComplete="off"
                    className="inputText"
                    placeholder="Email"
                    onBlur={(e) => setFieldTouched("email")}
                    onChange={handleChange("email")}
                  />
                  {errors.email && touched.email ? (
                    <p className="text-danger">{errors.email}</p>
                  ) : null}
                </div>

                <div className="form-group m-2">
                  <label>
                    <span className="zmdi zmdi-lock material-icons-name"></span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    autoComplete="off"
                    className="inputText"
                    placeholder="Password"
                    onBlur={(e) => setFieldTouched("password")}
                    onChange={handleChange("password")}
                  />
                  {errors.password && touched.password ? (
                    <p className="text-danger">{errors.password}</p>
                  ) : null}
                </div>

                <div className="form-group m-2">
                  <label>
                    <span className="zmdi zmdi-phone-in-talk material-icons-name"></span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    autoComplete="off"
                    className="inputText"
                    placeholder="Phone Number"
                    onBlur={(e) => setFieldTouched("phone")}
                    onChange={handleChange("phone")}
                  />
                  {errors.phone && touched.phone ? (
                    <p className="text-danger">{errors.phone}</p>
                  ) : null}
                </div>

                <div className="form-group m-2">
                  <label>
                    <span className="zmdi zmdi-pin"></span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    autoComplete="off"
                    className="inputText"
                    placeholder="Address"
                    onBlur={(e) => setFieldTouched("address")}
                    onChange={handleChange("address")}
                  />
                  {errors.address && touched.address ? (
                    <p className="text-danger">{errors.address}</p>
                  ) : null}
                </div>

                <div className="form-group m-2">
                  <label>
                    <span className="zmdi zmdi-city"></span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    autoComplete="off"
                    className="inputText"
                    placeholder="city"
                    onBlur={(e) => setFieldTouched("city")}
                    onChange={handleChange("city")}
                  />
                  {errors.city && touched.city ? (
                    <p className="text-danger">{errors.city}</p>
                  ) : null}
                </div>

                <div className="form-group m-2">
                  <label>
                    <span className="zmdi zmdi-gps-dot"></span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    autoComplete="off"
                    className="inputText"
                    placeholder="country"
                    onBlur={(e) => setFieldTouched("country")}
                    onChange={handleChange("country")}
                  />
                  {errors.country && touched.country ? (
                    <p className="text-danger">{errors.country}</p>
                  ) : null}
                </div>

                <div className="form-group m-2">
                  <label>
                    <span className="zmdi zmdi-collection-text"></span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    autoComplete="off"
                    className="inputText"
                    placeholder="description"
                    onBlur={(e) => setFieldTouched("description")}
                    onChange={handleChange("description")}
                  />
                  {errors.description && touched.description ? (
                    <p className="text-danger">{errors.description}</p>
                  ) : null}
                </div>

                <button type="submit" onClick={handleSubmit} className="mybtn">
                  Register
                </button>

                <p
                  onClick={handleClick}
                  className="registered text-right fs-5"
                  style={{ color: "black" }}
                >
                  Already registered log in?
                </p>
              </form>
            </div>
          </>
        )}
      </Formik>
    </>
  );
}

export default Registration;
