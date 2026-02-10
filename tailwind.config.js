/**
 * Tailwind CSS 설정 — Figma 디자인 토큰 기반
 *
 * 모든 색상·타이포그래피·스페이싱 값은 CSS 커스텀 프로퍼티(theme.css)를
 * 참조하는 theme.js 에서 가져옵니다.
 * → 헥스 코드를 직접 쓰지 않으므로, theme.css 만 수정하면 전체가 반영됩니다.
 */

const theme = require("./theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/**/*.html",
  ],

  theme: {
    /* ----------------------------------------------------------
       Font Family
       -------------------------------------------------------- */
    fontFamily: {
      sans: [theme.typography.fontFamily.sans],
      mono: [theme.typography.fontFamily.mono],
    },

    /* ----------------------------------------------------------
       Font Size  — [size, { lineHeight, letterSpacing }]
       Tailwind 유틸리티: text-xs, text-sm, …, text-3xl
       -------------------------------------------------------- */
    fontSize: {
      xs: [
        theme.typography.fontSize.xs,
        { lineHeight: theme.typography.lineHeight.normal, letterSpacing: theme.typography.letterSpacing.normal },
      ],
      sm: [
        theme.typography.fontSize.sm,
        { lineHeight: theme.typography.lineHeight.normal, letterSpacing: theme.typography.letterSpacing.normal },
      ],
      md: [
        theme.typography.fontSize.md,
        { lineHeight: theme.typography.lineHeight.tight, letterSpacing: theme.typography.letterSpacing.normal },
      ],
      lg: [
        theme.typography.fontSize.lg,
        { lineHeight: theme.typography.lineHeight.tight, letterSpacing: theme.typography.letterSpacing.tight },
      ],
      xl: [
        theme.typography.fontSize.xl,
        { lineHeight: theme.typography.lineHeight.tight, letterSpacing: theme.typography.letterSpacing.normal },
      ],
      "2xl": [
        theme.typography.fontSize["2xl"],
        { lineHeight: theme.typography.lineHeight.tight, letterSpacing: theme.typography.letterSpacing.tight },
      ],
      "3xl": [
        theme.typography.fontSize["3xl"],
        { lineHeight: theme.typography.lineHeight.tight, letterSpacing: theme.typography.letterSpacing.tighter },
      ],
    },

    /* ----------------------------------------------------------
       Font Weight
       -------------------------------------------------------- */
    fontWeight: {
      normal: theme.typography.fontWeight.regular,
      semibold: theme.typography.fontWeight.semibold,
      bold: theme.typography.fontWeight.bold,
    },

    /* ----------------------------------------------------------
       Line Height
       -------------------------------------------------------- */
    lineHeight: {
      none: theme.typography.lineHeight.none,
      tight: theme.typography.lineHeight.tight,
      normal: theme.typography.lineHeight.normal,
      code: theme.typography.lineHeight.code,
    },

    /* ----------------------------------------------------------
       Letter Spacing
       -------------------------------------------------------- */
    letterSpacing: {
      tighter: theme.typography.letterSpacing.tighter,
      tight: theme.typography.letterSpacing.tight,
      normal: theme.typography.letterSpacing.normal,
    },

    /* ----------------------------------------------------------
       Spacing  (margin, padding, gap, width, height 등에 공유)
       -------------------------------------------------------- */
    spacing: {
      0: "0",
      100: theme.spacing[100],
      200: theme.spacing[200],
      300: theme.spacing[300],
      400: theme.spacing[400],
      600: theme.spacing[600],
      800: theme.spacing[800],
      1200: theme.spacing[1200],
      1600: theme.spacing[1600],
      2400: theme.spacing[2400],
      4000: theme.spacing[4000],
    },

    /* ----------------------------------------------------------
       Border Radius
       -------------------------------------------------------- */
    borderRadius: {
      none: "0",
      100: theme.borderRadius[100],
      200: theme.borderRadius[200],
      400: theme.borderRadius[400],
      xl: theme.borderRadius.xl,
      full: theme.borderRadius.full,
    },

    /* ----------------------------------------------------------
       Box Shadow
       -------------------------------------------------------- */
    boxShadow: {
      200: theme.boxShadow[200],
      300: theme.boxShadow[300],
      none: "none",
    },

    /* ----------------------------------------------------------
       Colors (extend 로 추가)
       -------------------------------------------------------- */
    extend: {
      colors: {
        bg: theme.colors.background,
        text: theme.colors.text,
        border: theme.colors.border,
        icon: theme.colors.icon,
        slate: theme.palette.slate,
        "image-placeholder": theme.palette.imagePlaceholder,
      },

      /* Size Scale — 컴포넌트 높이, 아이콘 크기 등 */
      width: {
        "scale-03": theme.sizeScale["03"],
        "scale-06": theme.sizeScale["06"],
        "scale-07": theme.sizeScale["07"],
      },
      height: {
        "scale-03": theme.sizeScale["03"],
        "scale-06": theme.sizeScale["06"],
        "scale-07": theme.sizeScale["07"],
      },
      minWidth: {
        "scale-06": theme.sizeScale["06"],
        "scale-07": theme.sizeScale["07"],
      },
      minHeight: {
        "scale-06": theme.sizeScale["06"],
        "scale-07": theme.sizeScale["07"],
      },
      size: {
        "scale-03": theme.sizeScale["03"],
        "scale-06": theme.sizeScale["06"],
        "scale-07": theme.sizeScale["07"],
      },
    },
  },

  plugins: [],
};
