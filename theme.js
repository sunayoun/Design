/**
 * Design Tokens — Figma 변수에서 추출
 *
 * 이 파일은 Figma 디자인 시스템의 모든 토큰을 JS 객체로 관리합니다.
 * tailwind.config.js 에서 이 토큰을 import 하여 사용합니다.
 * 실제 값(hex 등)은 theme.css 의 CSS 커스텀 프로퍼티에 정의되어 있고,
 * 여기서는 CSS 변수명을 매핑합니다.
 */

// ---------------------------------------------------------------------------
// Colors
// ---------------------------------------------------------------------------
const colors = {
  background: {
    default: {
      DEFAULT: "var(--color-bg-default)",
      hover: "var(--color-bg-default-hover)",
      secondary: "var(--color-bg-default-secondary)",
      "secondary-hover": "var(--color-bg-default-secondary-hover)",
      tertiary: "var(--color-bg-default-tertiary)",
      "tertiary-hover": "var(--color-bg-default-tertiary-hover)",
    },
    disabled: "var(--color-bg-disabled)",
    brand: {
      DEFAULT: "var(--color-bg-brand)",
      hover: "var(--color-bg-brand-hover)",
      secondary: "var(--color-bg-brand-secondary)",
      "secondary-hover": "var(--color-bg-brand-secondary-hover)",
      tertiary: "var(--color-bg-brand-tertiary)",
    },
    neutral: {
      DEFAULT: "var(--color-bg-neutral)",
      hover: "var(--color-bg-neutral-hover)",
      secondary: "var(--color-bg-neutral-secondary)",
      "secondary-hover": "var(--color-bg-neutral-secondary-hover)",
      tertiary: "var(--color-bg-neutral-tertiary)",
      "tertiary-hover": "var(--color-bg-neutral-tertiary-hover)",
    },
    positive: {
      DEFAULT: "var(--color-bg-positive)",
      hover: "var(--color-bg-positive-hover)",
      secondary: "var(--color-bg-positive-secondary)",
      "secondary-hover": "var(--color-bg-positive-secondary-hover)",
      tertiary: "var(--color-bg-positive-tertiary)",
      "tertiary-hover": "var(--color-bg-positive-tertiary-hover)",
    },
    warning: {
      DEFAULT: "var(--color-bg-warning)",
      hover: "var(--color-bg-warning-hover)",
      secondary: "var(--color-bg-warning-secondary)",
      tertiary: "var(--color-bg-warning-tertiary)",
      "tertiary-hover": "var(--color-bg-warning-tertiary-hover)",
    },
    danger: {
      DEFAULT: "var(--color-bg-danger)",
      hover: "var(--color-bg-danger-hover)",
      secondary: "var(--color-bg-danger-secondary)",
      "secondary-hover": "var(--color-bg-danger-secondary-hover)",
      tertiary: "var(--color-bg-danger-tertiary)",
      "tertiary-hover": "var(--color-bg-danger-tertiary-hover)",
    },
    utilities: {
      scrim: "var(--color-bg-scrim)",
      blanket: "var(--color-bg-blanket)",
      overlay: "var(--color-bg-overlay)",
      measurement: "var(--color-bg-measurement)",
    },
  },

  text: {
    default: {
      DEFAULT: "var(--color-text-default)",
      secondary: "var(--color-text-default-secondary)",
      tertiary: "var(--color-text-default-tertiary)",
    },
    disabled: {
      DEFAULT: "var(--color-text-disabled)",
      on: "var(--color-text-disabled-on)",
    },
    brand: {
      DEFAULT: "var(--color-text-brand)",
      secondary: "var(--color-text-brand-secondary)",
      tertiary: "var(--color-text-brand-tertiary)",
      on: "var(--color-text-brand-on)",
      "on-secondary": "var(--color-text-brand-on-secondary)",
      "on-tertiary": "var(--color-text-brand-on-tertiary)",
    },
    neutral: {
      DEFAULT: "var(--color-text-neutral)",
      secondary: "var(--color-text-neutral-secondary)",
      tertiary: "var(--color-text-neutral-tertiary)",
      on: "var(--color-text-neutral-on)",
      "on-secondary": "var(--color-text-neutral-on-secondary)",
      "on-tertiary": "var(--color-text-neutral-on-tertiary)",
    },
    positive: {
      DEFAULT: "var(--color-text-positive)",
      secondary: "var(--color-text-positive-secondary)",
      tertiary: "var(--color-text-positive-tertiary)",
      on: "var(--color-text-positive-on)",
      "on-secondary": "var(--color-text-positive-on-secondary)",
      "on-tertiary": "var(--color-text-positive-on-tertiary)",
    },
    warning: {
      DEFAULT: "var(--color-text-warning)",
      secondary: "var(--color-text-warning-secondary)",
      tertiary: "var(--color-text-warning-tertiary)",
      on: "var(--color-text-warning-on)",
      "on-secondary": "var(--color-text-warning-on-secondary)",
      "on-tertiary": "var(--color-text-warning-on-tertiary)",
    },
    danger: {
      DEFAULT: "var(--color-text-danger)",
      secondary: "var(--color-text-danger-secondary)",
      tertiary: "var(--color-text-danger-tertiary)",
      on: "var(--color-text-danger-on)",
      "on-secondary": "var(--color-text-danger-on-secondary)",
      "on-tertiary": "var(--color-text-danger-on-tertiary)",
    },
  },

  border: {
    default: {
      DEFAULT: "var(--color-border-default)",
      secondary: "var(--color-border-default-secondary)",
      tertiary: "var(--color-border-default-tertiary)",
    },
    disabled: "var(--color-border-disabled)",
    brand: {
      DEFAULT: "var(--color-border-brand)",
      secondary: "var(--color-border-brand-secondary)",
      tertiary: "var(--color-border-brand-tertiary)",
    },
    neutral: {
      DEFAULT: "var(--color-border-neutral)",
      secondary: "var(--color-border-neutral-secondary)",
      tertiary: "var(--color-border-neutral-tertiary)",
    },
    positive: {
      DEFAULT: "var(--color-border-positive)",
      secondary: "var(--color-border-positive-secondary)",
      tertiary: "var(--color-border-positive-tertiary)",
    },
    warning: {
      DEFAULT: "var(--color-border-warning)",
      secondary: "var(--color-border-warning-secondary)",
      tertiary: "var(--color-border-warning-tertiary)",
    },
    danger: {
      DEFAULT: "var(--color-border-danger)",
      secondary: "var(--color-border-danger-secondary)",
      tertiary: "var(--color-border-danger-tertiary)",
    },
    swatch: "var(--color-border-swatch)",
  },

  icon: {
    default: {
      DEFAULT: "var(--color-icon-default)",
      secondary: "var(--color-icon-default-secondary)",
      tertiary: "var(--color-icon-default-tertiary)",
    },
    disabled: "var(--color-icon-disabled)",
    brand: {
      DEFAULT: "var(--color-icon-brand)",
      secondary: "var(--color-icon-brand-secondary)",
      on: "var(--color-icon-brand-on)",
      "on-secondary": "var(--color-icon-brand-on-secondary)",
      "on-tertiary": "var(--color-icon-brand-on-tertiary)",
    },
    neutral: {
      DEFAULT: "var(--color-icon-neutral)",
      secondary: "var(--color-icon-neutral-secondary)",
      tertiary: "var(--color-icon-neutral-tertiary)",
      on: "var(--color-icon-neutral-on)",
      "on-secondary": "var(--color-icon-neutral-on-secondary)",
      "on-tertiary": "var(--color-icon-neutral-on-tertiary)",
    },
    positive: {
      DEFAULT: "var(--color-icon-positive)",
      secondary: "var(--color-icon-positive-secondary)",
      tertiary: "var(--color-icon-positive-tertiary)",
      on: "var(--color-icon-positive-on)",
      "on-secondary": "var(--color-icon-positive-on-secondary)",
      "on-tertiary": "var(--color-icon-positive-on-tertiary)",
    },
    warning: {
      DEFAULT: "var(--color-icon-warning)",
      secondary: "var(--color-icon-warning-secondary)",
      tertiary: "var(--color-icon-warning-tertiary)",
      on: "var(--color-icon-warning-on)",
      "on-secondary": "var(--color-icon-warning-on-secondary)",
      "on-tertiary": "var(--color-icon-warning-on-tertiary)",
    },
    danger: {
      DEFAULT: "var(--color-icon-danger)",
      secondary: "var(--color-icon-danger-secondary)",
      tertiary: "var(--color-icon-danger-tertiary)",
      on: "var(--color-icon-danger-on)",
      "on-secondary": "var(--color-icon-danger-on-secondary)",
      "on-tertiary": "var(--color-icon-danger-on-tertiary)",
    },
  },
};

