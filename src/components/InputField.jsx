import React from "react";

/**
 * InputField 컴포넌트
 *
 * Figma 디자인 시스템 기반 — theme.css CSS 커스텀 프로퍼티 사용.
 * state 는 disabled / error 존재 여부로 자동 결정됩니다.
 *
 * @param {string}   label       - 라벨 텍스트
 * @param {string}   value       - 입력값
 * @param {string}   placeholder - 플레이스홀더
 * @param {string}   description - 설명 텍스트 (라벨 아래)
 * @param {string}   error       - 에러 메시지 (있으면 Error 상태)
 * @param {boolean}  disabled    - 비활성화 여부
 * @param {function} onChange    - 입력 변경 핸들러
 * @param {string}   className   - 추가 클래스
 */

const baseTextStyle = {
  fontFamily: "var(--font-family-sans)",
  fontWeight: "var(--font-weight-regular)",
  fontSize: "var(--font-size-sm)",
  lineHeight: "var(--leading-normal)",
  letterSpacing: "var(--tracking-normal)",
};

const inputBaseStyle = {
  ...baseTextStyle,
  lineHeight: "var(--leading-none)",
  width: "100%",
  minWidth: 120,
  padding: "var(--space-300) var(--space-400)",
  borderRadius: "var(--radius-200)",
  borderWidth: "var(--border-width)",
  borderStyle: "solid",
  outline: "none",
  transition: "border-color 0.15s ease",
};

const stateStyles = {
  default: {
    label: { color: "var(--color-text-default)" },
    description: { color: "var(--color-text-default-secondary)" },
    input: {
      backgroundColor: "var(--color-bg-default)",
      borderColor: "var(--color-border-default)",
      color: "var(--color-text-default)",
    },
    placeholder: { color: "var(--color-text-default-tertiary)" },
    error: { color: "var(--color-text-default)" },
  },
  error: {
    label: { color: "var(--color-text-default)" },
    description: { color: "var(--color-text-default-secondary)" },
    input: {
      backgroundColor: "var(--color-bg-default)",
      borderColor: "var(--color-border-danger)",
      color: "var(--color-text-default)",
    },
    placeholder: { color: "var(--color-text-default-tertiary)" },
    error: { color: "var(--color-text-danger)" },
  },
  disabled: {
    label: { color: "var(--color-text-disabled)" },
    description: { color: "var(--color-text-default-secondary)" },
    input: {
      backgroundColor: "var(--color-bg-disabled)",
      borderColor: "var(--color-border-disabled)",
      color: "var(--color-text-disabled-on)",
      cursor: "not-allowed",
    },
    placeholder: { color: "var(--color-text-disabled-on)" },
    error: { color: "var(--color-text-default)" },
  },
};

export default function InputField({
  label = "",
  value,
  placeholder = "",
  description = "",
  error = "",
  disabled = false,
  onChange,
  className = "",
  ...rest
}) {
  const state = disabled ? "disabled" : error ? "error" : "default";
  const s = stateStyles[state];

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-200)",
        alignItems: "flex-start",
      }}
    >
      {label && (
        <label style={{ ...baseTextStyle, ...s.label }}>{label}</label>
      )}

      {description && (
        <p style={{ ...baseTextStyle, ...s.description, margin: 0 }}>
          {description}
        </p>
      )}

      <input
        style={{ ...inputBaseStyle, ...s.input }}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        {...rest}
      />

      {error && (
        <p style={{ ...baseTextStyle, ...s.error, margin: 0 }}>{error}</p>
      )}
    </div>
  );
}
