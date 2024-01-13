import React from "react";
import "./Navbar.css";
import "boxicons";

export default function Navbar() {
  window.onscroll = () => {
    let header = document.querySelectorAll(".header");
    header.classList.toggle("sticky", window.scrollY > 100);
  };
  return (
    <>
      <div className="header">
        <a href="/" className="logo">
          Portfolio.
        </a>

        <div className="navbar">
          <a href="/" className="active">
            Home
          </a>
          <a href="/">About</a>
          <a href="/">Service</a>
          <a href="/">Portfolio</a>
          <a href="/">Contact</a>
        </div>
        <box-icon name="moon" type="solid" color="#fdfdfd"></box-icon>
      </div>
    </>
  );
}
