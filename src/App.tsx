import "./App.css";
import Home from "./pages/home";
import NavBar from "./components/navbar/nav";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Home />
      <Footer></Footer>
    </>
  );
}

export default App;
