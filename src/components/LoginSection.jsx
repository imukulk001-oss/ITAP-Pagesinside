import React, { useState } from "react";
import "./LoginSection.css";

const LoginSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log("Login attempt:", { email, password });
    alert("Regular login functionality would run here.\nEmail: " + email);
  };

  const handleForgotPassword = () => {
    alert("Password reset functionality would be implemented here.");
  };

  // Redirect user directly to the Parichay portal
  const handleParichayRedirect = () => {
    window.open("https://parichay.nic.in/", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="login-section-scr" className="login-section">
      <div className="login-section-content">
        {/* ==== Information Card ==== */}
        <div className="info-card">
          <h2 className="info-card-title">
            Welcome&nbsp;to&nbsp;the&nbsp;Submission&nbsp;Interface&nbsp;for&nbsp;
            6<sup>th</sup>&nbsp;Tranche&nbsp;FTT‑FTC&nbsp;Projects&nbsp;of&nbsp;CSIR
          </h2>

          <div className="info-card-content">
            <p>
              • The portal can only be accessed from Labs' IP address (within
              the lab premises only).<br />
              • Username: Your NIC email<br />
              • Password: Csir@123 (Default) (please change the password on the first login for safety reasons).<br />
              • If a user needs to reset the password, please send a request to{" "}
              <strong>csir.helpeks@csir.res.in</strong>.<br />
              • For help regarding portal functionality, contact{" "}
              <strong>011‑24307999</strong> (during office hours).
            </p>
          </div>
        </div>

        {/* ==== Login Form ==== */}
        <div className="login-form-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2 className="login-form-title">Login to Your Account</h2>

            <div className="form-fields">
              {/* ---- Email ---- */}
              <div className="form-field">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`form-input ${errors.email ? "error" : ""}`}
                  placeholder="CSIR Email ID"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              {/* ---- Password ---- */}
              <div className="form-field">
                <div className="form-label-row">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <button
                    type="button"
                    className="forgot-password-link"
                    onClick={handleForgotPassword}
                  >
                    Forgot？
                  </button>
                </div>

                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className={`form-input ${
                      errors.password ? "error" : ""
                    }`}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password)
                        setErrors({ ...errors, password: undefined });
                    }}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                        stroke="#98A2B3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                        stroke="#98A2B3"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </button>
                </div>
                {errors.password && (
                  <span className="error-message">{errors.password}</span>
                )}
              </div>
            </div>

            {/* ---- Buttons ---- */}
            <div className="login-button-group">
              <button type="submit" className="login-button">
                Login
              </button>

              <button
                type="button"
                className="login-button parichay-button"
                onClick={handleParichayRedirect}
              >
                Continue with Parichay
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;