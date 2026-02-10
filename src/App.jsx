import React, { useState } from "react";
import Button from "./components/Button";
import ButtonDanger from "./components/ButtonDanger";
import IconButton from "./components/IconButton";
import InputField from "./components/InputField";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonGroup from "./components/ButtonGroup";
import {
  StarIcon,
  XIcon,
  ArrowRightIcon,
  TrashIcon,
  HeartIcon,
} from "./components/icons";

/* ── 로고 (간단한 SVG) ─────────────────────────────────── */
function Logo({ size = 35 }) {
  return (
    <svg width={size * 0.66} height={size} viewBox="0 0 24 35" fill="none">
      <path
        d="M6 0C2.686 0 0 2.686 0 6s2.686 6 6 6h6V0H6z"
        fill="var(--color-text-default)"
      />
      <path
        d="M6 12C2.686 12 0 14.686 0 18s2.686 6 6 6h6V12H6z"
        fill="var(--color-text-default)"
        opacity="0.7"
      />
      <path
        d="M6 24C2.686 24 0 26.686 0 30s2.686 5 6 5c3.314 0 6-1.686 6-5V24H6z"
        fill="var(--color-text-default)"
        opacity="0.4"
      />
      <path
        d="M12 0h6c3.314 0 6 2.686 6 6s-2.686 6-6 6h-6V0z"
        fill="var(--color-text-default)"
        opacity="0.7"
      />
      <circle cx="18" cy="18" r="6" fill="var(--color-text-default)" opacity="0.5" />
    </svg>
  );
}

/* ===================================================================
   섹션 래퍼
   =================================================================== */
