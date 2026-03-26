import { cpk } from "../constants.js";

export function LegendChip({ el }) {
  const c = cpk(el);
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 6,
        padding: "3px 8px",
        fontSize: 11,
        margin: "2px",
        color: "#ccd9ee",
      }}
    >
      <span
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: c.css,
          display: "inline-block",
        }}
      />
      {el}
    </span>
  );
}