// ---------------------------------------------------------------------------
// Typography
// ---------------------------------------------------------------------------
const typography = {
  fontFamily: {
    sans: "var(--font-family-sans)",
    mono: "var(--font-family-mono)",
  },
  fontSize: {
    xs: "var(--font-size-xs)",         // 14px — Body Small
    sm: "var(--font-size-sm)",         // 16px — Body Base
    md: "var(--font-size-md)",         // 20px — Subheading
    lg: "var(--font-size-lg)",         // 24px — Heading
    xl: "var(--font-size-xl)",         // 32px — Subtitle
    "2xl": "var(--font-size-2xl)",     // 48px — Title Page
    "3xl": "var(--font-size-3xl)",     // 72px — Title Hero
  },
  fontWeight: {
    regular: "var(--font-weight-regular)",     // 400
    semibold: "var(--font-weight-semibold)",   // 600
    bold: "var(--font-weight-bold)",           // 700
  },
  lineHeight: {
    tight: "var(--leading-tight)",     // 1.2 — Headings
    normal: "var(--leading-normal)",   // 1.4 — Body
    code: "var(--leading-code)",       // 1.3 — Code
    none: "var(--leading-none)",       // 1   — Single-line
  },
  letterSpacing: {
    tighter: "var(--tracking-tighter)",  // -3px
    tight: "var(--tracking-tight)",      // -2px
    normal: "var(--tracking-normal)",    // 0px
  },
};

