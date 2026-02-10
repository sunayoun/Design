import React, { useState } from "react";
import Button from "./Button";

/**
 * Header 컴포넌트
 *
 * @param {React.ReactNode} logo      - 로고 요소
 * @param {string[]}        navItems  - 내비게이션 링크 라벨 배열
 * @param {{ signIn: string, register: string }} authButtons - 인증 버튼 라벨
 * @param {"desktop"|"mobile"} platform - 플랫폼 (기본: "desktop")
 * @param {string}          className - 추가 클래스
 */

const DEFAULT_NAV = [
  "Products",
  "Solutions",
  "Community",
  "Resources",
  "Pricing",
  "Contact",
];

/* ── 아이콘 ────────────────────────────────────────────── */
function MenuIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ── 내비게이션 Pill ─────────────────────────────────────── */
function NavPill({ label, active = false, style: extraStyle }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--space-200)",
        borderRadius: "var(--radius-200)",
        fontFamily: "var(--font-family-sans)",
        fontWeight: "var(--font-weight-regular)",
        fontSize: "var(--font-size-sm)",
        lineHeight: "var(--leading-none)",
        color: "var(--color-text-default)",
        cursor: "pointer",
        whiteSpace: "nowrap",
        backgroundColor:
          active
            ? "var(--color-bg-brand-tertiary)"
            : hovered
              ? "var(--color-bg-default-hover)"
              : "transparent",
        transition: "background-color 0.15s ease",
        ...extraStyle,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </span>
  );
}

/* ── Header 본체 ─────────────────────────────────────────── */
export default function Header({
  logo = null,
  navItems = DEFAULT_NAV,
  authButtons = { signIn: "Sign in", register: "Register" },
  platform = "desktop",
  className = "",
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDesktop = platform === "desktop";

  /* ── Desktop ─────────────────────────────────────────── */
  if (isDesktop) {
    return (
      <header
        className={className}
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "var(--space-600)",
          padding: "var(--space-800)",
          maxWidth: "var(--device-width)",
          margin: "0 auto",
          backgroundColor: "var(--color-bg-default)",
          borderBottom: "var(--border-width) solid var(--color-border-default)",
        }}
      >
        {/* 로고 */}
        <div style={{ flexShrink: 0 }}>{logo}</div>

        {/* 내비 */}
        <nav
          style={{
            display: "flex",
            flex: "1 0 0",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            gap: "var(--space-200)",
          }}
        >
          {navItems.map((item, i) => (
            <NavPill key={item} label={item} active={i === 0} />
          ))}
        </nav>

        {/* 인증 */}
        <div style={{ display: "flex", gap: "var(--space-300)", flexShrink: 0 }}>
          <Button label={authButtons.signIn} variant="neutral" size="small" />
          <Button label={authButtons.register} variant="primary" size="small" />
        </div>
      </header>
    );
  }

  /* ── Mobile ──────────────────────────────────────────── */
  return (
    <header
      className={className}
      style={{
        display: "flex",
        flexDirection: mobileOpen ? "column" : "row",
        alignItems: mobileOpen ? "stretch" : "center",
        justifyContent: mobileOpen ? "flex-start" : "space-between",
        gap: mobileOpen ? "var(--space-1600)" : undefined,
        padding: mobileOpen
          ? "var(--space-800) var(--space-600)"
          : "var(--space-600)",
        backgroundColor: "var(--color-bg-default)",
        borderBottom: mobileOpen
          ? "none"
          : "var(--border-width) solid var(--color-border-default)",
        width: "100%",
        minHeight: mobileOpen ? "100vh" : undefined,
      }}
    >
      {/* 상단 바 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ flexShrink: 0 }}>{logo}</div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "var(--space-200)",
            borderRadius: "var(--radius-full)",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            color: "var(--color-icon-default)",
          }}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* 열림 상태 */}
      {mobileOpen && (
        <>
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "var(--space-200)",
              width: "100%",
            }}
          >
            {navItems.map((item, i) => (
              <NavPill
                key={item}
                label={item}
                active={i === 1}
                style={{ width: "100%", justifyContent: "center" }}
              />
            ))}
          </nav>

          <div style={{ display: "flex", gap: "var(--space-300)", width: "100%" }}>
            <Button
              label={authButtons.signIn}
              variant="neutral"
              size="small"
              style={{ flex: 1 }}
            />
            <Button
              label={authButtons.register}
              variant="primary"
              size="small"
              style={{ flex: 1 }}
            />
          </div>
        </>
      )}
    </header>
  );
}
