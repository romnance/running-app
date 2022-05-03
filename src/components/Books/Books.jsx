import React, { useState, useEffect } from "react";
import Murakami from "../../img/Murakami.jpeg";
import Jurek from "../../img/Jurek.jpeg";
import "./Books.css";

function Books() {
  const [showElement, setShowElement] = useState(false);
  const showOnScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 2510) {
      setShowElement(true);
    } else {
      setShowElement(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", showOnScroll);

    return () => {
      window.removeEventListener("scroll", showOnScroll);
    };
  }, []);

  return (
    <div className="Books-container" id="Books">
      <div className="Left-column">
        <h3>
          Succeeding in any activity, even running, is much easier after reading books on
          the subject
        </h3>
        <p>
          So far, these two books are my favorite running books. On days of lack of
          motivation, it was enough to read just a couple of pages to stop being lazy.
        </p>
      </div>
      <div className="Right-column">
        <div
          className={
            showElement
              ? "Img-container-first Inline-photo Is-visible"
              : "Img-container-first Inline-photo"
          }
        >
          <img src={Murakami} alt="Murakami's-book" />
        </div>
        <div
          className={
            showElement
              ? "Img-container-second Inline-photo Is-visible"
              : "Img-container-second Inline-photo"
          }
        >
          <img src={Jurek} alt="Jurek's-book" />
        </div>
      </div>
    </div>
  );
}

export default Books;
