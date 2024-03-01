import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Footer from "./components/Footer";
import Clenstvo from "./Stranky/Clenstvo";
import ScrollToTop from "./components/ScrollToTop";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import headerImage from "./images/pic.png";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/clenstvo" element={<Clenstvo />} />
          <Route
            path="/"
            element={
              <div>
                <Header
                  title={"Preskúmajte všetky možnosti Fitnoxu"}
                  description={"Užite si špeciálne tréningy bez limitov"}
                  imageUrl={headerImage}
                />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
