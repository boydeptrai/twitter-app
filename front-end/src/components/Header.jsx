import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/"> twitter</Link>
       </h1>
      <nav>
        <ul className="main-nav">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <span className="user-name">Hello, Tuan Tran</span>
          </li>
          <li>
            <a href="#">Sign out</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
