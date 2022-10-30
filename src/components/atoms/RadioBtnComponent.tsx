/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { RadioBtnIcon, SelectedRadioBtnIcon } from "../shared/utilsIcon";
import { Body1Text } from "./Texts";

interface RadioBtnComponentProps {
  text: string;
  checked: boolean;
  clickHandler: () => void;
}

export const RadioBtnComponent = (props: RadioBtnComponentProps): JSX.Element => {
  const { text, checked, clickHandler } = props;
  return (
    <div className="radioBtnContainer" onClick={clickHandler}>
      {checked ? (
        <>
          <SelectedRadioBtnIcon />
        </>
      ) : (
        <>
          <RadioBtnIcon />
        </>
      )}
      <div className="radioBtnLabelContainer">
        <Body1Text text={text} />
      </div>
    </div>
  );
};
