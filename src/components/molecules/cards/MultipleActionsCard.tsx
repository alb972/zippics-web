import React from "react";
import { SimpleCardTopBar } from "./SimpleCardTopBar";
import { ActiveBtn } from "../../atoms/Buttons";
import { SpacerSmall } from "../../atoms/Spacers";

interface MultipleActionsCardProps {
  title: string;
  description: string;
  actions: Array<{ actionName: string; handler: () => void }>;
}

export const MultipleActionsCard = (props: MultipleActionsCardProps): JSX.Element => {
  const { title, description, actions } = props;

  return (
    <div className="multipleActionsCard">
      <SimpleCardTopBar title={title} description={description} />
      <div className="bottom">
        {actions.map((item, index) => {
          return (
            <>
              {/* eslint-disable-next-line react/no-array-index-key */}
              <ActiveBtn key={index} text={item.actionName} clickHandler={item.handler} />
              <SpacerSmall />
            </>
          );
        })}
      </div>
    </div>
  );
};
