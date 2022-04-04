import React, { useEffect } from "react";

function Navbar() {
  const scrollTo = (ele) => {
    var scrollDiv = document.getElementById(ele).offsetTop;
    scrollDiv.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleScroll = () => {};

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="Navbar">
      <ul className="Row">
        <li
          onClick={() => {
            scrollTo("Gear");
          }}
        >
          <a className="Header-nav-label" href="#Gear">
            Gear
          </a>
        </li>
        <li>
          <a
            className="Header-nav-label"
            href="#Books"
            onClick={() => {
              scrollTo("Books");
            }}
          >
            Books
          </a>
        </li>
        <li>
          <a
            className="Header-nav-label"
            href="#Inspiration"
            onClick={() => {
              scrollTo("Inspiration");
            }}
          >
            Inspo
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
