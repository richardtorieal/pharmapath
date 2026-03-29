import { useState } from "react";
import { DRUGS, CAT_COLORS, CAT_LABELS } from "../constants.js";
import { MOLS } from "../molecules.js";

export function HomeScreen({ onSelect, onDesigner }) {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const cats = ["all", "cardiovascular", "antibiotic", "neuro", "metabolic"];
  const filtered = DRUGS.filter((d) => {
    const catMatch = filter === "all" || d.cat === filter;
    const searchMatch =
      !search ||
      (d.name + d.brand + d.cls + d.ind)
        .toLowerCase()
        .includes(search.toLowerCase());
    return catMatch && searchMatch;
  });

  return (
    <div className="pp" style={{ minHeight: "100vh" }}>
      {/* Hero */}
      <div
        style={{
          background:
            "linear-gradient(180deg,rgba(56,189,248,0.06) 0%,transparent 100%)",
          borderBottom: "1px solid rgba(56,189,248,0.1)",
          padding: "48px 24px 32px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "var(--theme-primaryLight, rgba(56,189,248,0.1))",
            border: "1px solid var(--theme-border, rgba(56,189,248,0.3))",
            borderRadius: 20,
            padding: "4px 14px",
            fontSize: 11,
            fontWeight: 700,
            color: "var(--theme-primary, #38bdf8)",
            letterSpacing: ".08em",
            marginBottom: 18,
          }}
        >
          PHARMPATH · DRUG DISCOVERY LEARNING SUITE
        </div>
        <div
          className="syne"
          style={{
            fontSize: 42,
            fontWeight: 800,
            color: "var(--theme-text, #e8f4ff)",
            lineHeight: 1.15,
            marginBottom: 12,
          }}
        >
          From Molecule to Market
        </div>
        <div
          style={{
            fontSize: 16,
            color: "var(--theme-textMuted, #6a8ea8)",
            maxWidth: 580,
            margin: "0 auto 28px",
          }}
        >
          Explore the complete pharmaceutical lifecycle through interactive 3D
          molecular visualization, regulatory deep-dives, and AI-powered drug
          design — with a focus on pharmacogenomics and racial equity in
          medicine.
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            className="btn-solid"
            onClick={onDesigner}
            style={{ fontSize: 15, padding: "11px 26px" }}
          >
            ⚗️ Open Drug Designer
          </button>
          <div
            style={{
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.3)",
              borderRadius: 8,
              padding: "11px 18px",
              fontSize: 13,
              color: "#34d399",
            }}
          >
            🧬 Select a drug below to explore its lifecycle →
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "28px 20px" }}>
        {/* Filters */}
        <div
          style={{
            display: "flex",
            gap: 10,
            marginBottom: 18,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={filter === c ? "btn-solid" : "btn"}
              style={{
                fontSize: 12,
                padding: "6px 14px",
                background:
                  filter === c && c !== "all" ? `${CAT_COLORS[c]}22` : "",
                borderColor:
                  filter === c && c !== "all" ? CAT_COLORS[c] : "",
              }}
            >
              {c === "all" ? "All Drugs" : CAT_LABELS[c]}
            </button>
          ))}
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            style={{
              marginLeft: "auto",
              background: "var(--theme-surfaceAlt, rgba(8,18,40,0.8))",
              border: "1px solid var(--theme-border, rgba(56,189,248,0.2))",
              borderRadius: 8,
              padding: "7px 14px",
              color: "var(--theme-text, #ccd9ee)",
              fontSize: 13,
              outline: "none",
              width: 200,
            }}
          />
        </div>

        {/* Drug grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
            gap: 14,
          }}
        >
          {filtered.map((drug) => (
            <div
              key={drug.id}
              className="card"
              style={{
                padding: 18,
                cursor: "pointer",
                borderLeft: `3px solid ${CAT_COLORS[drug.cat]}44`,
              }}
              onClick={() => onSelect(drug)}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 10,
                }}
              >
                <div>
                  <div
                    className="syne"
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: "var(--theme-text, #e8f4ff)",
                    }}
                  >
                    {drug.name}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--theme-primary, #38bdf8)", marginTop: 2 }}>
                    {drug.brand}
                  </div>
                </div>
                <span
                  style={{
                    background: `${CAT_COLORS[drug.cat]}22`,
                    border: `1px solid ${CAT_COLORS[drug.cat]}55`,
                    borderRadius: 6,
                    padding: "3px 8px",
                    fontSize: 10,
                    fontWeight: 700,
                    color: CAT_COLORS[drug.cat],
                    flexShrink: 0,
                    marginLeft: 8,
                  }}
                >
                  {drug.yr}
                </span>
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--theme-textMuted, #7a9ab8)",
                  marginBottom: 8,
                  lineHeight: 1.5,
                }}
              >
                {drug.ind}
              </div>
              <div style={{ fontSize: 11, color: "var(--theme-textDim, #4a6080)", fontStyle: "italic", marginBottom: 10 }}>
                {drug.cls}
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {drug.pgx && (
                  <span
                    style={{
                      background: "rgba(16,185,129,0.12)",
                      border: "1px solid rgba(16,185,129,0.3)",
                      borderRadius: 20,
                      padding: "2px 8px",
                      fontSize: 10,
                      fontWeight: 700,
                      color: "#34d399",
                    }}
                  >
                    🧬 PGx
                  </span>
                )}
                {drug.id === "bidil" && (
                  <span
                    style={{
                      background: "rgba(251,191,36,0.12)",
                      border: "1px solid rgba(251,191,36,0.3)",
                      borderRadius: 20,
                      padding: "2px 8px",
                      fontSize: 10,
                      fontWeight: 700,
                      color: "#fbbf24",
                    }}
                  >
                    ★ Race-Specific
                  </span>
                )}
                {MOLS[drug.id] && (
                  <span
                    style={{
                      background: "rgba(56,189,248,0.1)",
                      border: "1px solid rgba(56,189,248,0.25)",
                      borderRadius: 20,
                      padding: "2px 8px",
                      fontSize: 10,
                      color: "var(--theme-primary, #38bdf8)",
                    }}
                  >
                    3D Viewer
                  </span>
                )}
                <span
                  style={{
                    background: "rgba(56,189,248,0.05)",
                    border: "1px solid rgba(56,189,248,0.15)",
                    borderRadius: 20,
                    padding: "2px 8px",
                    fontSize: 10,
                    color: "#4a7090",
                  }}
                >
                  {drug.formula || "—"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: 60, color: "var(--theme-textDim, #3a5066)" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🔍</div>
            <div>No drugs match your search</div>
          </div>
        )}

        {/* PGx callout */}
        <div
          style={{
            marginTop: 32,
            background:
              "linear-gradient(135deg,rgba(16,185,129,0.08),rgba(6,182,212,0.08))",
            border: "1px solid rgba(16,185,129,0.2)",
            borderRadius: 14,
            padding: "24px 28px",
          }}
        >
          <div
            className="syne"
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "var(--theme-text, #6ee7b7)",
              marginBottom: 10,
            }}
          >
            🧬 Pharmacogenomics & Racial Equity in Medicine
          </div>
          <div
            style={{
              fontSize: 13,
              color: "var(--theme-textMuted, #a7f3d0)",
              lineHeight: 1.8,
              maxWidth: 900,
            }}
          >
            Drugs marked <strong style={{ color: "#34d399" }}>PGx</strong> have
            clinically important genetic variants that affect dosing, efficacy,
            or safety. Many of these variants have different frequencies across
            ancestral populations—a critical consideration for equitable
            prescribing. The <strong style={{ color: "#fbbf24" }}>BiDil</strong>{" "}
            case study is included as the first FDA-approved race-specific drug,
            raising fundamental questions about race as a biological proxy in
            medicine. Throughout this app, pay attention to how
            underrepresentation in clinical trials creates knowledge gaps that
            disproportionately affect Black, Hispanic, and other minority
            patients.
          </div>
        </div>
      </div>
    </div>
  );
}
