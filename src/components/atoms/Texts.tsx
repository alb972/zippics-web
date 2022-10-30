import React from "react";

interface TextProps {
  text: string;
  color?: "white" | "gray";
  isBold?: boolean;
}

/**
 * H1Text - always bold
 */
export const H1Text = (props: TextProps): JSX.Element => {
  const { text, color = "", isBold = true } = props;
  const boldClassName = isBold ? "bold" : " ";
  return <p className={`h1Text ${color} ${boldClassName}`}>{text}</p>;
};

/**
 * H2Text - always bold
 */
export const H2Text = (props: TextProps): JSX.Element => {
  const { text, color = "", isBold = true } = props;
  const boldClassName = isBold ? "bold" : " ";
  return <p className={`h2Text ${color} ${boldClassName}`}>{text}</p>;
};

/**
 * H3Text - always bold
 */
export const H3Text = (props: TextProps): JSX.Element => {
  const { text, color = "", isBold = true } = props;
  const boldClassName = isBold ? "bold" : " ";
  return <p className={`h3Text ${color} ${boldClassName}`}>{text}</p>;
};

/**
 * SubTitle1Text - bold / regular
 */
export const SubTitle1Text = (props: TextProps): JSX.Element => {
  const { text, color = "", isBold = false } = props;
  const boldClassName = isBold ? "bold" : " ";
  return <p className={`subtitle1Text ${color} ${boldClassName}`}>{text}</p>;
};

/**
 * Body1Text - bold / regular
 */
export const Body1Text = (props: TextProps): JSX.Element => {
  const { text, color = "", isBold = false } = props;
  const boldClassName = isBold ? "bold" : " ";
  return <p className={`body1Text ${color} ${boldClassName}`}>{text}</p>;
};

/**
 * Body2Text - bold / regular
 */
export const Body2Text = (props: TextProps): JSX.Element => {
  const { text, color = "", isBold = false } = props;
  const boldClassName = isBold ? "bold" : " ";
  return <p className={`body2Text ${color} ${boldClassName}`}>{text}</p>;
};
