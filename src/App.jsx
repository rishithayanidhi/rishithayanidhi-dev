import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Education from "./pages/education";
import Projects from "./pages/project";
import Contact from "./pages/contact";
import Experience from "./pages/experience";
import "./App.css"; // Import your CSS file

function App() {
  return (
    <div className="bg-[#0f172a] min-h-screen w-full flex flex-col items-center justify-center overflow-x-hidden overflow-y-hidden">
      <Analytics />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </div>
  );
}

export default App;
