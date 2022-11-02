import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import bgVid from "../src/assets/Picture/BackgroundVid.webm";
function App() {
  return (
    <div className="App">
      <NavBar />
      <video
        src={bgVid}
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          zIndex: -1,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
