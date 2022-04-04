import React from "react";
import Murakami from "../../img/Murakami.jpeg";
import Jurek from "../../img/Jurek.jpeg";
import "./Books.css";

function Books() {
  return (
    <div className="Books-container">
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
        <div className="Img-container-first">
          <img src={Murakami} alt="Murakami's-book" className="Margins-v" />
        </div>
        <div className="Img-container-second">
          <img src={Jurek} alt="Jurek's-book" className="Margins-v" />
        </div>
      </div>
    </div>
  );
}

export default Books;
