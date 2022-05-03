import React, { useState, useEffect } from "react";
import "./Header.css";
import Navbar from "./Navbar";

function Header() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 2410) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);

    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <header className={colorChange ? "Header Color-change" : "Header"}>
      <div className="Header-main">
        <div className="Box-left">
          <h1 className="Header-logo">RUN</h1>
        </div>
        <div className="Box-right Nav-list">
          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default Header;
