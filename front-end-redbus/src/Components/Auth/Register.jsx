import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Styles from "./Register.module.css";

const Register = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill all required fields.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    alert("Registration successful. Please login to continue.");
    history.push("/login");
  };

  return (
    <div className={Styles.authPage}>
      <div className={Styles.card}>
        <div className={Styles.topSection}>
          <h2>Create Your Account</h2>
          <p>Register to manage bookings, save trips and enjoy personalised offers.</p>
        </div>
        <form className={Styles.form} onSubmit={handleSubmit}>
          <label>
            Full Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
            />
          </label>
          <label>
            Confirm Password
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
          </label>
          <button type="submit" className={Styles.primaryBtn}>
            Register
          </button>
        </form>
        <div className={Styles.bottomText}>
          <span>Already have an account?</span>
          <Link to="/login">Login here</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
