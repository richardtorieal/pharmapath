import { useMemo } from "react";

export function MD({ text, style = {} }) {
  const html = useMemo(() => {
    let t = text;
    // Bold
    t = t.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    // Bullets (lines starting with •)
    const lines = t.split("\n");
    let out = "",
      inUl = false;
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith("•")) {
        if (!inUl) {
          out += "<ul style='padding-left:18px;margin:6px 0'>";
          inUl = true;
        }
        out += `<li style='margin:4px 0;line-height:1.6'>${trimmed.slice(1).trim()}</li>`;
      } else {
        if (inUl) {
          out += "</ul>";
          inUl = false;
        }
        if (trimmed === "") out += "<div style='height:8px'></div>";
        else out += `<p style='margin:4px 0;line-height:1.7'>${trimmed}</p>`;
      }
    }
    if (inUl) out += "</ul>";
    return out;
  }, [text]);

  return (
    <div
      style={{ fontSize: 14, color: "#a8c4dc", ...style }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
