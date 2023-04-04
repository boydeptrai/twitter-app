import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Auth.css";
import Header from "./Header";
import AppContext from "./AppContext";
import axios from "axios";
export default function Login() {
  const { dispatch } = useContext(AppContext);
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const onChangeHandle = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const onSubmitHandle = async (e) => {
    try {
      e.preventDefault();
      const option = {
        method: "post",
        url: "/api/v1/auth/login",
        data: userInput,
      };
      const response = await axios(option);
      const { token, userName } = response.data.data;
      localStorage.setItem("token", token);
      dispatch({ type: "CURRENT_USER", payload: { userName } });
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };
  return (
    <div className="container">
      <Header />
      <section className="auth-container">
        <form className="auth-form" onSubmit={onChangeHandle}>
          <h2>Enter Your Account</h2>
          {errorMessage && (
            <div className="error-message">Error: {errorMessage}</div>
          )}
          <input
            type="email"
            name="email"
            id=""
            required
            placeholder="Email"
            value={userInput.email}
            onChange= {onChangeHandle}
          />
          <input
            type="password"
            name="password"
            id=""
            required
            value ={userInput.password}
            onChange =  {onChangeHandle}
            placeholder="Password"
          />
        </form>
        <button className="btn">Login</button>
      </section>
    </div>
  );
}
