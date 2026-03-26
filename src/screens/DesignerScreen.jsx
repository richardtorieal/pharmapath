import { useState, useRef, useEffect } from "react";
import { ELEMENTS, GROUPS } from "../constants.js";

export function DesignerScreen() {
  const [canvas, setCanvas] = useState([]);
  const [dragging, setDragging] = useState(null);
  const [isOver, setIsOver] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingPhrase, setLoadingPhrase] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const dropRef = useRef(null);

  const LOADING_PHRASES = [
    "🧪 Filling test tubes...",
    "🔥 Firing up the Bunsen burner...",
    "⚗️ Titrating the solution...",
    "🧬 Sequencing the genome...",
    "📡 Consulting the pharmacopeia...",
    "🔬 Peering through the microscope...",
    "💊 Checking the formulary...",
    "🧫 Culturing the sample...",
    "📊 Running regression models...",
    "⚡ Exciting the electrons...",
    "🌡️ Waiting for equilibrium...",
    "🧲 Aligning the molecular dipoles...",
  ];

  useEffect(() => {
    if (!loading) return;
    setLoadingPhrase(LOADING_PHRASES[0]);
    let i = 1;
    const interval = setInterval(() => {
      setLoadingPhrase(LOADING_PHRASES[i % LOADING_PHRASES.length]);
      i++;
    }, 5000);
    return () => clearInterval(interval);
  }, [loading]);

  const handleDragStart = (item) => {
    setDragging(item);
  };
  const handleDrop = () => {
    if (dragging && canvas.length < 14) {
      setCanvas((c) => [...c, { ...dragging, id: Date.now() + Math.random() }]);
    }
    setDragging(null);
    setIsOver(false);
  };
  const handleClickAdd = (item) => {
    if (canvas.length < 14) {
      setCanvas((c) => [...c, { ...item, id: Date.now() + Math.random() }]);
    }
  };
  const remove = (id) => setCanvas((c) => c.filter((x) => x.id !== id));
  const clear = () => {
    setCanvas([]);
    setResult(null);
    setError(null);
  };

  const ANALYSIS_SCHEMA = {
    type: "object",
    properties: {
      name:           { type: "string" },
      moa:            { type: "string" },
      target:         { type: "string" },
      indication:     { type: "string" },
      adme:           { type: "string" },
      verdict:        { type: "string", enum: ["BENEFICIAL", "RISKY", "TOXIC", "INERT", "CONTROLLED SUBSTANCE"] },
      verdict_reason: { type: "string" },
      warnings:       { type: "array", items: { type: "string" } },
      similar_drugs:  { type: "array", items: { type: "string" } },
      novelty:        { type: "string" },
    },
    required: ["name", "moa", "target", "indication", "adme", "verdict", "verdict_reason", "warnings", "similar_drugs", "novelty"],
    additionalProperties: false,
  };

  const analyzeWithClaude = async () => {
    if (canvas.length === 0) return;
    setLoading(true);
    setResult(null);
    setError(null);
    const components = canvas.map((c) => c.sym).join(", ");
    const prompt = `You are a medicinal chemist and pharmacologist. A pharmacy student has assembled the following chemical components for a hypothetical drug molecule: [${components}]. Analyze this combination and return a pharmacological assessment.`;
    try {
      const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "openrouter/free",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 1000,
          response_format: {
            type: "json_schema",
            json_schema: {
              name: "drug_analysis",
              strict: true,
              schema: ANALYSIS_SCHEMA,
            },
          },
        }),
      });
      const data = await res.json();
      const finishReason = data.choices?.[0]?.finish_reason;
      const text = data.choices?.[0]?.message?.content || "";

      if (!text || finishReason === "length" || data.error) {
        throw new Error("model_failure");
      }

      const parsed = JSON.parse(text);

      // Validate the required fields came back correctly
      if (!parsed.verdict || !parsed.name || !parsed.moa) {
        throw new Error("schema_mismatch");
      }

      setResult(parsed);
    } catch (e) {
      console.log("Error analyzing open router response:", e);
      setError("lab_error");
    }
    setLoading(false);
  };

  const verdictStyle = {
    BENEFICIAL: {
      bg: "rgba(16,185,129,0.15)",
      border: "rgba(16,185,129,0.4)",
      text: "#34d399",
      icon: "✅",
    },
    RISKY: {
      bg: "rgba(251,191,36,0.15)",
      border: "rgba(251,191,36,0.4)",
      text: "#fbbf24",
      icon: "⚠️",
    },
    TOXIC: {
      bg: "rgba(239,68,68,0.15)",
      border: "rgba(239,68,68,0.4)",
      text: "#f87171",
      icon: "☠️",
    },
    INERT: {
      bg: "rgba(100,116,139,0.15)",
      border: "rgba(100,116,139,0.4)",
      text: "#94a3b8",
      icon: "🔵",
    },
    "CONTROLLED SUBSTANCE": {
      bg: "rgba(168,85,247,0.15)",
      border: "rgba(168,85,247,0.4)",
      text: "#c084fc",
      icon: "🔒",
    },
  };

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "24px 20px 60px" }}>
      <div style={{ marginBottom: 24 }}>
        <div
          className="syne"
          style={{
            fontSize: 28,
            fontWeight: 800,
            color: "#e8f4ff",
            marginBottom: 6,
          }}
        >
          Drug Designer Sandbox
        </div>
        <div style={{ fontSize: 14, color: "#6a8ea8" }}>
          Drag elements & functional groups to the canvas, then get an AI
          pharmacological analysis
        </div>
      </div>

      <div
        className="designer-layout"
        style={{
          display: "grid",
          gridTemplateColumns: "260px 1fr",
          gap: 20,
          alignItems: "start",
        }}
      >
        {/* Left: Components palette */}
        <div className="designer-left" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div className="panel">
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#38bdf8",
                letterSpacing: ".06em",
                marginBottom: 10,
              }}
            >
              ELEMENTS
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {ELEMENTS.map((e) => (
                <div
                  key={e.sym}
                  draggable
                  onDragStart={() => handleDragStart(e)}
                  onClick={() => handleClickAdd(e)}
                  className="elem-chip"
                  style={{
                    background: `${e.color}22`,
                    borderColor: `${e.color}55`,
                    color: e.color,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: e.color,
                      display: "inline-block",
                    }}
                  />
                  {e.sym}
                </div>
              ))}
            </div>
          </div>
          <div className="panel">
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#38bdf8",
                letterSpacing: ".06em",
                marginBottom: 10,
              }}
            >
              FUNCTIONAL GROUPS
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {GROUPS.map((g) => (
                <div
                  key={g.sym}
                  draggable
                  onDragStart={() => handleDragStart(g)}
                  onClick={() => handleClickAdd(g)}
                  title={g.desc}
                  className="elem-chip"
                  style={{
                    background: `${g.color}22`,
                    borderColor: `${g.color}55`,
                    color: g.color,
                    justifyContent: "flex-start",
                    fontSize: 12,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: g.color,
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontWeight: 700, minWidth: 42 }}>{g.sym}</span>
                  <span style={{ fontSize: 10, color: "#6a8ea8", marginLeft: 4 }}>
                    {g.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Canvas + results */}
        <div className="designer-right" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Sticky canvas + actions wrapper (sticky on mobile only via CSS) */}
          <div className="designer-canvas-wrap">
          {/* Drop zone */}
          <div
            ref={dropRef}
            className={`designer-slot${isOver ? " over" : ""}`}
            onDragOver={(e) => {
              e.preventDefault();
              setIsOver(true);
            }}
            onDragLeave={() => setIsOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              handleDrop();
            }}
          >
            {canvas.length === 0 ? (
              <div style={{ textAlign: "center", color: "#3a5066", userSelect: "none" }}>
                <div style={{ fontSize: 40, marginBottom: 10 }}>⚗️</div>
                <div style={{ fontSize: 14, marginBottom: 4 }}>
                  Drop components here
                </div>
                <div style={{ fontSize: 12 }}>
                  Build your molecule (up to 14 components)
                </div>
              </div>
            ) : (
              <div style={{ width: "100%", padding: 16 }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                  {canvas.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        background: `${item.color}22`,
                        border: `1px solid ${item.color}66`,
                        borderRadius: 8,
                        padding: "6px 10px",
                        fontSize: 13,
                        color: item.color,
                        fontWeight: 700,
                      }}
                    >
                      {item.sym}
                      <button
                        onClick={() => remove(item.id)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#4a6080",
                          cursor: "pointer",
                          fontSize: 14,
                          lineHeight: 1,
                          padding: 0,
                          marginLeft: 2,
                        }}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: 12, color: "#3a5066" }}>
                  {canvas.length} component{canvas.length !== 1 ? "s" : ""} assembled
                  · Click × to remove
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="analyze-section" style={{ display: "flex", gap: 10 }}>
            <button
              className={`btn-solid${loading ? " loading" : ""}`}
              onClick={analyzeWithClaude}
              disabled={loading || canvas.length === 0}
              style={{
                opacity: canvas.length === 0 && !loading ? 0.4 : 1,
                flex: 1,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {loading ? (
                <>
                  <span className="loading-orb" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
                  <span style={{ display: "block", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", padding: "0 28px" }}>
                    {loadingPhrase}
                  </span>
                </>
              ) : "🔬 Analyze Pharmacology (AI)"}
            </button>
            <button className="btn" onClick={clear} style={{ opacity: canvas.length === 0 ? 0.4 : 1 }}>
              Clear
            </button>
          </div>
          </div>{/* end designer-canvas-wrap */}

          {/* AI Results Section */}
          <div className="ai-results-section" style={{ marginTop: 20 }}>
            {error && (
              <div
                style={{
                  background: "rgba(239,68,68,0.1)",
                  border: "1px solid rgba(239,68,68,0.3)",
                  borderRadius: 10,
                  padding: 14,
                  fontSize: 13,
                  color: "#f87171",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                }}
              >
                <span style={{ fontSize: 22, flexShrink: 0 }}>🧪</span>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>
                    The AI Lab Assistant broke a test tube
                  </div>
                  <div style={{ fontSize: 12, color: "#fca5a5", opacity: 0.85 }}>
                    Please Try again
                  </div>
                </div>
              </div>
            )}

            {result && (() => {
              const vs = verdictStyle[result.verdict] || verdictStyle.INERT;
              return (
                <div className="fadein panel" style={{ border: "1px solid rgba(56,189,248,0.2)" }}>
                  {/* Verdict banner */}
                  <div
                    style={{
                      background: vs.bg,
                      border: `1px solid ${vs.border}`,
                      borderRadius: 10,
                      padding: "12px 16px",
                      marginBottom: 16,
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <span style={{ fontSize: 26 }}>{vs.icon}</span>
                    <div>
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: vs.text,
                          letterSpacing: ".06em",
                        }}
                      >
                        {result.verdict}
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          color: vs.text,
                          opacity: 0.9,
                          marginTop: 2,
                        }}
                      >
                        {result.verdict_reason}
                      </div>
                    </div>
                  </div>

                  <div
                    className="syne"
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#e8f4ff",
                      marginBottom: 16,
                    }}
                  >
                    {result.name}
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 14,
                      marginBottom: 14,
                    }}
                  >
                    {[
                      ["🎯 Mechanism of Action", result.moa],
                      ["🔗 Target", result.target],
                      ["💊 Indication", result.indication],
                      ["⚗️ ADME", result.adme],
                    ].map(([label, val]) => (
                      <div
                        key={label}
                        style={{
                          background: "rgba(56,189,248,0.04)",
                          border: "1px solid rgba(56,189,248,0.1)",
                          borderRadius: 8,
                          padding: "10px 12px",
                        }}
                      >
                        <div
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            color: "#38bdf8",
                            marginBottom: 5,
                          }}
                        >
                          {label}
                        </div>
                        <div
                          style={{
                            fontSize: 13,
                            color: "#a8c4dc",
                            lineHeight: 1.6,
                          }}
                        >
                          {val}
                        </div>
                      </div>
                    ))}
                  </div>

                  {result.warnings?.length > 0 && (
                    <div
                      style={{
                        background: "rgba(239,68,68,0.07)",
                        border: "1px solid rgba(239,68,68,0.2)",
                        borderRadius: 8,
                        padding: "10px 12px",
                        marginBottom: 14,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: "#f87171",
                          marginBottom: 6,
                        }}
                      >
                        ⚠️ SAFETY FLAGS
                      </div>
                      {result.warnings.map((w, i) => (
                        <div
                          key={i}
                          style={{
                            fontSize: 12,
                            color: "#fca5a5",
                            padding: "3px 0",
                            borderBottom:
                              i < result.warnings.length - 1
                                ? "1px solid rgba(239,68,68,0.1)"
                                : "none",
                          }}
                        >
                          • {w}
                        </div>
                      ))}
                    </div>
                  )}

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    <div>
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: "#38bdf8",
                          marginBottom: 6,
                        }}
                      >
                        📚 SIMILAR APPROVED DRUGS
                      </div>
                      {(result.similar_drugs || []).map((d, i) => (
                        <span
                          key={i}
                          className="tag"
                          style={{
                            background: "rgba(56,189,248,0.1)",
                            border: "1px solid rgba(56,189,248,0.25)",
                            color: "#7dd3f8",
                            fontSize: 11,
                          }}
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: "#38bdf8",
                          marginBottom: 6,
                        }}
                      >
                        💡 NOVELTY ASSESSMENT
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: "#8ab0c8",
                          lineHeight: 1.6,
                        }}
                      >
                        {result.novelty}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}