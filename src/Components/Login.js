import React, { useState } from "react";
import Button from "./Button";
import { NavLink, useNavigate } from "react-router-dom";
import { Alert, Container } from "react-bootstrap";
import Background from "./Background";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [menu, setMenu] = useState(true);

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    let pass = localStorage.getItem("Password").replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");

    if (!email || !password) {
      setFlag(true);
    } else if (password !== pass || email !== mail) {
      setFlag(true);
      navigate("/");
    } else {
      setMenu(!menu);
      setFlag(false);
    }

    if (!email || !password) {
      setFlag(true);
    } else if (password !== "123" || email !== "zoyamemon767@gmail.com") {
      setFlag(true);
      navigate("/Dashboard");
    } else {
      setMenu(!menu);
      setFlag(false);
    }
  }

  return (
    <>
      <Background />
      <Container>
        {menu ? (
          // bg-dark
          <div className="container offset-md-3">
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
