/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { CheckboxIcon, SelectedCheckboxIcon } from "../shared/utilsIcon";
import { Body1Text } from "./Texts";

interface CheckboxComponentProps {
  text: string;
  checked: boolean;
  clickHandler: () => void;
}

export const CheckboxComponent = (props: CheckboxComponentProps): JSX.Element => {
  const { text, checked, clickHandler } = props;
  return (
    <div className="checkboxContainer" onClick={clickHandler}>
      {checked ? (
        <>
          <SelectedCheckboxIcon />
        </>
      ) : (
        <>
          <CheckboxIcon />
        </>
      )}
      <div className="checkboxLabelContainer">
        <Body1Text text={text} />
      </div>
    </div>
  );
};
