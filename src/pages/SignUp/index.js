import React, { useState } from "react";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { postSignup } from "../../redux/actions/UserAction";

export default function SignUp(props) {
  const [role, setRole] = useState(null);
  const [signupData, setSignupData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleSignUp = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const submitTeacher = () => {
    dispatch(postSignup(role, signupData));
  };

  return (
    <Jumbotron className="jumbotron">
      <div className="signup-page">
      <div className="signup">
        <div>
          <div className="form-select">
            <div className="signup-title">Start Learning!</div>
          </div>
          <p className="signup-account">Create your account</p>
        </div>
        <form className="form">
          <div>
            Name<span>*</span>
          </div>
          <input
            type="text"
            placeholder="John Doe"
            name="fullname"
            onChange={(e) => handleSignUp(e)}
          />
          <div>
            Email<span>*</span>
          </div>
          <input
            type="email"
            placeholder="john@gmail.com"
            name="email"
            onChange={(e) => handleSignUp(e)}
          />
          <div>
            Password<span>*</span>
          </div>
          <input
            type="password"
            placeholder="******"
            name="password"
            onChange={(e) => handleSignUp(e)}
          />
        </form>
        <div className="form-select">
          <select
            name="status"
            onChange={(event) => setRole(event.target.value)}
          >
            <option value={null} className="option">
              Select Role
            </option>
            <option value={1}>Teacher</option>
            <option value={0}>Student</option>
          </select>
        </div>
        <br />
        <div className="btn">
          <button
            className="btn-signup"
            onClick={submitTeacher}
            disabled={
              !role ||
              !signupData.fullname ||
              !signupData.email ||
              !signupData.password
            }
          >
            Sign up
          </button>
        </div>
        <div className="signup-login">
          Already have account?{" "}
          <Link to="/login">
            <span>Login</span>
          </Link>
        </div>
      </div>
      </div>
    </Jumbotron>
  );
}
