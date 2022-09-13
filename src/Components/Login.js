import React, { useState } from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { Alert, Container } from "react-bootstrap";
import Background from "./Background";
// import {useFormik} from 'formik';
import * as Yup from "yup";
import "../Style/Style.css";
import login from "../images/log.gif";
import Home from "./Home";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [menu, setMenu] = useState(true);

  function handleLogin(e) {
    e.preventDefault();

    let pass = localStorage.getItem("Password").replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");

    if (!email || !password) {
      setFlag(true);
    } else if (password !== pass || email !== mail) {
      setFlag(true);
    } else {
      setMenu(!menu);
      setFlag(false);
    }
  }

  // const [email, setEmail] = useState('');

  // const formik = useFormik({
  //     initialValues: {
  //         email: '',
  //         password: ''
  //     },

  //     validationSchema: Yup.object({
  //         email: Yup.string().email("Invalid email format!").required("Email Required!"),
  //         password: Yup.string().min(6,"Password must be 6 characters or more").required("Password required!")
  //     }),

  //     onSubmit: values => {
  //         setEmail(values.email);
  //         console.log("Form data", values);
  //     }
  // })

  return (
    <>
      {/*     
        <Background />
        
        <Container>
                <img src={login} alt="login logo" className="image"/>
                <div className="container offset-md-3 my-5 ">
                    <form className="login-form m-5 p-5" onSubmit={formik.handleSubmit}>
                        <div className="form-group m-3">
                            <label><span class="zmdi zmdi-email material-icons-name"></span></label>
                            <input type='text' name="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} />
                        </div>
                        <div className="form-group m-3">
                            <label><span class="zmdi zmdi-lock material-icons-name"></span></label>
                            <input type='password' name="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} />
                        </div>
                        <div className="btn">
                            <button className="btn btn-primary fs-3" type="Submit">Login</button>
                        </div>
                    </form>
                </div>
        </Container> */}

      <Background />
      <Container>
        {menu ? (
          // bg-dark
          <div className="container offset-md-3">
            {/* <img src={login} alt="login logo" className="image"/> */}
            <div className="login-form shadow-lg mb-5 rounded col-md-6 m-5 p-5 text-center">
              <h2>Login</h2>
              <form
                className="signin-form"
                id="signin-form"
                onSubmit={handleLogin}
              >
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
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <Button
                  title="Login"
                  style={{ backgroundColor: "blue" }}
                  cls="mybtn"
                />

                {flag && (
                  <Alert color="primary" variant="warning">
                    Fill correct Info else keep trying!
                  </Alert>
                )}
              </form>
            </div>
          </div>
        ) : (
          <>
            <Alert color="primary" variant="primary" className="mt-3">
              Login Successfully!
            </Alert>
            <NavLink to="/home">
              <Button
                title="Go to HomePage"
                style={{
                  backgroundColor: "blue",
                  marginLeft: "40%",
                  marginTop: "5%",
                  width: "20%",
                }}
                cls="mybtn"
              />
            </NavLink>
          </>
        )}
      </Container>
    </>
  );
}

export default Login;
