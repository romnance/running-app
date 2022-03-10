import "./App.css";
import MarqueeText from "./components/MarqueeText";
import Header from "./components/Header";
import ImageBlock from "./components/ImageBlock";
import Gear from "./components/Gear";
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
      </section>
      <Footer />
    </div>
  );
}

export default App;
