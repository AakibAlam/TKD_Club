import Home from "./pages/home";
import Events from "./pages/events";
import Gallery from "./pages/gallery";
import Team from "./pages/team";
import Alumni from "./pages/alumni";
import NavBar from "./components/nav";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
