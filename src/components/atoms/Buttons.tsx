import React, { useState } from "react";
import { HelpIcon, SelectedHelpIcon } from "../shared/utilsIcon";
import { Body2Text } from "./Texts";

interface ActiveBtnProps {
  text: string;
  isDisabled?: boolean;
  clickHandler: () => void;
}

export const ActiveBtn = (props: ActiveBtnProps): JSX.Element => {
  const { text, isDisabled = false, clickHandler } = props;
  return (
    <>
      {isDisabled ? (
        <button type="button" onClick={() => {}} className="secondaryBtn">
          <Body2Text text={text} isBold color="gray" />
        </button>
      ) : (
        <button type="button" onClick={clickHandler} className="activeBtn">
          <Body2Text text={text} isBold color="white" />
        </button>
      )}
    </>
  );
};

interface SecondaryBtnProps {
  text: string;
  clickHandler: () => void;
}

export const SecondaryBtn = (props: SecondaryBtnProps): JSX.Element => {
  const { text, clickHandler } = props;
  return (
    <button type="button" onClick={clickHandler} className="secondaryBtn">
      <Body2Text text={text} isBold color="gray" />
    </button>
  );
};

interface IconBtnProps {
  icon: JSX.Element;
  clickHandler: () => void;
}

export const IconBtn = (props: IconBtnProps): JSX.Element => {
  const { icon, clickHandler } = props;
  return (
    <button type="button" onClick={clickHandler} className="iconBtn">
      {icon}
    </button>
  );
};

interface HelpBtnProps {
  active: boolean;
  clickHandler: () => void;
}

export const HelpBtn = (props: HelpBtnProps): JSX.Element => {
  const { active, clickHandler } = props;

  return (
    <button
      type="button"
      onClick={() => {
        clickHandler();
      }}
      className="helpBtn">
      {active ? <SelectedHelpIcon /> : <HelpIcon />}
    </button>
  );
};
