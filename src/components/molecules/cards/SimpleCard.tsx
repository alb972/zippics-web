import React from "react";
import { SimpleCardTopBar } from "./SimpleCardTopBar";
import { SimpleCardContent } from "./SimpleCardContent";

interface SimpleCardProps {
  title: string;
  description: string;
  actionName?: string;
  info?: string;
  actionHandler: () => void;
}

export const SimpleCard = (props: SimpleCardProps): JSX.Element => {
  const { title, description, actionName = "View", info, actionHandler } = props;

  return (
    <div className="simpleCard">
      <SimpleCardTopBar title={title} description={description} />
      <SimpleCardContent actionName={actionName} info={info} clickHandler={actionHandler} />
    </div>
  );
};
