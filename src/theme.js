// Theme definitions for PharmaPath
export const THEMES = {
  dark: {
    name: "dark",
    label: "Dark",
    bg: "#060d1a",
    surface: "#0d1b2e",
    surfaceAlt: "#0a1628",
    border: "rgba(56,189,248,0.15)",
    borderLight: "rgba(56,189,248,0.1)",
    borderDim: "rgba(56,189,248,0.12)",
    primary: "#38bdf8",
    primaryDim: "rgba(56,189,248,0.2)",
    primaryLight: "rgba(56,189,248,0.15)",
    success: "#34d399",
    successDim: "rgba(16,185,129,0.15)",
    successBorder: "rgba(16,185,129,0.4)",
    warning: "#fbbf24",
    danger: "#f87171",
    text: "#e2e8f0",
    textMuted: "#94a3b8",
    textDim: "#3a5066",
  },
  light: {
    name: "light",
    label: "Light",
    bg: "#fafaf8",
    surface: "#f5f3f0",
    surfaceAlt: "#f0ede8",
    border: "rgba(236,72,153,0.15)",
    borderLight: "rgba(236,72,153,0.1)",
    borderDim: "rgba(236,72,153,0.12)",
    primary: "#ec4899",
    primaryDim: "rgba(236,72,153,0.2)",
    primaryLight: "rgba(236,72,153,0.12)",
    success: "#16a34a",
    successDim: "rgba(22,163,74,0.15)",
    successBorder: "rgba(22,163,74,0.4)",
    warning: "#f59e0b",
    danger: "#dc2626",
    text: "#111827",
    textMuted: "#374151",
    textDim: "#6b7280",
  },
};

export function applyTheme(themeName) {
  const theme = THEMES[themeName] || THEMES.dark;
  const root = document.documentElement;

  Object.entries(theme).forEach(([key, value]) => {
    if (key !== "name" && key !== "label") {
      root.style.setProperty(`--theme-${key}`, value);
    }
  });

  localStorage.setItem("pharmapath-theme", themeName);
}

export function getSavedTheme() {
  return localStorage.getItem("pharmapath-theme") || "dark";
}
