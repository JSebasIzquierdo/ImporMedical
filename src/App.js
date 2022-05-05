import Menu from "./Views/Menu";
import Section1 from "./Views/Section1";
import Section2 from "./Views/Section2";
import Section3 from "./Views/Section3";
import Section4 from "./Views/Section4";
import Section5 from "./Views/Section5";
import Section6 from "./Views/Section6";
import Section7 from "./Views/Section7";
import Footer from "./Views/Footer";
import "./App.css";

function App() {
  return (
    <div className="backgroundColor">
      <header><Menu/></header>
      <div>
        <Section1 />
      </div>
      <div className="sectionsPadding">
        <Section2 />
        <Section3 />
      </div>
      <div>
        <Section4 />
      </div>
      <div className="sectionsPadding">
        <Section5 />
        <Section6 />
        <Section7 />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
