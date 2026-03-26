export function DepthToggle({ depth, onChange }) {
  return (
    <div className="depth-bar">
      <button
        className={`depth-btn${depth === 2 ? " on" : ""}`}
        onClick={() => onChange(2)}
      >
        L2 OVERVIEW
      </button>
      <button
        className={`depth-btn${depth === 3 ? " on" : ""}`}
        onClick={() => onChange(3)}
      >
        L3 TECHNICAL
      </button>
    </div>
  );
}
