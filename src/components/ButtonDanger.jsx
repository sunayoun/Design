import React from "react";

/**
 * ButtonDanger 컴포넌트
 *
 * 삭제·경고 등 파괴적(destructive) 액션에 사용하는 버튼입니다.
 * Figma 디자인 시스템 기반 — theme.css 의 CSS 커스텀 프로퍼티를 사용합니다.
 *
 * @param {string}  label       - 버튼 텍스트 (기본값: "Button")
 * @param {"primary"|"subtle"}  variant - 베리언트 (기본값: "primary")
 * @param {"medium"|"small"}    size    - 크기 (기본값: "medium")
 * @param {boolean} disabled    - 비활성화 여부
 * @param {React.ReactNode|null} iconStart - 왼쪽 아이콘
 * @param {React.ReactNode|null} iconEnd   - 오른쪽 아이콘
 * @param {string}  className   - 추가 클래스명
 * @param {function} onClick    - 클릭 핸들러
 */

const variantStyles = {
  primary: {
    base: {
      backgroundColor: "var(--color-bg-danger)",
      color: "var(--color-text-danger-on)",
      borderColor: "var(--color-border-danger-secondary)",
    },
    hover: {
      backgroundColor: "var(--color-bg-danger-hover)",
      borderColor: "var(--color-border-danger)",
    },
  },
  subtle: {
    base: {
      backgroundColor: "transparent",
      color: "var(--color-text-danger)",
      borderColor: "transparent",
    },
    hover: {
      backgroundColor: "var(--color-bg-danger-tertiary-hover)",
      borderColor: "var(--color-border-danger)",
    },
  },
};

const disabledStyle = {
  backgroundColor: "var(--color-bg-disabled)",
  color: "var(--color-text-disabled)",
  borderColor: "var(--color-border-disabled)",
  cursor: "not-allowed",
  opacity: 1,
};

const sizeStyles = {
  medium: {
    padding: "var(--space-300) var(--space-400)",
    fontSize: "var(--font-size-sm)",
    iconSize: 16,
  },
  small: {
    padding: "var(--space-200) var(--space-300)",
    fontSize: "var(--font-size-sm)",
    iconSize: 16,
  },
};

export default function ButtonDanger({
  label = "Button",
  variant = "primary",
  size = "medium",
  disabled = false,
  iconStart = null,
  iconEnd = null,
  className = "",
  onClick,
  ...rest
}) {
  const vStyle = variantStyles[variant] || variantStyles.primary;
  const sStyle = sizeStyles[size] || sizeStyles.medium;

  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-200)",
    borderRadius: "var(--radius-200)",
    borderWidth: "var(--border-width)",
    borderStyle: "solid",
    fontFamily: "var(--font-family-sans)",
    fontWeight: "var(--font-weight-regular)",
    lineHeight: "var(--leading-none)",
    letterSpacing: "var(--tracking-normal)",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background-color 0.15s ease, border-color 0.15s ease",
    outline: "none",

    padding: sStyle.padding,
    fontSize: sStyle.fontSize,

    ...(disabled ? disabledStyle : vStyle.base),
  };

  const [hovered, setHovered] = React.useState(false);

  const computedStyle = {
    ...baseStyle,
    ...(hovered && !disabled ? vStyle.hover : {}),
  };

  return (
    <button
      className={className}
      style={computedStyle}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...rest}
    >
      {iconStart && (
        <span
          style={{
            display: "inline-flex",
            width: sStyle.iconSize,
            height: sStyle.iconSize,
            flexShrink: 0,
          }}
        >
          {iconStart}
        </span>
      )}

      {label}

      {iconEnd && (
        <span
          style={{
            display: "inline-flex",
            width: sStyle.iconSize,
            height: sStyle.iconSize,
            flexShrink: 0,
          }}
        >
          {iconEnd}
        </span>
      )}
    </button>
  );
}
