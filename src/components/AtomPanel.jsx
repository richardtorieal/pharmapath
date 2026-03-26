import { cpk } from "../constants.js";

export function AtomPanel({ atom, onClose }) {
  if (!atom) return null;
  const c = cpk(atom.element);
  return (
    <div
      className="fadein"
      style={{
        background: "rgba(4,11,28,0.97)",
        border: "1px solid rgba(56,189,248,0.35)",
        borderRadius: 14,
        padding: 18,
        marginTop: 12,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 12,
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: c.css,
            boxShadow: `0 0 12px ${c.css}66`,
            flexShrink: 0,
          }}
        />
        <div>
          <div
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: 16,
              fontWeight: 700,
              color: "#e8f4ff",
            }}
          >
            {atom.element}
          </div>
          <div style={{ fontSize: 12, color: "#38bdf8", fontWeight: 600 }}>
            {atom.role}
          </div>
        </div>
        <button
          onClick={onClose}
          style={{
            marginLeft: "auto",
            background: "none",
            border: "none",
            color: "#4a6080",
            cursor: "pointer",
            fontSize: 18,
            lineHeight: 1,
          }}
        >
          ×
        </button>
      </div>
      <div style={{ fontSize: 13, color: "#8ab0c8", lineHeight: 1.7 }}>
        {atom.desc || "No description available."}
      </div>
    </div>
  );
}