// ---------------------------------------------------------------------------
// Spacing
// ---------------------------------------------------------------------------
const spacing = {
  100: "var(--space-100)",     // 4px
  200: "var(--space-200)",     // 8px
  300: "var(--space-300)",     // 12px
  400: "var(--space-400)",     // 16px
  600: "var(--space-600)",     // 24px
  800: "var(--space-800)",     // 32px
  1200: "var(--space-1200)",   // 48px
  1600: "var(--space-1600)",   // 64px
  2400: "var(--space-2400)",   // 96px
  4000: "var(--space-4000)",   // 160px
};

// ---------------------------------------------------------------------------
// Border Radius
// ---------------------------------------------------------------------------
const borderRadius = {
  100: "var(--radius-100)",    // 4px
  200: "var(--radius-200)",    // 8px
  400: "var(--radius-400)",    // 16px
  xl: "var(--radius-xl)",      // 24px
  full: "var(--radius-full)",  // 9999px
};

// ---------------------------------------------------------------------------
// Size Scale (컴포넌트 크기 기준값)
// ---------------------------------------------------------------------------
const sizeScale = {
  "03": "var(--size-scale-03)",   // 16px — 아이콘 기본 크기
  "06": "var(--size-scale-06)",   // 32px — Small 컴포넌트 높이
  "07": "var(--size-scale-07)",   // 40px — Medium 컴포넌트 높이
};

