import React, { useState, useEffect } from "react";
import Murakami from "../../img/Murakami.jpeg";
import Jurek from "../../img/Jurek.jpeg";
import "./Books.css";

function Books() {
  const [showElement, setShowElement] = useState(false);
  const showOnScroll = () => {
    if (window.scrollY >= 2250) {
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
        <h3>Must read</h3>
        <p>
          If you are a runner, these books are very inspiring. Haruki Murakami shares his
          story of how running helped him become more creative in what he loves.
        </p>
        <p>
          In Eat and Run, Scott Jurek tells the story of his life as a professional
          athlete with a vegan diet. Changes in nutrition played a very important role for
          him and he improved his athletic performance. At the end of each chapter, the
          author shares the recipe.
        </p>
        <p>Sometimes running isn't just about sports and physical activity.</p>
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
