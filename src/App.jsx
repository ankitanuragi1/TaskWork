
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";

function LandingPage({ darkMode, onToggleTheme }) {
  return (
    <>
      <Navbar
        darkMode={darkMode}
        onToggleTheme={onToggleTheme}
      />

      <main>
        <Hero />
        <Features />
        <About />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("taskWork-theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);

    localStorage.setItem(
      "taskWork-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              darkMode={darkMode}
              onToggleTheme={toggleTheme}
            />
          }
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
