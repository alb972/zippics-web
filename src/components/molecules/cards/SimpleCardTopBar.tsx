import React from "react";
import { SubTitle1Text, H3Text } from "../../atoms/Texts";

interface SimpleCardTopBarProps {
  title: string;
  description: string;
}

export const SimpleCardTopBar = (props: SimpleCardTopBarProps): JSX.Element => {
  const { title, description } = props;

  return (
    <div className="simpleCardTopBar">
      <H3Text text={title} />
      <SubTitle1Text text={description} />
    </div>
  );
};
