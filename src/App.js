import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


const App = () => {
  const [theme, setTheme] = useState("light");

  //theme setting
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  //toggle theme
  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
        <NavBar handleThemeToggle={handleThemeToggle} theme={theme} />
      <main>
        <Outlet />
      </main>
        <Footer />
    </div>
  );
};

export default App;
