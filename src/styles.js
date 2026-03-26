// ═══════════════════════════════════════════════
// PHARMPATH STYLES
// ═══════════════════════════════════════════════

export const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
body{background:#060d1a;color:#ccd9ee;font-family:'DM Sans',sans-serif;min-height:100vh}
.pp{background:#060d1a;min-height:100vh}
.syne{font-family:'Syne',sans-serif}
.mono{font-family:'JetBrains Mono',monospace}
.card{background:rgba(8,18,40,0.9);border:1px solid rgba(56,189,248,0.13);border-radius:14px;transition:all .25s ease}
.card:hover{border-color:rgba(56,189,248,0.35);transform:translateY(-2px);box-shadow:0 8px 32px rgba(56,189,248,0.08)}
.btn{border:1px solid rgba(56,189,248,0.35);background:transparent;color:#38bdf8;border-radius:8px;padding:8px 18px;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:14px;transition:all .2s}
.btn:hover{background:rgba(56,189,248,0.1);border-color:rgba(56,189,248,0.6)}
.btn-solid{background:rgba(56,189,248,0.15);border:1px solid rgba(56,189,248,0.4);color:#38bdf8;border-radius:8px;padding:10px 22px;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;transition:all .2s}
.btn-solid:hover{background:rgba(56,189,248,0.28)}
.btn-active{background:rgba(56,189,248,0.2);border:1px solid #38bdf8;color:#e0f2ff}
.panel{background:rgba(4,11,28,0.96);border:1px solid rgba(56,189,248,0.15);border-radius:14px;padding:20px}
.tag{display:inline-block;border-radius:20px;padding:3px 10px;font-size:11px;font-weight:600;margin:2px}
.glow{box-shadow:0 0 24px rgba(56,189,248,0.18)}
.depth-bar{display:flex;background:rgba(4,10,24,0.9);border:1px solid rgba(56,189,248,0.2);border-radius:8px;padding:3px;gap:3px}
.depth-btn{border:none;background:transparent;color:#4a6a80;border-radius:6px;padding:5px 14px;font-size:12px;font-weight:700;cursor:pointer;transition:all .2s;letter-spacing:.04em}
.depth-btn.on{background:rgba(56,189,248,0.2);color:#38bdf8}
.pgx-banner{background:linear-gradient(135deg,rgba(251,191,36,0.12),rgba(234,88,12,0.12));border:1px solid rgba(251,191,36,0.3);border-radius:12px;padding:16px 20px;margin:16px 0}
.pgx-banner-blk{background:linear-gradient(135deg,rgba(16,185,129,0.12),rgba(6,182,212,0.12));border:1px solid rgba(16,185,129,0.3);border-radius:12px;padding:16px 20px;margin:16px 0}
.step-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0;margin-top:5px}
.atom-popup{position:absolute;background:rgba(4,11,28,0.97);border:1px solid rgba(56,189,248,0.4);border-radius:12px;padding:16px;pointer-events:none;max-width:260px;z-index:10;box-shadow:0 8px 32px rgba(0,0,0,0.6)}
.designer-slot{border:2px dashed rgba(56,189,248,0.25);border-radius:12px;min-height:200px;display:flex;align-items:center;justify-content:center;transition:all .2s}
.designer-slot.over{border-color:rgba(56,189,248,0.7);background:rgba(56,189,248,0.05)}
.elem-chip{display:inline-flex;align-items:center;gap:6px;border-radius:8px;padding:6px 12px;cursor:grab;font-size:13px;font-weight:600;border:1px solid rgba(255,255,255,0.15);transition:all .2s;user-select:none}
.elem-chip:hover{transform:scale(1.06)}
.elem-chip:active{cursor:grabbing}
.scroll{scrollbar-width:thin;scrollbar-color:rgba(56,189,248,0.2) transparent}
@keyframes fadein{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
.fadein{animation:fadein .3s ease forwards}
@keyframes pulse{0%,100%{opacity:.7}50%{opacity:1}}
.pulse{animation:pulse 2s ease infinite}
.thinking-dot{display:inline-block;width:6px;height:6px;border-radius:50%;background:#38bdf8;margin:0 2px;animation:pulse 1.2s ease infinite}
.thinking-dot:nth-child(2){animation-delay:.2s}
.thinking-dot:nth-child(3){animation-delay:.4s}

/* Desktop styles - properly position grid items */
.designer-layout {
  grid-template-rows: auto !important;
}

.designer-left {
  grid-column: 1 !important;
}

.designer-right {
  grid-column: 2 !important;
}

/* Mobile responsive styles */
@media (max-width: 768px) {
  .pp { padding: 10px; }
  .panel { padding: 15px; margin-bottom: 15px; }
  .elem-chip { padding: 8px 12px; font-size: 12px; }
  .btn { padding: 6px 12px; font-size: 13px; }
  .btn-solid { padding: 8px 16px; font-size: 13px; }
  
  /* Stack layout for mobile - back to flex */
  .designer-layout {
    display: flex !important;
    flex-direction: column !important;
    grid-template-rows: auto !important; /* Reset grid */
  }
  
  .designer-left {
    order: 1;
    margin-bottom: 20px;
    grid-column: auto !important;
  }
  
  .designer-right {
    order: 2;
    grid-column: auto !important;
  }
  
  .analyze-section {
    margin: 20px 0;
    text-align: center;
  }
  
  .ai-results-section {
    order: 3;
    grid-column: auto !important;
  }
  }
  
  .designer-slot {
    min-height: 150px;
  }
  
  .atom-popup {
    max-width: 200px;
    font-size: 12px;
  }
}

/* iPhone specific responsive styles (<=450px) */
@media (max-width: 450px) {
  .pp { padding: 8px; }
  .panel { padding: 12px; margin-bottom: 12px; }
  .elem-chip { padding: 6px 10px; font-size: 11px; }
  .btn { padding: 5px 10px; font-size: 12px; }
  .btn-solid { padding: 7px 14px; font-size: 12px; }
  
  /* Drug screen: Stack 3D viewer and info card vertically */
  .drug-info-grid {
    grid-template-columns: 1fr !important;
    gap: 16px !important;
  }
  
  /* Designer screen: iPhone layout - canvas + AI section first and sticky */
  .designer-layout {
    display: flex !important;
    flex-direction: column !important;
    grid-template-columns: 1fr !important;
    gap: 0 !important;
  }
  
  .designer-right {
    order: 1;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 30;
    background: #060d1a;
    width: 100%;
    padding: 12px 0 16px;
    border-bottom: 1px solid rgba(56,189,248,0.12);
    box-shadow: 0 2px 12px rgba(0,0,0,0.32);
  }

  .designer-left {
    order: 2;
    margin-top: 16px;
  }
  
  .designer-left {
    order: 2;
    margin-top: 16px;
  }

  .designer-layout {
    grid-template-columns: 1fr !important;
    gap: 0 !important;
  }
  
  .analyze-section {
    margin: 0 !important;
    padding: 16px 0;
  }
  
  .designer-slot {
    min-height: 120px;
  }
  
  /* Header adjustments */
  .drug-header {
    padding: 12px 16px;
    flex-wrap: wrap;
  }
  
  .drug-header-title {
    font-size: 18px;
  }
  
  .drug-header-subtitle {
    font-size: 11px;
  }
  
  /* Lifecycle stepper adjustments */
  .lifecycle-nav {
    flex-wrap: wrap;
    gap: 4px;
  }
  
  .lifecycle-nav button {
    padding: 4px 8px;
    font-size: 10px;
  }
  
  /* Atom popup smaller */
  .atom-popup {
    max-width: 180px;
    font-size: 11px;
    padding: 12px;
  }
}
`;