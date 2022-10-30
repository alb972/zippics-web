import React from "react";
import { H2Text, SubTitle1Text } from "../atoms/Texts";

interface Header1Props {
  icon?: JSX.Element;
  title: string;
  description: string;
}

/**
 * Displays an Header text, contains title + subtitle
 * maybe later we would be able to display an icon
 * @returns JSX.Element
 */
export const Header1 = (props: Header1Props): JSX.Element => {
  const { icon = null, title, description } = props;
  return (
    <div className="header1Container">
      <H2Text text={title} />
      <SubTitle1Text text={description} />
    </div>
  );
};
