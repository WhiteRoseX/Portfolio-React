
import React from "react";

const themes = {
    projects: {
        primary: "rgba(20, 184, 166, 0.11)",
        secondary: "rgba(51, 102, 153, 0.08)",
    },
    formation: {
        primary: "rgba(45, 130, 158, 0.12)",
        secondary: "rgba(99, 102, 241, 0.06)",
    },
    experience: {
        primary: "rgba(59, 130, 246, 0.10)",
        secondary: "rgba(20, 184, 166, 0.07)",
    },
    about: {
        primary: "rgba(20, 184, 166, 0.08)",
        secondary: "rgba(125, 85, 155, 0.07)",
    },
};

export default function SectionBackground({
    variant = "formation",
}) {
    const theme = themes[variant] || themes.formation;

    return (
        <div
            aria-hidden="true"
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
                background: `
          radial-gradient(
            ellipse 90% 80% at 50% 45%,
            transparent 35%,
            rgba(5, 10, 22, 0.28) 100%
          ),
          radial-gradient(
            ellipse 65% 55% at 12% 20%,
            ${theme.primary} 0%,
            transparent 75%
          ),
          radial-gradient(
            ellipse 55% 50% at 88% 85%,
            ${theme.secondary} 0%,
            transparent 75%
          ),
          linear-gradient(
            180deg,
            #1A2434 0%,
            #171E2D 55%,
            #111827 100%
          )
        `,
            }}
        />
    );
}
