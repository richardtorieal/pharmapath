import { useState, useEffect } from "react";
import { STYLES } from "./styles.js";
import { DRUGS } from "./constants.js";
import { NavBar } from "./components/NavBar.jsx";
import { HomeScreen } from "./screens/HomeScreen.jsx";
import { DrugScreen } from "./screens/DrugScreen.jsx";
import { DesignerScreen } from "./screens/DesignerScreen.jsx";
import { applyTheme, getSavedTheme, THEMES } from "./theme.js";

export function App() {
  const [view, setView] = useState("home");
  const [selectedDrug, setSelectedDrug] = useState(null);
  const [theme, setTheme] = useState(getSavedTheme());

  // Apply theme on load and when changed
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Inject global styles
  useEffect(() => {
    if (!document.querySelector("#pp-styles")) {
      const style = document.createElement("style");
      style.id = "pp-styles";
      style.textContent = STYLES;
      document.head.appendChild(style);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <NavBar view={view} onHome={() => setView("home")} onDesigner={() => setView("designer")} theme={theme} onThemeToggle={toggleTheme} />
      {view === "home" && <HomeScreen onSelect={(drug) => {
        setSelectedDrug(drug);
        setView("drug");
      }} onDesigner={() => setView("designer")} />}
      {view === "drug" && <DrugScreen drug={selectedDrug} onBack={() => setView("home")} />}
      {view === "designer" && <DesignerScreen />}
    </div>
  );
}