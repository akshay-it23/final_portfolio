import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";
import Education from "./components/sections/eduction";
import { DSAProgress } from "./components/sections/dsa";
import { MouseFollowBalls } from "./components/MouseFollowBalls";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
          } bg-black text-gray-100`}
      >
        {/* Mouse-following grid balls background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 5 }}>
          <MouseFollowBalls />
        </div>

        {/* Main content with higher z-index */}
        <div className="relative" style={{ zIndex: 10 }}>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Education />
          <DSAProgress />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
