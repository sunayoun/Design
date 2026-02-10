import React from "react";

/**
 * IconButton 컴포넌트
 *
 * 아이콘만 표시하는 원형 버튼입니다.
 * Figma 디자인 시스템 기반 — theme.css 의 CSS 커스텀 프로퍼티를 사용합니다.
 *
 * @param {React.ReactNode} icon     - 아이콘 요소 (필수)
 * @param {"primary"|"neutral"|"subtle"} variant - 베리언트 (기본값: "primary")
 * @param {"medium"|"small"}             size    - 크기 (기본값: "medium")
 * @param {boolean}  disabled   - 비활성화 여부
 * @param {string}   ariaLabel  - 접근성 라벨 (아이콘만 있으므로 필수 권장)
 * @param {string}   className  - 추가 클래스명
 * @param {function} onClick    - 클릭 핸들러
 */

const variantStyles = {
  primary: {
    base: {
      backgroundColor: "var(--color-bg-brand)",
      borderColor: "var(--color-border-brand)",
      color: "var(--color-icon-brand-on)",
    },
    hover: {
      backgroundColor: "var(--color-bg-brand-hover)",
      borderColor: "var(--color-border-brand)",
    },
  },
  neutral: {
    base: {
      backgroundColor: "var(--color-bg-default-secondary)",
      borderColor: "var(--color-border-default)",
      color: "var(--color-icon-default)",
    },
    hover: {
      backgroundColor: "var(--color-bg-default-secondary-hover)",
      borderColor: "var(--color-border-default)",
    },
  },
  subtle: {
    base: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      color: "var(--color-icon-default)",
    },
    hover: {
      backgroundColor: "var(--color-bg-default-hover)",
    },
  },
};

const disabledStyle = {
  backgroundColor: "var(--color-bg-disabled)",
  borderColor: "var(--color-border-disabled)",
  color: "var(--color-icon-disabled)",
  cursor: "not-allowed",
  opacity: 1,
};

const sizeMap = {
  medium: {
    wh: 44,         /* 전체 버튼 크기 */
    padding: "var(--space-300)",
    iconSize: 20,
  },
  small: {
    wh: 36,
    padding: "var(--space-200)",
    iconSize: 20,
  },
};

export default function IconButton({
  icon,
  variant = "primary",
  size = "medium",
  disabled = false,
  ariaLabel = "",
  className = "",
  onClick,
  ...rest
}) {
  const vStyle = variantStyles[variant] || variantStyles.primary;
  const s = sizeMap[size] || sizeMap.medium;

  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: s.wh,
    height: s.wh,
    padding: s.padding,
    borderRadius: "var(--radius-full)",
    borderWidth: "var(--border-width)",
    borderStyle: "solid",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background-color 0.15s ease, border-color 0.15s ease",
    outline: "none",
    flexShrink: 0,

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
      aria-label={ariaLabel}
      {...rest}
    >
      <span
        style={{
          display: "inline-flex",
          width: s.iconSize,
          height: s.iconSize,
          flexShrink: 0,
        }}
      >
        {icon}
      </span>
    </button>
  );
}
