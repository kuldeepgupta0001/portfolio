import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Work from "./components/Work";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <Experience />
      <Services />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
