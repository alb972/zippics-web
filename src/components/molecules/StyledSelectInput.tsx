import React from "react";
import { SpacerXSmall } from "../atoms/Spacers";
import { Body1Text } from "../atoms/Texts";

interface StyledSelectInputProps {
  name?: string;
  value: string;
  defaultOptionPlaceholder: string;
  options: Array<StyledSelectInputOption>;
  changeValueHandler?: (nameToSet: string) => void;
}

interface StyledSelectInputOption {
  name: string;
  value: string;
}

export const StyledSelectInput = (props: StyledSelectInputProps): JSX.Element => {
  const { name = "", value, defaultOptionPlaceholder, options, changeValueHandler } = props;

  const handleUpdate = (e: any) => {
    if (changeValueHandler !== undefined) {
      changeValueHandler(e.target.value);
    }
  };

  return (
    <div className="styledInputContainer">
      {name.length > 0 && (
        <>
          <Body1Text text={name} isBold />
          <SpacerXSmall />
        </>
      )}
      <select name="select_policy" id="select_policy" className="styledInput" value={value} onChange={handleUpdate}>
        <option value="">{defaultOptionPlaceholder}</option>
        {options.map((option: StyledSelectInputOption) => {
          return (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