// ---------------------------------------------------------------------------
// Typography Composites (Figma에서 정의된 복합 텍스트 스타일)
// ---------------------------------------------------------------------------
const typographyComposites = {
  "title-hero": {
    fontFamily: "var(--font-family-sans)",
    fontSize: "var(--font-size-3xl)",       // 72px
    fontWeight: "var(--font-weight-bold)",   // 700
    lineHeight: "var(--leading-tight)",      // 1.2
    letterSpacing: "var(--tracking-tighter)",// -3px
  },
  "title-page": {
    fontFamily: "var(--font-family-sans)",
    fontSize: "var(--font-size-2xl)",       // 48px
    fontWeight: "var(--font-weight-bold)",   // 700
    lineHeight: "var(--leading-tight)",
    letterSpacing: "var(--tracking-tight)",  // -2px
  },
  subtitle: {
    fontFamily: "var(--font-family-sans)",
    fontSize: "var(--font-size-xl)",        // 32px
    fontWeight: "var(--font-weight-regular)",
    lineHeight: "var(--leading-tight)",
    letterSpacing: "var(--tracking-normal)",
  },
  heading: {
    fontFamily: "var(--font-family-sans)",
    fontSize: "var(--font-size-lg)",        // 24px
    fontWeight: "var(--font-weight-semibold)",// 600
    lineHeight: "var(--leading-tight)",
    letterSpacing: "var(--tracking-tight)",
  },
  subheading: {
    fontFamily: "var(--font-family-sans)",
    fontSize: "var(--font-size-md)",        // 20px
    fontWeight: "var(--font-weight-regular)",
    lineHeight: "var(--leading-tight)",
    letterSpacing: "var(--tracking-normal)",
  },
  "body-base": {
    fontFamily: "var(--font-family-sans)",
    fontSize: "var(--font-size-sm)",        // 16px
    fontWeight: "var(--font-weight-regular)",
    lineHeight: "var(--leading-normal)",     // 1.4
    letterSpacing: "var(--tracking-normal)",
  },
  "body-strong": {
    fontFamily: "var(--font-family-sans)",
    fontSize: "var(--font-size-sm)",        // 16px
    fontWeight: "var(--font-weight-semibold)",// 600
    lineHeight: "var(--leading-normal)",
    letterSpacing: "var(--tracking-normal)",
  },
  "body-small": {
    fontFamily: "var(--font-family-sans)",
    fontSize: "var(--font-size-xs)",        // 14px
    fontWeight: "var(--font-weight-regular)",
    lineHeight: "var(--leading-normal)",
    letterSpacing: "var(--tracking-normal)",
  },
  "body-small-strong": {
    fontFamily: "var(--font-family-sans)",
    fontSize: "var(--font-size-xs)",        // 14px
    fontWeight: "var(--font-weight-semibold)",
    lineHeight: "var(--leading-normal)",
    letterSpacing: "var(--tracking-normal)",
  },
  "single-line-body": {
    fontFamily: "var(--font-family-sans)",
    fontSize: "var(--font-size-sm)",        // 16px
    fontWeight: "var(--font-weight-regular)",
    lineHeight: "var(--leading-none)",       // 1
    letterSpacing: "var(--tracking-normal)",
  },
  "body-code": {
    fontFamily: "var(--font-family-mono)",
    fontSize: "var(--font-size-sm)",        // 16px
    fontWeight: "var(--font-weight-regular)",
    lineHeight: "var(--leading-code)",       // 1.3
    letterSpacing: "var(--tracking-normal)",
  },
};

// ---------------------------------------------------------------------------
// Palette (원시 색상)
// ---------------------------------------------------------------------------
const palette = {
  slate: {
    200: "var(--color-slate-200)",
  },
  imagePlaceholder: "var(--color-image-placeholder)",
};

// ---------------------------------------------------------------------------
// Shadows
// ---------------------------------------------------------------------------
const boxShadow = {
  200: "var(--shadow-200)",
  300: "var(--shadow-300)",
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------
module.exports = {
  colors,
  typography,
  typographyComposites,
  spacing,
  sizeScale,
  borderRadius,
  boxShadow,
  palette,
};
