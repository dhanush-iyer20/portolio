/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Education from "./Components/Education";
import Certs from "./Components/Certs";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify center">
        <Navbar />
        <Intro />
        <Experience />
        <Education />
        <Skills />
        <Certs />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
