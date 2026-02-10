import React from "react";

/**
 * ButtonGroup 컴포넌트
 *
 * 여러 버튼의 정렬 레이아웃을 제어합니다.
 *
 * @param {"justify"|"start"|"end"|"center"|"stack"} align - 정렬 방식
 * @param {React.ReactNode} children - 내부 버튼 요소들
 * @param {string}          className - 추가 클래스
 */

const alignMap = {
  justify: {
    flexDirection: "row",
    justifyContent: "stretch",
    alignItems: "center",
  },
  start: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  end: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  center: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  stack: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },
};

export default function ButtonGroup({
  align = "justify",
  children,
  className = "",
  ...rest
}) {
  const layout = alignMap[align] || alignMap.justify;
  const isJustify = align === "justify";
  const isStack = align === "stack";

  return (
    <div
      className={className}
      style={{
        display: "flex",
        gap: "var(--space-400)",
        ...layout,
      }}
      {...rest}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        /* justify → 버튼이 균등 분배, stack → 가로 100% */
        const extraStyle =
          isJustify
            ? { flex: "1 0 0", minWidth: 0, minHeight: 1 }
            : isStack
              ? { width: "100%" }
              : {};

        return React.cloneElement(child, {
          style: { ...extraStyle, ...child.props.style },
        });
      })}
    </div>
  );
}
