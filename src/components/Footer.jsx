import React from "react";

/**
 * Footer 컴포넌트
 *
 * @param {React.ReactNode}   logo        - 로고 요소
 * @param {React.ReactNode[]} socialIcons - 소셜 미디어 아이콘 배열
 * @param {{ title: string, links: string[] }[]} linkGroups - 링크 그룹 배열
 * @param {"desktop"|"mobile"} platform   - 플랫폼 (기본: "desktop")
 * @param {string}            className   - 추가 클래스
 */

const DEFAULT_LINK_GROUPS = [
  {
    title: "Use cases",
    links: [
      "UI design",
      "UX design",
      "Wireframing",
      "Diagramming",
      "Brainstorming",
      "Online whiteboard",
      "Team collaboration",
    ],
  },
  {
    title: "Explore",
    links: [
      "Design",
      "Prototyping",
      "Development features",
      "Design systems",
      "Collaboration features",
      "Design process",
      "FigJam",
    ],
  },
  {
    title: "Resources",
    links: [
      "Blog",
      "Best practices",
      "Colors",
      "Color wheel",
      "Support",
      "Developers",
      "Resource library",
    ],
  },
];

const textStyle = {
  fontFamily: "var(--font-family-sans)",
  fontWeight: "var(--font-weight-regular)",
  fontSize: "var(--font-size-sm)",
  lineHeight: "var(--leading-normal)",
  color: "var(--color-text-default)",
  margin: 0,
};

const titleStyle = {
  ...textStyle,
  fontWeight: "var(--font-weight-semibold)",
  paddingBottom: "var(--space-400)",
};

function LinkList({ title, links, mobile = false }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: mobile ? "var(--space-200)" : "var(--space-300)",
        alignItems: "flex-start",
        width: mobile ? "100%" : 262,
        flexShrink: 0,
      }}
    >
      <p
        style={{
          ...titleStyle,
          fontWeight: mobile ? "var(--font-weight-bold)" : "var(--font-weight-semibold)",
          paddingBottom: mobile ? "var(--space-100)" : "var(--space-400)",
        }}
      >
        {title}
      </p>
      {links.map((link) => (
        <a
          key={link}
          href="#"
          style={{
            ...textStyle,
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          {link}
        </a>
      ))}
    </div>
  );
}

export default function Footer({
  logo = null,
  socialIcons = [],
  linkGroups = DEFAULT_LINK_GROUPS,
  platform = "desktop",
  className = "",
}) {
  const isDesktop = platform === "desktop";

  return (
    <footer
      className={className}
      style={{
        display: "flex",
        flexDirection: isDesktop ? "row" : "column",
        flexWrap: isDesktop ? "wrap" : undefined,
        alignItems: "flex-start",
        gap: isDesktop ? "var(--space-400)" : "var(--space-1600)",
        padding: isDesktop
          ? "var(--space-800) var(--space-800) var(--space-4000)"
          : "var(--space-800)",
        maxWidth: "var(--device-width)",
        margin: "0 auto",
        backgroundColor: "var(--color-bg-default)",
        borderTop: "var(--border-width) solid var(--color-border-default)",
        width: "100%",
      }}
    >
      {/* 로고 + 소셜 */}
      <div
        style={{
          display: "flex",
          flexDirection: isDesktop ? "column" : "row",
          alignItems: isDesktop ? "flex-start" : "center",
          justifyContent: isDesktop ? "flex-start" : "space-between",
          gap: isDesktop ? "var(--space-600)" : undefined,
          width: isDesktop ? 262 : "100%",
          minWidth: 240,
          flexShrink: 0,
        }}
      >
        <div style={{ flexShrink: 0 }}>{logo}</div>

        {socialIcons.length > 0 && (
          <div
            style={{
              display: "flex",
              gap: "var(--space-400)",
              alignItems: "center",
            }}
          >
            {socialIcons.map((icon, i) => (
              <span key={i} style={{ display: "inline-flex" }}>
                {icon}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* 링크 그룹 */}
      {isDesktop ? (
        linkGroups.map((group) => (
          <LinkList key={group.title} title={group.title} links={group.links} />
        ))
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-600)",
            width: "100%",
          }}
        >
          {linkGroups.map((group) => (
            <LinkList
              key={group.title}
              title={group.title}
              links={group.links}
              mobile
            />
          ))}
        </div>
      )}
    </footer>
  );
}
