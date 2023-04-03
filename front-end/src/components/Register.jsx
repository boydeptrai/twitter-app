import React from "react";
import '../css/Auth.css';
import Header from "./Header";
export default function Register() {
  return (
    <div className="container">
      <Header />
    <section className="auth-container">
      <form className="auth-form">
        <h2>Register New Account</h2>
        <div className="error-message">Error: Your Password is not correct</div>
        <input type="text" name="name" id="" placeholder="Name" />
        <input type="email" name="email" id="" required placeholder="Email" />
        <input
          type="password"
          name="password"
          id=""
          required
          placeholder="Password"
        />
      </form>
      <button className="btn" type="submit">
        Register
      </button>
    </section>
    </div>
  );
}
