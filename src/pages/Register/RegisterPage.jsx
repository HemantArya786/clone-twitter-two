import React, { useState } from "react";
import axios from "axios";
import "./RegisterPage.css";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const subMit = () => {
    axios
      .post(`http://localhost:4500/user`, {
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        password: password,
        email: email,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setEmail("");
    setFirstname("");
    setLastname("");
    setPassword("");
    setPhone("");
  };

  return (
    <main className="d-flex  container register-dark justify-content-center vh-100 align-content-center flex-column ">
      <section className=" w-50 container  my-">
        <div className="py-3">
          <BsTwitter
            className="text-primary  "
            style={{ width: "400px", height: "50px" }}
          />
        </div>
        <div>
          <h2>
            <b className="text-white">Create your account</b>
          </h2>
        </div>
      </section>

      <section className="container  my-3">
        <div className="d-flex gap-3 justify-content-center  py-1">
          <div className="">
            <input
              value={firstname}
              placeholder="  firstName"
              className="register-name-input register-dark rounded-pill  text-white"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="">
            <input
              value={lastname}
              placeholder="  lastName"
              onChange={(e) => setLastname(e.target.value)}
              className="register-name-input register-input register-dark rounded-pill text-white"
            />
          </div>
        </div>
        <div className="py-2">
          <input
            value={phone}
            placeholder="  phone"
            className="register-input  rounded-pill  register-dark text-white "
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="py-2">
          <input
            value={email}
            placeholder="  Email"
            className="register-input register-dark rounded-pill text-white "
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="py-2">
          <input
            value={password}
            placeholder="  Password"
            type="password"
            className="register-input register-dark rounded-pill  text-white"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="py-2">
          <button
            style={{ width: "490px", height: "45px" }}
            className="btn btn-primary rounded-pill px-5 py-1"
            onClick={subMit}
          >
            <b>Submit</b>
          </button>
        </div>
        <div className="my-3 d-flex  justify-content-center gap-2">
          <h6 className="text-secondary">Have an account already?</h6>
          <Link to="/login" className="text-primary text-decoration-none">
            Sign in
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Register;
