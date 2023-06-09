import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [userValues, setUserValues] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    check: false,
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setUserValues({ ...userValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = Validation(userValues);
    if (Object.keys(errors).length === 0) {
      localStorage.setItem("userValues", JSON.stringify(userValues));
      navigate("/category");
    } else {
      setError(errors);
    }
  };

  const Validation = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "*name is required";
    }
    if (!values.username) {
      errors.username = "*username is required";
    }
    if (!values.email) {
      errors.email = "*email is required";
    }
    if (!values.mobile) {
      errors.mobile = "*mobile is required";
    }
    if (!values.check) {
      errors.check = "*please accept the terms and conditions";
    }
    return errors;
  };

  return (
    <>
      <div className="signup">
        <h1 className="form-title">Super App</h1>
        <h2 className="heading2">Create your new account</h2>
        <h3 className="heading3">
          Email &nbsp;<span>|</span>&nbsp; Google
        </h3>
        <form className="form-inputs">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={userValues.name}
            placeholder="Name"
            className="user-input"
          />
          <p>{error.name}</p>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={userValues.username}
            placeholder="UserName"
            className="user-input"
          />
          <p>{error.username}</p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="user-input"
            onChange={handleChange}
            value={userValues.email}
          />
          <p>{error.email}</p>
          <input
            type="number"
            name="mobile"
            placeholder="Mobile"
            className="user-input"
            onChange={handleChange}
            value={userValues.mobile}
          />
          <p>{error.mobile}</p>
          <input
            type="checkbox"
            className="agreement"
            name="check"
            value="tick"
            id="agreement_checkbox"
            onChange={(e) =>
              setUserValues({
                ...userValues,
                [e.target.name]: e.target.checked,
              })
            }
          />
          <label htmlFor="agreement_checkbox">
            {" "}
            Share my registration data with Superapp
          </label>
          <p>{error.check}</p>
          <button className="signup-btn" onClick={handleSubmit}>
            SIGN UP
          </button>
        </form>
        <div className="terms">
          By clicking on Sign up. you agree to Superapp &nbsp;
          <span style={{ color: "#72DB73" }}>Terms and Conditions of Use</span>
          <br />
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp{" "}
          <span style={{ color: "#72DB73" }}>Privacy Policy</span>
        </div>
      </div>
    </>
  );
};

export default Home;
