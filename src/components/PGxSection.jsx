export function PGxSection({ drug }) {
  if (!drug.pgx) return null;
  return (
    <div className="pgx-banner-blk">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 10,
        }}
      >
        <span style={{ fontSize: 20 }}>🧬</span>
        <div>
          <div
            style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: 15,
              fontWeight: 700,
              color: "#6ee7b7",
            }}
          >
            Pharmacogenomics & Racial Equity
          </div>
          <div
            style={{
              fontSize: 11,
              color: "#34d399",
              fontWeight: 600,
              marginTop: 2,
            }}
          >
            CLINICALLY ACTIONABLE GENETIC VARIATION
          </div>
        </div>
      </div>
      <div style={{ fontSize: 13, color: "#a7f3d0", lineHeight: 1.75 }}>
        {drug.pgxNote}
      </div>
    </div>
  );
}
