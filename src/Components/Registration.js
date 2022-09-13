import React, { useState } from "react";
import Button from "./Button";
import Login from "./Login";
import { NavLink } from "react-router-dom";
import "../Style/Style.css";
import { Container, Alert } from "react-bootstrap";
import Background from "./Background";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone || !address) {
      setFlag(true);
    } else {
      setFlag(false);

      localStorage.setItem("Name", JSON.stringify(name));
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      localStorage.setItem("Phone", JSON.stringify(phone));
      localStorage.setItem("Address", JSON.stringify(address));

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <>
      <Background />
      {login ? (
        <div className="container-reg offset-md-3 my-5 ">
          <h2 className="register text-center">Registration</h2>
          <form
            method="POST"
            className="signup-form m-5 p-5"
            onSubmit={handleFormSubmit}
          >
            <div className="form-group m-2">
              {/* using material design icons */}
              <label>
                <span className="zmdi zmdi-account material-icons-name"></span>
              </label>
              <input
                type="text"
                name="name"
                autoComplete="off"
                className="inputText"
                placeholder="Enter your Name"
                onChange={(event) => setName(event.target.value)}
              />
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
                onChange={(event) => setEmail(event.target.value)}
              />
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
                onChange={(event) => setPass(event.target.value)}
              />
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
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>

            <div className="form-group m-2">
              <label>
                <span className="zmdi zmdi-home material-icons-name"></span>
              </label>
              <input
                type="text"
                name="address"
                autoComplete="off"
                className="inputText"
                placeholder="Address"
                onChange={(event) => setAddress(event.target.value)}
              />
            </div>
            <Button
              title="Register"
              style={{ backgroundColor: "blue" }}
              cls="mybtn"
            />
            <p
              onClick={handleClick}
              className="registered text-right fs-5"
              style={{ color: "black" }}
            >
              Already registered log in?
            </p>

            {flag && (
              <Alert color="primary" variant="danger">
                Fill all fields!
              </Alert>
            )}
          </form>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default Registration;

// import React, { useState, useEffect } from "react";
// import "../Style/Style.css";
// import Background from "./Background";
// import { useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// const initialValues = {
//   name: "",
//   email: "",
//   password: "",
//   phone: "",
//   address: "",
//   city: "",
// };

// const schema = Yup.object().shape({
//   name: Yup.string().required().label("name"),
//   email: Yup.string().required().email().label("Email"),
//   password: Yup.string().required().min(6).label("Password"),
//   phone: Yup.string().required().label("Phone"),
//   address: Yup.string().required().label("Address"),
//   city: Yup.string().required().label("City"),
//   country: Yup.string().required().label("Country"),
// });

// function Registration() {
//   const navigate = useNavigate();
//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues: initialValues,
//       validationSchema: schema,
//       onSubmit: (values, action) => {
//         console.log(values);
//         action.resetForm();
//       },
//     });

//   async function signUp(val) {
//     try {
//       let result = await fetch("http://localhost:1234/registerCustomer", {
//         method: "POST",
//         body: JSON.stringify(val),
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//       });

//       result = await result.json();
//       alert("Registration sucessfully!");
//       navigate("/login");
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   function handleClick() {
//     navigate("/login");
//   }

//   return (
//     <>
//       <Background />
//       <div className="container-reg my-5 ">
//         <h2 className="register text-center">Registration</h2>
//         <form
//           method="POST"
//           className="signup-form m-2 p-5"
//           onSubmit={handleSubmit}
//         >
//           <div className="form-group m-2">
//             <label>
//               <span className="zmdi zmdi-account material-icons-name"></span>
//             </label>
//             <input
//               type="text"
//               name="name"
//               autoComplete="off"
//               className="inputText"
//               placeholder="Enter your Name"
//               value={values.name}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.name && touched.name ? (
//               <p className="text-danger">{errors.name}</p>
//             ) : null}
//           </div>

//           <div className="form-group m-2">
//             <label>
//               <span className="zmdi zmdi-email material-icons-name"></span>
//             </label>
//             <input
//               type="email"
//               name="email"
//               autoComplete="off"
//               className="inputText"
//               placeholder="Email"
//               value={values.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.email && touched.email ? (
//               <p className="text-danger">{errors.email}</p>
//             ) : null}
//           </div>

//           <div className="form-group m-2">
//             <label>
//               <span className="zmdi zmdi-lock material-icons-name"></span>
//             </label>
//             <input
//               type="password"
//               name="password"
//               autoComplete="off"
//               className="inputText"
//               placeholder="Password"
//               value={values.password}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.password && touched.password ? (
//               <p className="text-danger">{errors.password}</p>
//             ) : null}
//           </div>

//           <div className="form-group m-2">
//             <label>
//               <span className="zmdi zmdi-phone-in-talk material-icons-name"></span>
//             </label>
//             <input
//               type="text"
//               name="phone"
//               autoComplete="off"
//               className="inputText"
//               placeholder="Phone Number"
//               value={values.phone}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.phone && touched.phone ? (
//               <p className="text-danger">{errors.phone}</p>
//             ) : null}
//           </div>

//           <div className="form-group m-2">
//             <label>
//               <span className="zmdi zmdi-pin"></span>
//             </label>
//             <input
//               type="text"
//               name="address"
//               autoComplete="off"
//               className="inputText"
//               placeholder="Address"
//               value={values.address}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.address && touched.address ? (
//               <p className="text-danger">{errors.address}</p>
//             ) : null}
//           </div>
//           <div className="form-group m-2">
//             <label>
//               <span className="zmdi zmdi-twitch"></span>
//             </label>
//             <input
//               type="text"
//               name="city"
//               autoComplete="off"
//               className="inputText"
//               placeholder="City"
//               value={values.city}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.city && touched.city ? (
//               <p className="text-danger">{errors.city}</p>
//             ) : null}
//           </div>

//           <button onClick={signUp} className="btn btn-primary mt-2 ml-5 w-25">
//             Register
//           </button>

//           <p
//             onClick={handleClick}
//             className="registered text-right fs-5"
//             style={{ color: "black" }}
//           >
//             Already registered log in?
//           </p>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Registration;
