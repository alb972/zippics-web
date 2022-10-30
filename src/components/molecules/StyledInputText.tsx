import React from "react";
import { SpacerXSmall } from "../atoms/Spacers";
import { Body1Text } from "../atoms/Texts";

interface StyledInputTextProps {
  name: string;
  value: string;
  placeholder?: string;
  editable?: boolean;
  changeValueHandler?: (nameToSet: string) => void;
}

export const StyledInputText = (props: StyledInputTextProps): JSX.Element => {
  const { name, value, placeholder = "", editable = false, changeValueHandler } = props;

  const handleUpdate = (e: any) => {
    if (changeValueHandler !== undefined) {
      changeValueHandler(e.target.value);
    }
  };

  return (
    <div className="styledInputContainer">
      <Body1Text text={name} isBold />
      <SpacerXSmall />
      <input
        type="text"
        value={value}
        className="styledInput"
        placeholder={placeholder}
        disabled={!editable}
        onChange={handleUpdate}
      />
    </div>
  );
};
