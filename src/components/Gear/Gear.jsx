import React from "react";
import Brooks from "../../img/Brooks.jpg";
import Asics from "../../img/Asics.jpeg";
import AppleWatch from "../../img/APPLE-Watch.png";
import Jabra from "../../img/jabelite.jpeg";
import Gloves from "../../img/Glove-Black.jpeg";

import "./Gear.css";

function Gear() {
  return (
    <>
      <div className="Gear-container" id="Gear">
        <h1 className="First-header Margin-top">
          The only gear you really need is running shoes (and smile)
        </h1>
        <iframe
          src="https://giphy.com/embed/yrPFr9VpJLRiFifBbC"
          width={480}
          height={270}
          frameBorder={0}
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <div className="Gear-container">
        <h2 className="Second-header Margin-top Margin-left">
          But for long, comfortable runs, you'll need a little more...
        </h2>
        <p className="Grey-text Margin-left Margin-top-xs">
          Get started running with my favourite running finds
        </p>
        <div className="Gear-grid-container Margin-top-xs">
          <div className="Grid-cell One">
            <div className="Left-column">
              <h4 className="Deep-blue">01</h4>
            </div>
            <div className="Right-column">
              <div>
                <h4>Brooks Ghost 13 GTX</h4>
                <p>These shoes will keep you moving in winter</p>
              </div>
              <div className="Img-container">
                <img src={Brooks} alt="Brooks-Sneakers" className="Margins-v" />
              </div>
            </div>
          </div>
          <div className="Grid-cell Two">
            <div className="Left-column">
              <h4 className="Red">02</h4>
            </div>
            <div className="Right-column">
              <div>
                <h4>Asics Gel Kayano 25 Lite Show</h4>
                <p>I ran my first half marathon in these shoes</p>
              </div>
              <div className="Img-container">
                <img src={Asics} alt="Asics-Sneakers" />
              </div>
            </div>
          </div>
          <div className="Grid-cell Three">
            <div className="Left-column">
              <h4 className="Blue">03</h4>
            </div>
            <div className="Right-column">
              <div>
                <h4>APPLE Watch NIKE SE GPS</h4>
                <p>Watches make it easy to track your heart rate and record workouts</p>
              </div>
              <div className="Img-container">
                <img src={AppleWatch} alt="Apple-watch" className="Margins-v" />
              </div>
            </div>
          </div>
          <div className="Grid-cell Four">
            <div className="Left-column">
              <h4 className="Green">04</h4>
            </div>
            <div className="Right-column">
              <div>
                <h4>Jabra Elite 85t Bluetooth Earbuds</h4>
                <p>They sound great and don't fall out of your ears</p>
              </div>
              <div className="Img-container">
                <img src={Jabra} alt="Apple-watch" />
              </div>
            </div>
          </div>
          <div className="Grid-cell Five">
            <div className="Left-column">
              <h4 className="Violet">05</h4>
            </div>
            <div className="Right-column">
              <div>
                <h4>Arc'teryx Venta Glove</h4>
                <p>Windproof, warm, breathable gloves </p>
              </div>
              <div className="Img-container">
                <img src={Gloves} alt="Apple-watch" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gear;
