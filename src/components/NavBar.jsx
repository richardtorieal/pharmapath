export function NavBar({ view, onHome, onDesigner }) {
  return (
    <div
      style={{
        background: "rgba(4,10,24,0.98)",
        borderBottom: "1px solid rgba(56,189,248,0.12)",
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        gap: 14,
        position: "sticky",
        top: 0,
        zIndex: 200,
      }}
    >
      <button
        onClick={onHome}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            background:
              "linear-gradient(135deg,rgba(56,189,248,0.3),rgba(16,185,129,0.2))",
            border: "1px solid rgba(56,189,248,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 15,
          }}
        >
          ⚗
        </div>
        <span
          className="syne"
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "#e8f4ff",
            letterSpacing: ".02em",
          }}
        >
          PharmPath
        </span>
      </button>
      <div style={{ flex: 1 }} />
      <button
        className={view === "home" ? "btn btn-active" : "btn"}
        onClick={onHome}
        style={{ fontSize: 12, padding: "5px 14px" }}
      >
        💊 Drug Library
      </button>
      <button
        className={view === "designer" ? "btn btn-active" : "btn"}
        onClick={onDesigner}
        style={{ fontSize: 12, padding: "5px 14px" }}
      >
        ⚗️ Designer
      </button>
    </div>
  );
}
