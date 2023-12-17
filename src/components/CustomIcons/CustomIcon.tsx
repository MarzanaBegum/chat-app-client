import React, { ReactNode, useMemo } from "react";

export type IconType = {
  height?: number | string;
  width?: number | string;
  color?: string;
  stroke?: string;
  className?: string;
};

type SvgIcon = {
  svg: ({ width, height, color }: IconType) => ReactNode;
};

const defaultIconProps: IconType = {
  height: 24,
  width: 24,
  color: "#080707",
  stroke: "#222222",
};

function CustomIcon({ svg, height, width, color, stroke, className }: IconType & SvgIcon) {
  const iconProps = useMemo(() => {
    return {
      height: height || defaultIconProps.height,
      width: width || defaultIconProps.width,
      color: color || defaultIconProps.color,
      stroke: stroke || defaultIconProps.stroke,
      className: className || defaultIconProps.className,
    };
  }, [height, width, color, stroke, className]);

  return <>{svg(iconProps)}</>;
}

export default CustomIcon;