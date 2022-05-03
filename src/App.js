import React, { useState } from "react";
import "./App.css";
import MarqueeText from "./components/MarqueeText";
import Header from "./components/Header/Header";
import ImageBlock from "./components/ImageBlock";
import Gear from "./components/Gear/Gear";
import Books from "./components/Books/Books";
import Inspiration from "./components/Inspiration/Inspiration";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <MarqueeText />
      <Header />
      <section className="Content">
        <div className="Content-view">
          <ImageBlock />
        </div>
        <Gear />
        <Books />
        <Inspiration />
      </section>
      <Footer />
    </div>
  );
}

export default App;
