import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../css/Signup.css";
import Footer from "../Components/Footer";
const Signup = () => {
  const navigate = useNavigate();

  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  function setdatas(e) {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function handelsignup(e) {
    e.preventDefault();

    
    if (
      data.name === "" ||
      data.email === "" ||
      data.password === ""
    ) {
      alert("Please fill all fields");
      return;
    }

   
    const existingUser = localStorage.getItem("user");

    if (existingUser && existingUser.email === data.email) {
      alert("You already have an account. Please login.");
      navigate("/login");
      return;
    }

    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful!");

    navigate("/login");
  }

  return (
    <>                                      
    <div className="signup-page">

      <div className="signup-card">

        <div className="signup-header">
          <h1>Create Account</h1>
          <p>Create your account to start shopping</p>
        </div>

        <form onSubmit={handelsignup}>

          <label>Name</label>

          <input
            className="signup-input"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={data.name}
            onChange={setdatas}
          />

          <label>Email</label>

          <input
            className="signup-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={setdatas}
          />

          <label>Password</label>

          <input
            className="signup-input"
            type="password"
            name="password"
            placeholder="Create a password"
            value={data.password}
            onChange={setdatas}
          />

          <button className="signup-btn" type="submit">
            Create Account
          </button>

        </form>

        <p className="login-text">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>
      
    </div>
      <Footer/>
     </>
  );
};

export default Signup;