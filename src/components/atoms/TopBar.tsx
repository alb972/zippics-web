import React from "react";
import { ActiveBtn } from "./Buttons";
import { H2Text } from "./Texts";

interface TopBarProps {
  title: string;
}

export const TopBar = (props: TopBarProps): JSX.Element => {
  const { title } = props;

  return (
    <div className="appTopBarContainer">
      <H2Text text={title} />
    </div>
  );
};
