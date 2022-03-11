import "./App.css";
import DotRing from "./components/DotRing/DotRing.js";
import MarqueeText from "./components/MarqueeText";
import Header from "./components/Header";
import ImageBlock from "./components/ImageBlock";
import Gear from "./components/Gear";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <DotRing />
      <MarqueeText />
      <Header
      />
      <section className="Content">
        <div className="Content-view">
          <ImageBlock />
        </div>
        <Gear />
      </section>
      <Footer />
    </div>
  );
}

export default App;
