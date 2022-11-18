import axios from "axios";
import React, { useState } from "react";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logMe = () => {
    axios
      .post("http://localhost:4500/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("id", res.data._id);
      })

      .catch((err) => console.log(err));

    setEmail("");
    setPassword("");
  };

  return (
    <main className="container vh-100 d-flex">
      <section className="col-md-6">
        <img
          style={{
            width: "100%",
            objectFit: "cover",
            height: "100%",
          }}
          className="image-section"
          src="https://globalventuring.com//content/uploads/2022/10/Twitter-horizontal.jpeg"
          alt="error"
        />
      </section>
      <section className="d-flex flex-column col-md-6 py-5  justify-content-center">
        <div>
          <div className="py-3">
            <BsTwitter
              className="text-primary  "
              style={{ width: "400px", height: "50px" }}
            />
          </div>
          <h1 className="text-white">
            <b>Login here</b>
          </h1>
        </div>
        <div className="py-1">
          <input
            value={email}
            className="register-input register-dark rounded-pill  text-white"
            placeholder="  Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="py-1">
          <input
            value={password}
            placeholder="  Password"
            className="register-input register-dark rounded-pill  text-white "
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="py-1">
          <button
            style={{ width: "500px", height: "50px" }}
            className="btn btn-primary rounded-pill py-1"
            onClick={logMe}
          >
            <b>Login</b>
          </button>
        </div>
        <div className="my-3 d-flex  justify-content-center gap-2">
          <h6 className="text-secondary">Don't have an account?</h6>
          <Link to="/register" className="text-primary text-decoration-none">
            Sign up
          </Link>
        </div>
      </section>
    </main>
  );
}
export default Login;
