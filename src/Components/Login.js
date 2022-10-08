import React, { useState } from "react";
import { Container } from "react-bootstrap";
import useLocalState from "./useLocalState";
import Background from "./Background";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jwt, setJwt] = useLocalState("", "jwt");

  const navigate = useNavigate();

  function sendLoginRequest() {
    const reqBody = {
      email: email,
      password: password,
    };
    fetch("http://localhost:1234/loginCustomer", {
      headers: "POST",
      body: JSON.stringify(reqBody),
    })
      .then((res) => {
        if (res.status === 200) return Promise.all([res.json(), res.headers]);
        else return Promise.reject("invalid login attempt");
      })
      .then(([body, headers]) => {
        setJwt(headers.get("authorization"));
        navigate("/home");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <>
      <Background />
      <Container>
        <div className="container offset-md-3">
          <div className="login-form shadow-lg mb-5 rounded col-md-6 m-5 p-5 text-center">
            <h2>Login</h2>
            <form className="signin-form" id="signin-form">
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
                  value={email}
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
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <button
                id="submit"
                type="button"
                onClick={() => sendLoginRequest()}
              >
                Login
              </button>

              {/* <Button
                title="Login"
                style={{ backgroundColor: "blue" }}
                cls="mybtn"
                onClick={() => sendLoginRequest()}
              /> */}
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Login;
