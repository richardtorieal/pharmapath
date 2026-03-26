import { useState, useEffect } from "react";
import { STYLES } from "./styles.js";
import { DRUGS } from "./constants.js";
import { NavBar } from "./components/NavBar.jsx";
import { HomeScreen } from "./screens/HomeScreen.jsx";
import { DrugScreen } from "./screens/DrugScreen.jsx";
import { DesignerScreen } from "./screens/DesignerScreen.jsx";

export function App() {
  const [view, setView] = useState("home");
  const [selectedDrug, setSelectedDrug] = useState(null);

  // Inject global styles
  useEffect(() => {
    if (!document.querySelector("#pp-styles")) {
      const style = document.createElement("style");
      style.id = "pp-styles";
      style.textContent = STYLES;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div>
      <NavBar view={view} onHome={() => setView("home")} onDesigner={() => setView("designer")} />
      {view === "home" && <HomeScreen onSelect={(drug) => {
        setSelectedDrug(drug);
        setView("drug");
      }} onDesigner={() => setView("designer")} />}
      {view === "drug" && <DrugScreen drug={selectedDrug} onBack={() => setView("home")} />}
      {view === "designer" && <DesignerScreen />}
    </div>
  );
}