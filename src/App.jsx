import { useState, useEffect } from "react";
import { STYLES } from "./styles.js";
import { NavBar } from "./components/NavBar.jsx";
import { HomeScreen } from "./screens/HomeScreen.jsx";
import { DrugScreen } from "./screens/DrugScreen.jsx";
import { DesignerScreen } from "./screens/DesignerScreen.jsx";

export function App() {
  const [view, setView] = useState("home");
  const [selectedDrugId, setSelectedDrugId] = useState(null);

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
      <NavBar view={view} onViewChange={setView} />
      {view === "home" && <HomeScreen onSelectDrug={(id) => {
        setSelectedDrugId(id);
        setView("drug");
      }} />}
      {view === "drug" && <DrugScreen drugId={selectedDrugId} />}
      {view === "designer" && <DesignerScreen />}
    </div>
  );
}
