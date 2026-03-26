import { useState } from "react";
import { MOLS } from "../molecules.js";
import { LC_STEPS, LC_CONTENT } from "../constants.js";
import { MolViewer } from "../components/MolViewer.jsx";
import { DepthToggle } from "../components/DepthToggle.jsx";
import { MD } from "../components/MD.jsx";
import { LegendChip } from "../components/LegendChip.jsx";
import { AtomPanel } from "../components/AtomPanel.jsx";
import { PGxSection } from "../components/PGxSection.jsx";
import { cpk } from "../constants.js";

export function DrugScreen({ drug, onBack }) {
  const [step, setStep] = useState(0);
  const [depth, setDepth] = useState(2);
  const [selAtom, setSelAtom] = useState(null);
  const mol = MOLS[drug.id];
  const elems = [...new Set((mol?.atoms || []).map((a) => a.element))];
  const stepData = LC_STEPS[step];
  const content = LC_CONTENT[stepData.key];
  const text = depth === 2 ? content.L2(drug) : content.L3(drug);

  return (
    <div className="pp fadein" style={{ minHeight: "100vh", padding: "0 0 60px" }}>
      {/* Header */}
      <div
        className="drug-header"
        style={{
          background: "rgba(4,10,24,0.95)",
          borderBottom: "1px solid rgba(56,189,248,0.12)",
          padding: "16px 24px",
          position: "sticky",
          top: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}
      >
        <button
          className="btn"
          onClick={onBack}
          style={{ padding: "6px 14px", fontSize: 13 }}
        >
          ← Back
        </button>
        <div>
          <div
            className="syne drug-header-title"
            style={{
              fontSize: 20,
              fontWeight: 800,
              color: "#e8f4ff",
            }}
          >
            {drug.name}
          </div>
          <div
            className="drug-header-subtitle"
            style={{
              fontSize: 12,
              color: "#38bdf8",
              fontWeight: 600,
            }}
          >
            {drug.brand} · {drug.cls}
          </div>
        </div>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          {drug.pgx && (
            <span
              style={{
                background: "rgba(16,185,129,0.15)",
                border: "1px solid rgba(16,185,129,0.4)",
                borderRadius: 20,
                padding: "3px 10px",
                fontSize: 11,
                color: "#34d399",
                fontWeight: 700,
              }}
            >
              PGx VARIANT
            </span>
          )}
          {drug.id === "bidil" && (
            <span
              style={{
                background: "rgba(251,191,36,0.15)",
                border: "1px solid rgba(251,191,36,0.4)",
                borderRadius: 20,
                padding: "3px 10px",
                fontSize: 11,
                color: "#fbbf24",
                fontWeight: 700,
              }}
            >
              RACE-SPECIFIC FDA
            </span>
          )}
          <span
            style={{
              background: "rgba(56,189,248,0.1)",
              border: "1px solid rgba(56,189,248,0.3)",
              borderRadius: 20,
              padding: "3px 10px",
              fontSize: 11,
              color: "#38bdf8",
              fontWeight: 600,
            }}
          >
            {drug.yr}
          </span>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "24px 20px" }}>
        <div
          className="drug-info-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            marginBottom: 24,
          }}
        >
          {/* 3D Viewer */}
          <div
            className="card"
            style={{
              height: 400,
              padding: 0,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 12,
                left: 12,
                zIndex: 2,
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 11,
                color: "rgba(56,189,248,0.7)",
                background: "rgba(4,11,28,0.8)",
                borderRadius: 6,
                padding: "4px 8px",
              }}
            >
              {drug.formula || "—"}
            </div>
            {mol ? (
              <MolViewer molData={mol} onSelectAtom={setSelAtom} />
            ) : (
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#4a6080",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div style={{ fontSize: 36 }}>⚗️</div>
                <div style={{ fontSize: 13 }}>3D structure loading...</div>
              </div>
            )}
          </div>

          {/* Drug info card */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div className="panel" style={{ flex: 1 }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                  marginBottom: 14,
                }}
              >
                {[
                  ["Indication", drug.ind],
                  ["Drug Class", drug.cls],
                  ["Manufacturer", drug.mfr],
                  ["Approved", drug.yr],
                  ["Formula", drug.formula || "—"],
                  ["Mol. Weight", drug.mw || "—"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div
                      style={{
                        fontSize: 10,
                        color: "#38bdf8",
                        fontWeight: 700,
                        letterSpacing: ".06em",
                        marginBottom: 3,
                      }}
                    >
                      {k.toUpperCase()}
                    </div>
                    <div style={{ fontSize: 13, color: "#ccd9ee" }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: "1px solid rgba(56,189,248,0.1)", paddingTop: 12 }}>
                <div
                  style={{
                    fontSize: 11,
                    color: "#4a6080",
                    fontWeight: 600,
                    marginBottom: 6,
                  }}
                >
                  ELEMENT LEGEND
                </div>
                <div>
                  {elems.map((el) => (
                    <LegendChip key={el} el={el} />
                  ))}
                </div>
              </div>
              <div
                style={{
                  marginTop: 12,
                  fontSize: 12,
                  color: "#6ee7b7",
                  fontStyle: "italic",
                }}
              >
                {drug.rank}
              </div>
            </div>
            <PGxSection drug={drug} />
          </div>
        </div>

        {/* Atom info panel */}
        <AtomPanel atom={selAtom} onClose={() => setSelAtom(null)} />

        {/* Lifecycle stepper */}
        <div className="panel" style={{ marginTop: selAtom ? 12 : 0 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 18,
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div className="syne" style={{ fontSize: 17, fontWeight: 700, color: "#e8f4ff" }}>
              Drug Lifecycle Journey
            </div>
            <DepthToggle depth={depth} onChange={setDepth} />
          </div>

          {/* Step nav */}
          <div
            className="lifecycle-nav"
            style={{
              display: "flex",
              gap: 6,
              marginBottom: 22,
              flexWrap: "wrap",
            }}
          >
            {LC_STEPS.map((s, i) => (
              <button
                key={s.key}
                onClick={() => setStep(i)}
                style={{
                  border: `1px solid ${
                    i === step
                      ? "rgba(56,189,248,0.7)"
                      : i < step
                      ? "rgba(56,189,248,0.25)"
                      : "rgba(74,96,112,0.3)"
                  }`,
                  background:
                    i === step ? "rgba(56,189,248,0.18)" : "transparent",
                  color:
                    i === step
                      ? "#38bdf8"
                      : i < step
                      ? "#5a88a0"
                      : "#3a5066",
                  borderRadius: 8,
                  padding: "6px 12px",
                  cursor: "pointer",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: ".04em",
                  transition: "all .2s",
                }}
              >
                {s.icon} {s.short}
              </button>
            ))}
          </div>

          {/* Step content */}
          <div className="fadein" key={`${step}-${depth}`}>
            <div style={{ marginBottom: 14 }}>
              <div
                className="syne"
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#e8f4ff",
                  marginBottom: 4,
                }}
              >
                {stepData.icon} {stepData.title}
              </div>
              <div
                style={{
                  height: 2,
                  width: 50,
                  background: "linear-gradient(90deg,#38bdf8,transparent)",
                  borderRadius: 2,
                  marginBottom: 14,
                }}
              />
              {stepData.key === "regulatory" && drug.pgx && (
                <div className="pgx-banner" style={{ marginBottom: 14 }}>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#fbbf24",
                      marginBottom: 4,
                    }}
                  >
                    ⚠️ PHARMACOGENOMICS REGULATORY NOTE
                  </div>
                  <div style={{ fontSize: 12, color: "#fde68a" }}>
                    This drug has known PGx variants with regulatory
                    implications. See PGx section above and L3 content for FDA
                    labeling requirements.
                  </div>
                </div>
              )}
            </div>
            <div
              className="scroll"
              style={{
                maxHeight: 420,
                overflowY: "auto",
                paddingRight: 8,
              }}
            >
              <MD text={text} />
            </div>
          </div>

          {/* Step nav arrows */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 20,
              borderTop: "1px solid rgba(56,189,248,0.1)",
              paddingTop: 16,
            }}
          >
            <button
              className="btn"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              style={{
                opacity: step === 0 ? 0.3 : 1,
                cursor: step === 0 ? "default" : "pointer",
              }}
            >
              ← Previous
            </button>
            <span style={{ fontSize: 12, color: "#4a6080", alignSelf: "center" }}>
              {step + 1} / {LC_STEPS.length}
            </span>
            <button
              className="btn"
              onClick={() => setStep((s) => Math.min(LC_STEPS.length - 1, s + 1))}
              style={{
                opacity: step === LC_STEPS.length - 1 ? 0.3 : 1,
                cursor: step === LC_STEPS.length - 1 ? "default" : "pointer",
              }}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
