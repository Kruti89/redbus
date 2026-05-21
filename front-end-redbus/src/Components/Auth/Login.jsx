import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation, Link } from "react-router-dom";
import { loginSuccess } from "../../Redux/auth/actions";
import Styles from "./Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Please fill in both email and password.");
      return;
    }
    const profileObj = {
      name: formData.email.split("@")[0],
      email: formData.email,
      googleId: `manual-${Date.now()}`,
      imageUrl:
        "https://images.unsplash.com/photo-1544005313-94dd9538aa97?auto=format&fit=crop&w=200&q=80",
    };
    dispatch(loginSuccess({ profileObj }));
    const redirectTo = location.state?.redirectTo || "/my-profile";
    history.push(redirectTo);
  };

  return (
    <div className={Styles.authPage}>
      <div className={Styles.card}>
        <div className={Styles.topSection}>
          <h2>Welcome Back</h2>
          <p>Login to access your bookings, payments and personalised offers.</p>
        </div>
        <form className={Styles.form} onSubmit={handleSubmit}>
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
              placeholder="Enter your password"
            />
          </label>
          <button type="submit" className={Styles.primaryBtn}>
            Login
          </button>
        </form>
        <div className={Styles.bottomText}>
          <span>New to redBus?</span>
          <Link to="/register">Create an account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
