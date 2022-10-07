import React, { useState } from "react";
import { Container } from "react-bootstrap";
import useLocalState from "./useLocalState";
import Background from "./Background";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jwt, setJwt] = useLocalState("", "jwt");

  function sendLoginRequest() {
    const reqBody = {
      email: "karishma@gmail.com",
      password: "123",
    };
    fetch("http://localhost:1234/loginCustomer", {
      headers: "POST",
      body: JSON.stringify(reqBody),
    })
      .then((res) => Promise.all([res.json(), res.headers]))
      .then(([body, headers]) => {
        setJwt(headers.get("authorization"));
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
