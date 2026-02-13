import React from "react";

type Props = {
  version: "v1" | "v2";
  status?: "current" | "legacy";
  note?: string;
};

export default function VersionBanner({ version, status = "current", note }: Props) {
  const isLegacy = status === "legacy";

  return (
    <div
      style={{
        borderLeft: `4px solid ${isLegacy ? "#f59e0b" : "#16a34a"}`,
        background: isLegacy ? "rgba(245, 158, 11, 0.08)" : "rgba(22, 163, 74, 0.08)",
        padding: "12px 14px",
        borderRadius: 10,
        margin: "16px 0"
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 6 }}>
        {version.toUpperCase()} {isLegacy ? "— Legacy" : "— Current"}
      </div>

      <div style={{ lineHeight: 1.5 }}>
        {note ??
          (isLegacy
            ? "You’re viewing legacy documentation. Prefer V2 for the latest features and fixes."
            : "You’re viewing the latest documentation version.")}
      </div>
    </div>
  );
}
