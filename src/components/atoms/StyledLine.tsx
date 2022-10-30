import React from "react";

interface StyledLineProps {
  color?: string;
  isBold?: boolean;
}

export const StyledLine = (props: StyledLineProps): JSX.Element => {
  const { color = "", isBold = false } = props;
  const boldClassName = isBold ? "bold" : " ";
  return <div className={`line ${color} ${boldClassName}`} />;
};
