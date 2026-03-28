export function NavBar({ view, onHome, onDesigner, theme, onThemeToggle }) {
  return (
    <div
      style={{
        background: "var(--theme-surface, rgba(4,10,24,0.98))",
        borderBottom: "1px solid var(--theme-borderDim, rgba(56,189,248,0.12))",
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
              "linear-gradient(135deg,var(--theme-primary, rgba(56,189,248,0.3)),var(--theme-success, rgba(16,185,129,0.2)))",
            border: "1px solid var(--theme-primary, rgba(56,189,248,0.4))",
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
      <button
        onClick={onThemeToggle}
        title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        style={{
          background: "none",
          border: "1px solid var(--theme-borderLight, rgba(56,189,248,0.15))",
          color: "var(--theme-primary, #38bdf8)",
          borderRadius: 8,
          padding: "5px 12px",
          cursor: "pointer",
          fontSize: 14,
          transition: "all 0.2s",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "var(--theme-primaryLight, rgba(56,189,248,0.15))")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </div>
  );
}
