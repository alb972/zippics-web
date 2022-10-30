import React from "react";
import { ActiveBtn } from "../../atoms/Buttons";
import { SpacerSmall } from "../../atoms/Spacers";
import { Body1Text } from "../../atoms/Texts";
import { HorizontalListTemplate } from "../../templates/HorizontalListTemplate";
import { VerticalListTemplate } from "../../templates/VerticalListTemplate";

interface SimpleCardContentProps {
  actionName: string;
  info?: string;
  clickHandler: () => void;
}

export const SimpleCardContent = (props: SimpleCardContentProps): JSX.Element => {
  const { actionName, info, clickHandler } = props;

  return (
    <div className="simpleCardContent">
      {info && (
        <HorizontalListTemplate spacer={<SpacerSmall />}>
          <Body1Text text={info} />
        </HorizontalListTemplate>
      )}
      <div className="bottom">
        <ActiveBtn text={actionName} clickHandler={clickHandler} />
      </div>
    </div>
  );
};
