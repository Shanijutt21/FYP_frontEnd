import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/UserAuthContext";
import { Link } from "react-router-dom";
import "./General.css";

const Signup = () => {
  // const navigate = useNavigate();
  const { error, SignUp } = useAuth();
  const [err, setError] = useState("");
  const [backError, setBackError] = useState("");
  const [user, setUser] = useState({
    FullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "",
  });

  useEffect(() => {
    console.log("I am in");
    if (error) {
      setInterval(() => {
        setBackError("");
      }, 5000);
      setBackError(error);
    }
  }, [error]);

  const userHandler = (e) => {
    const { name, value } = e.target;
    console.log(name + "shani" + value);
    setUser((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, FullName, accountType } = user;
    if (
      password === "" ||
      confirmPassword === "" ||
      email === "" ||
      FullName === "" ||
      accountType === ""
    ) {
      setInterval(() => {
        setError("");
      }, 5000);
      return setError("Please fill all the fields");
    } else if (password !== confirmPassword) {
      setInterval(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    } else if (password.length < 8 || confirmPassword.length < 8) {
      setInterval(() => {
        setError("");
      }, 5000);
      return setError("Password must be at least 8 characters long");
    } else {
      SignUp(email, password, FullName, accountType);
      setUser({
        FullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        accountType: "",
      });
    }
  };

  return (
    <div className="box">
      {err
        ? err && <p className="error">{err}</p>
        : backError && <p className="error">{backError}</p>}
      <form onSubmit={submitHandler} className="form">
        <h2>Registration Form</h2>
        <div className="input-field">
          <input
            type="text"
            placeholder="UserName"
            value={user.FullName}
            name="FullName"
            onChange={userHandler}
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Email"
            value={user.email}
            name="email"
            onChange={userHandler}
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            name="password"
            onChange={userHandler}
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="ConfirmPassword"
            value={user.confirmPassword}
            name="confirmPassword"
            onChange={userHandler}
          />
        </div>
        <div className="input-field">
          <label htmlFor="accountType">Account Type:</label>
          <select
            name="accountType"
            id="accountType"
            value={user.accountType}
            onChange={userHandler}
          >
            <option value="">Select Account Type</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </div>
        <div className="input-field">
          <input type="submit" />
        </div>
        <p className="forget">
          Already have an account?{" "}
          <Link to={"/login"} className="link">
            {"login"}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;