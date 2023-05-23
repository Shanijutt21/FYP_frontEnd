import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./General.css";

const Login = () => {
  const { UserLogin } = useAuth();
  const [err, setError] = useState("");
  const [backError, setBackError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const UserHandler = (e) => {
    const { name, value } = e.target;
    setUser((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (email === "" || password === "") {
      setInterval(() => {
        setError("");
      }, 5000);
      return setError("Fill all the fields");
    }
    try {
      const accountType = await UserLogin(email, password);
      if (accountType === "seller") {
        navigate("/seller");
      } else if (accountType === "buyer") {
        navigate("/buyer");
      }
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setInterval(() => {
          setError("");
        }, 5000);
        return setError("User not found");
      } else if (error.code === "auth/wrong-password") {
        setInterval(() => {
          setError("");
        }, 5000);
        setError("Wrong password");
      } else {
        setInterval(() => {
          setError("");
        }, 5000);
        return setError(`${error.message}`);
      }
    }
  };
  
  
  return (
    <div className="box">
      {err ? (
        err && <p className="error">{err}</p>
      ) : (
        backError && <p className="error">{backError}</p>
      )}
      <form onSubmit={SubmitHandler} className="form">
        <h2>Login Form</h2>
        <div className="input-field">
          <input
            type="email"
            placeholder="Email"
            value={user.email}
            name="email"
            onChange={UserHandler}
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            name="password"
            onChange={UserHandler}
          />
        </div>
        <div className="input-field">
          <input type="submit" value="login" />
        </div>
        <p className="forget">
          Don't have an account?{" "}
          <Link to={"signup"} className="link">
            {"signup"}
          </Link>
        </p>
        <p className="forget">
          Forget Password?{" "}
          <Link className="link" to={"forget"}>
            Forget Password
          </Link>
        </p>
      </form>
    </div>
  );
};

// const Login = () => {
//   // const { UserLogin } = useAuth();
//   return (
//     <div>
//       <p>Hello</p>
//     </div>
//   );
// };


export default Login;
