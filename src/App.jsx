import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav.jsx";
import Hero from "./hero.jsx";
import About from "./about.jsx";
import Gallery from "./gallery.jsx";
import Events from "./events.jsx";
import Footer from "./footer.jsx";
import Team from "./team.jsx"; // separate page

function HomePage() {
  return (
    <>
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="events"><Events /></section>
      <section id="gallery"><Gallery /></section>
      
    </>
  );
}

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
