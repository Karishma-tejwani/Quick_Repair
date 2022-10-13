import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Style/Style.css";
import Background from "./Background";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { isLogin } from "../redux/auth/Action.js";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  async function handleSubmit(event) {
    event.preventDefault();

    if (password.length === 0 || email.length === 0) {
      setError(true);
    }

    let item = { email, password };
    let result = await fetch(
      `http://localhost:1234/sysLogin?username=${email}&password=${password}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );

    result = await result.json();
    if (result.key === "admin") {
      navigate(`/Dashboard/${result.admin.id}`);
      dispatch(isLogin());
      console.log("id is ", result.admin.id);
    } else if (result.key === "Customer") {
      navigate("/");
      dispatch(isLogin());
    }
  }

  function handleClick() {
    navigate("/register");
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
          <h3>Login</h3>
          <br></br>

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

          <button type="submit" className="btnReg">
            Login
          </button>

          <p
            onClick={handleClick}
            className="registered text-right fs-5 my-2"
            style={{ color: "black" }}
          >
            Not registered click here!
          </p>
        </form>
      </div>
    </>
  );
}

export default Registration;
