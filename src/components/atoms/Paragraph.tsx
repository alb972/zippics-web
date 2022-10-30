import React from "react";
import { Body1Text } from "../atoms/Texts";

interface ParagraphProps {
  paragraph: string;
}

export const Paragraph = (props: ParagraphProps): JSX.Element => {
  const { paragraph } = props;
  return (
    <div className="paragraphContainer">
      <Body1Text text={paragraph} />
    </div>
  );
};