function Section({ title, description, children, dark = false }) {
  return (
    <section
      style={{
        padding: "var(--space-1600) var(--space-600)",
        backgroundColor: dark ? "var(--color-bg-brand)" : "transparent",
        color: dark ? "var(--color-text-brand-on)" : "var(--color-text-default)",
      }}
    >
      <div style={{ maxWidth: "var(--device-width)", margin: "0 auto" }}>
        {title && (
          <h2
            style={{
              fontFamily: "var(--font-family-sans)",
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-semibold)",
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-tight)",
              marginBottom: "var(--space-200)",
            }}
          >
            {title}
          </h2>
        )}
        {description && (
          <p
            style={{
              fontSize: "var(--font-size-sm)",
              color: dark
                ? "var(--color-text-brand-on-tertiary)"
                : "var(--color-text-default-secondary)",
              marginBottom: "var(--space-800)",
              lineHeight: "var(--leading-normal)",
            }}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

/* ===================================================================
   색상 스와치
   =================================================================== */
function Swatch({ label, cssVar }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: "var(--radius-200)",
          backgroundColor: `var(${cssVar})`,
          border: "1px solid var(--color-border-default)",
        }}
      />
      <span
        style={{
          fontSize: 11,
          fontFamily: "var(--font-family-mono)",
          color: "var(--color-text-default-secondary)",
          textAlign: "center",
          maxWidth: 72,
          wordBreak: "break-all",
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* ===================================================================
   App
   =================================================================== */
export default function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      {/* ─────────────────────────────────────────────────────────
          HEADER
          ───────────────────────────────────────────────────────── */}
      <Header logo={<Logo />} platform="desktop" />

      {/* ─────────────────────────────────────────────────────────
          HERO
          ───────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: "var(--space-4000) var(--space-600)",
          textAlign: "center",
          backgroundColor: "var(--color-bg-default)",
        }}
      >
        <div style={{ maxWidth: "var(--device-width)", margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "var(--font-family-sans)",
              fontSize: "var(--font-size-3xl)",
              fontWeight: "var(--font-weight-bold)",
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-tighter)",
              marginBottom: "var(--space-400)",
            }}
          >
            Design System
          </h1>
          <p
            style={{
              fontSize: "var(--font-size-md)",
              fontWeight: "var(--font-weight-regular)",
              lineHeight: "var(--leading-tight)",
              color: "var(--color-text-default-secondary)",
              marginBottom: "var(--space-800)",
              maxWidth: 560,
              margin: "0 auto var(--space-800)",
            }}
          >
            Figma 토큰 기반으로 구축된 컴포넌트와 스타일을 확인해 보세요.
          </p>

          <div
            style={{
              display: "flex",
              gap: "var(--space-300)",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              label="시작하기"
              variant="primary"
              size="medium"
              iconEnd={<ArrowRightIcon size={16} />}
            />
            <Button label="더 알아보기" variant="neutral" size="medium" />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          BUTTON SHOWCASE
          ───────────────────────────────────────────────────────── */}
      <Section
        title="Button"
        description="Primary, Neutral, Subtle 베리언트 × Medium, Small 사이즈. 아이콘과 비활성화 상태를 Props로 제어합니다."
      >
        {/* --- Primary --- */}
        <h3 style={subheadingStyle}>Primary</h3>
        <div style={rowStyle}>
          <Button label="Default" variant="primary" size="medium" />
          <Button label="Small" variant="primary" size="small" />
          <Button
            label="Icon"
            variant="primary"
            size="medium"
            iconStart={<StarIcon size={16} />}
          />
          <Button label="Disabled" variant="primary" size="medium" disabled />
        </div>

        {/* --- Neutral --- */}
        <h3 style={subheadingStyle}>Neutral</h3>
        <div style={rowStyle}>
          <Button label="Default" variant="neutral" size="medium" />
          <Button label="Small" variant="neutral" size="small" />
          <Button
            label="Icon"
            variant="neutral"
            size="medium"
            iconEnd={<XIcon size={16} />}
          />
          <Button label="Disabled" variant="neutral" size="medium" disabled />
        </div>

        {/* --- Subtle --- */}
        <h3 style={subheadingStyle}>Subtle</h3>
        <div style={rowStyle}>
          <Button label="Default" variant="subtle" size="medium" />
          <Button label="Small" variant="subtle" size="small" />
          <Button
            label="Icon"
            variant="subtle"
            size="medium"
            iconStart={<ArrowRightIcon size={16} />}
          />
          <Button label="Disabled" variant="subtle" size="medium" disabled />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────
          BUTTON DANGER
          ───────────────────────────────────────────────────────── */}
      <Section
        title="Button Danger"
        description="삭제·경고 등 파괴적(destructive) 액션에 사용합니다. Primary와 Subtle 두 가지 베리언트."
      >
        <h3 style={subheadingStyle}>Primary</h3>
        <div style={rowStyle}>
          <ButtonDanger label="삭제" variant="primary" size="medium" />
          <ButtonDanger label="Small" variant="primary" size="small" />
          <ButtonDanger
            label="삭제"
            variant="primary"
            size="medium"
            iconStart={<TrashIcon size={16} />}
          />
          <ButtonDanger label="Disabled" variant="primary" size="medium" disabled />
        </div>

        <h3 style={subheadingStyle}>Subtle</h3>
        <div style={rowStyle}>
          <ButtonDanger label="취소" variant="subtle" size="medium" />
          <ButtonDanger label="Small" variant="subtle" size="small" />
          <ButtonDanger label="Disabled" variant="subtle" size="medium" disabled />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────
          ICON BUTTON
          ───────────────────────────────────────────────────────── */}
      <Section
        title="Icon Button"
        description="아이콘만 표시하는 원형 버튼. Primary, Neutral, Subtle 베리언트 × Medium, Small 사이즈."
      >
        <div style={rowStyle}>
          <div style={iconGroupStyle}>
            <span style={labelStyle}>Primary</span>
            <div style={{ display: "flex", gap: "var(--space-300)", alignItems: "center" }}>
              <IconButton icon={<StarIcon size={20} />} variant="primary" size="medium" ariaLabel="Star" />
              <IconButton icon={<StarIcon size={20} />} variant="primary" size="small" ariaLabel="Star" />
              <IconButton icon={<StarIcon size={20} />} variant="primary" size="medium" disabled ariaLabel="Star" />
            </div>
          </div>

          <div style={iconGroupStyle}>
            <span style={labelStyle}>Neutral</span>
            <div style={{ display: "flex", gap: "var(--space-300)", alignItems: "center" }}>
              <IconButton icon={<HeartIcon size={20} />} variant="neutral" size="medium" ariaLabel="Heart" />
              <IconButton icon={<HeartIcon size={20} />} variant="neutral" size="small" ariaLabel="Heart" />
              <IconButton icon={<HeartIcon size={20} />} variant="neutral" size="medium" disabled ariaLabel="Heart" />
            </div>
          </div>

          <div style={iconGroupStyle}>
            <span style={labelStyle}>Subtle</span>
            <div style={{ display: "flex", gap: "var(--space-300)", alignItems: "center" }}>
              <IconButton icon={<XIcon size={20} />} variant="subtle" size="medium" ariaLabel="Close" />
              <IconButton icon={<XIcon size={20} />} variant="subtle" size="small" ariaLabel="Close" />
              <IconButton icon={<XIcon size={20} />} variant="subtle" size="medium" disabled ariaLabel="Close" />
            </div>
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────
          TYPOGRAPHY
          ───────────────────────────────────────────────────────── */}
      <Section
        title="Typography"
        description="Figma에서 추출한 타이포그래피 스케일. Inter 폰트 기반, 7단계 크기."
        dark
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-600)" }}>
          {[
            {
              name: "Title Hero",
              style: {
                fontSize: "var(--font-size-3xl)",
                fontWeight: "var(--font-weight-bold)",
                lineHeight: "var(--leading-tight)",
                letterSpacing: "var(--tracking-tighter)",
              },
            },
            {
              name: "Title Page",
              style: {
                fontSize: "var(--font-size-2xl)",
                fontWeight: "var(--font-weight-bold)",
                lineHeight: "var(--leading-tight)",
                letterSpacing: "var(--tracking-tight)",
              },
            },
            {
              name: "Subtitle",
              style: {
                fontSize: "var(--font-size-xl)",
                fontWeight: "var(--font-weight-regular)",
                lineHeight: "var(--leading-tight)",
              },
            },
            {
              name: "Heading",
              style: {
                fontSize: "var(--font-size-lg)",
                fontWeight: "var(--font-weight-semibold)",
                lineHeight: "var(--leading-tight)",
                letterSpacing: "var(--tracking-tight)",
              },
            },
            {
              name: "Subheading",
              style: {
                fontSize: "var(--font-size-md)",
                fontWeight: "var(--font-weight-regular)",
                lineHeight: "var(--leading-tight)",
              },
            },
            {
              name: "Body Base",
              style: {
                fontSize: "var(--font-size-sm)",
                fontWeight: "var(--font-weight-regular)",
                lineHeight: "var(--leading-normal)",
              },
            },
            {
              name: "Body Small",
              style: {
                fontSize: "var(--font-size-xs)",
                fontWeight: "var(--font-weight-regular)",
                lineHeight: "var(--leading-normal)",
              },
            },
          ].map((t) => (
            <div key={t.name} style={{ display: "flex", alignItems: "baseline", gap: "var(--space-600)" }}>
              <span
                style={{
                  width: 120,
                  flexShrink: 0,
                  fontSize: "var(--font-size-xs)",
                  fontFamily: "var(--font-family-mono)",
                  opacity: 0.6,
                }}
              >
                {t.name}
              </span>
              <span style={{ fontFamily: "var(--font-family-sans)", ...t.style }}>
                디자인 시스템 Aa
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────
          COLOR PALETTE
          ───────────────────────────────────────────────────────── */}
      <Section
        title="Color Palette"
        description="theme.css에 정의된 주요 색상 토큰. 모든 컴포넌트가 이 변수를 참조합니다."
      >
        {/* Background */}
        <h3 style={subheadingStyle}>Background</h3>
        <div style={swatchRowStyle}>
          <Swatch label="Brand" cssVar="--color-bg-brand" />
          <Swatch label="Brand Hover" cssVar="--color-bg-brand-hover" />
          <Swatch label="Neutral" cssVar="--color-bg-neutral" />
          <Swatch label="Neutral Tert." cssVar="--color-bg-neutral-tertiary" />
          <Swatch label="Positive" cssVar="--color-bg-positive" />
          <Swatch label="Warning" cssVar="--color-bg-warning" />
          <Swatch label="Danger" cssVar="--color-bg-danger" />
          <Swatch label="Disabled" cssVar="--color-bg-disabled" />
        </div>

        {/* Text */}
        <h3 style={{ ...subheadingStyle, marginTop: "var(--space-800)" }}>Text</h3>
        <div style={swatchRowStyle}>
          <Swatch label="Default" cssVar="--color-text-default" />
          <Swatch label="Secondary" cssVar="--color-text-default-secondary" />
          <Swatch label="Tertiary" cssVar="--color-text-default-tertiary" />
          <Swatch label="Brand" cssVar="--color-text-brand" />
          <Swatch label="Positive" cssVar="--color-text-positive" />
          <Swatch label="Warning" cssVar="--color-text-warning" />
          <Swatch label="Danger" cssVar="--color-text-danger" />
          <Swatch label="Disabled" cssVar="--color-text-disabled" />
        </div>

        {/* Border */}
        <h3 style={{ ...subheadingStyle, marginTop: "var(--space-800)" }}>Border</h3>
        <div style={swatchRowStyle}>
          <Swatch label="Default" cssVar="--color-border-default" />
          <Swatch label="Brand" cssVar="--color-border-brand" />
          <Swatch label="Neutral" cssVar="--color-border-neutral" />
          <Swatch label="Positive" cssVar="--color-border-positive" />
          <Swatch label="Warning" cssVar="--color-border-warning" />
          <Swatch label="Danger" cssVar="--color-border-danger" />
          <Swatch label="Disabled" cssVar="--color-border-disabled" />
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────
          SPACING & RADIUS
          ───────────────────────────────────────────────────────── */}
      <Section
        title="Spacing & Radius"
        description="토큰으로 정의된 간격(Space)과 테두리 곡률(Radius) 시각화."
      >
        <h3 style={subheadingStyle}>Spacing Scale</h3>
        <div style={{ display: "flex", gap: "var(--space-300)", alignItems: "flex-end", flexWrap: "wrap" }}>
          {[
            { label: "100", size: "var(--space-100)" },
            { label: "200", size: "var(--space-200)" },
            { label: "300", size: "var(--space-300)" },
            { label: "400", size: "var(--space-400)" },
            { label: "600", size: "var(--space-600)" },
            { label: "800", size: "var(--space-800)" },
            { label: "1200", size: "var(--space-1200)" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <div
                style={{
                  width: s.size,
                  height: s.size,
                  backgroundColor: "var(--color-bg-brand)",
                  borderRadius: "var(--radius-100)",
                }}
              />
              <span style={{ fontSize: 11, fontFamily: "var(--font-family-mono)", color: "var(--color-text-default-secondary)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <h3 style={{ ...subheadingStyle, marginTop: "var(--space-800)" }}>Border Radius</h3>
        <div style={{ display: "flex", gap: "var(--space-600)", alignItems: "center", flexWrap: "wrap" }}>
          {[
            { label: "100 (4px)", radius: "var(--radius-100)" },
            { label: "200 (8px)", radius: "var(--radius-200)" },
            { label: "400 (16px)", radius: "var(--radius-400)" },
            { label: "xl (24px)", radius: "var(--radius-xl)" },
            { label: "full", radius: "var(--radius-full)" },
          ].map((r) => (
            <div key={r.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  backgroundColor: "var(--color-bg-neutral-tertiary)",
                  border: "2px solid var(--color-border-neutral-secondary)",
                  borderRadius: r.radius,
                }}
              />
              <span style={{ fontSize: 11, fontFamily: "var(--font-family-mono)", color: "var(--color-text-default-secondary)" }}>
                {r.label}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────
          INPUT FIELD
          ───────────────────────────────────────────────────────── */}
      <Section
        title="Input Field"
        description="Default, Error, Disabled 상태를 Props로 제어합니다. label, placeholder, error 텍스트를 변경할 수 있습니다."
      >
        <div style={{ display: "flex", gap: "var(--space-800)", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 200px", maxWidth: 320 }}>
            <h3 style={subheadingStyle}>Default</h3>
            <InputField
              label="Label"
              placeholder="Placeholder"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div style={{ flex: "1 1 200px", maxWidth: 320 }}>
            <h3 style={subheadingStyle}>With Value</h3>
            <InputField
              label="Label"
              value="Hello World"
              description="설명 텍스트입니다."
            />
          </div>
          <div style={{ flex: "1 1 200px", maxWidth: 320 }}>
            <h3 style={subheadingStyle}>Error</h3>
            <InputField
              label="Label"
              value="잘못된 값"
              error="에러 메시지입니다."
            />
          </div>
          <div style={{ flex: "1 1 200px", maxWidth: 320 }}>
            <h3 style={subheadingStyle}>Disabled</h3>
            <InputField
              label="Label"
              value="비활성화"
              disabled
            />
          </div>
          <div style={{ flex: "1 1 200px", maxWidth: 320 }}>
            <h3 style={subheadingStyle}>Disabled Placeholder</h3>
            <InputField
              label="Label"
              placeholder="입력 불가"
              disabled
            />
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────
          BUTTON GROUP
          ───────────────────────────────────────────────────────── */}
      <Section
        title="Button Group"
        description="버튼 정렬 레이아웃을 제어합니다. Justify, Start, End, Center, Stack 5가지 정렬 방식."
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-800)" }}>
          {["justify", "start", "end", "center", "stack"].map((align) => (
            <div key={align} style={{ maxWidth: 400 }}>
              <h3 style={subheadingStyle}>{align}</h3>
              <ButtonGroup align={align}>
                <Button label="Button" variant="subtle" />
                <Button label="Button" variant="primary" />
              </ButtonGroup>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────
          FOOTER
          ───────────────────────────────────────────────────────── */}
      <Footer logo={<Logo />} platform="desktop" />
    </div>
  );
}

/* ===================================================================
   공유 인라인 스타일
   =================================================================== */
const subheadingStyle = {
  fontSize: "var(--font-size-xs)",
  fontWeight: "var(--font-weight-semibold)",
  fontFamily: "var(--font-family-mono)",
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: "var(--color-text-default-secondary)",
  marginBottom: "var(--space-300)",
  marginTop: "var(--space-600)",
};

const rowStyle = {
  display: "flex",
  gap: "var(--space-300)",
  alignItems: "center",
  flexWrap: "wrap",
  marginBottom: "var(--space-400)",
};

const swatchRowStyle = {
  display: "flex",
  gap: "var(--space-400)",
  flexWrap: "wrap",
};

const iconGroupStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-200)",
};

const labelStyle = {
  fontSize: "var(--font-size-xs)",
  fontFamily: "var(--font-family-mono)",
  color: "var(--color-text-default-secondary)",
};
