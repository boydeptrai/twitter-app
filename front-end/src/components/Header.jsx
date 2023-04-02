import React from 'react';
import '../css/Header.css'

export default function Header() {
  return (
    <header className="header">
    <h1 className="logo">twitter</h1>
    <nav>
      <ul className="main-nav">
        <li><a href="#">Login</a></li>
        <li><a href="#">Register</a></li>
        <li><span className="user-name">Hello, Tuan Tran</span></li>
        <li><a href="#">Sign out</a></li>
      </ul>
    </nav>
  </header>
  )
}
