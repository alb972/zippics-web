import React, { useState } from "react";
import { HelpBtn } from "../atoms/Buttons";
import { CheckboxComponent } from "../atoms/CheckboxComponent";
import { Paragraph } from "../atoms/Paragraph";
import { SpacerXSmall } from "../atoms/Spacers";
import { Body1Text } from "../atoms/Texts";

interface CheckboxGroupProps {
  title: string;

  details?: string;
  options: Array<{ option: string; value: boolean }>;
  changeHandler: (states: Array<{ option: string; value: boolean }>) => void;
}

export const CheckboxGroup = (props: CheckboxGroupProps): JSX.Element => {
  const { title, details = "", options, changeHandler } = props;

  // Local state(s)
  const [checkedStates, setCheckedSates] = useState<Array<{ option: string; value: boolean }>>(options);
  const [shouldDisplayDetails, setShouldDisplayDetails] = useState<boolean>(false);

  const handleItemClick = (itemToSet: { option: string; value: boolean }) => {
    const newStates = checkedStates.map((item: { option: string; value: boolean }) => {
      if (item.option === itemToSet.option) {
        return { option: item.option, value: !item.value };
      }
      return item;
    });
    setCheckedSates(newStates);
    changeHandler(newStates);
  };

  return (
    <div className="checkboxGroupContainer">
      <div className="checkboxGroupTitle">
        <Body1Text text={title} isBold />
        {details.length > 0 && (
          <HelpBtn
            active={shouldDisplayDetails}
            clickHandler={() => {
              setShouldDisplayDetails(!shouldDisplayDetails);
            }}
          />
        )}
      </div>
      {shouldDisplayDetails && (
        <>
          <SpacerXSmall />
          <Paragraph paragraph={details} />
        </>
      )}
      {checkedStates.map((item: { option: string; value: boolean }) => {
        return (
          <CheckboxComponent
            key={item.option}
            text={item.option}
            checked={item.value}
            clickHandler={() => {
              handleItemClick(item);
            }}
          />
        );
      })}
    </div>
  );
};
