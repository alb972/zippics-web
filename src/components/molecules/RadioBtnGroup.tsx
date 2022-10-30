import React, { useState } from "react";
import { HelpBtn } from "../atoms/Buttons";
import { Paragraph } from "../atoms/Paragraph";
import { RadioBtnComponent } from "../atoms/RadioBtnComponent";
import { SpacerXSmall } from "../atoms/Spacers";
import { Body1Text } from "../atoms/Texts";

interface RadioBtnGroupProps {
  title: string;
  details?: string;
  options: Array<{ option: string; value: boolean }>;
  comparatorKey: string;
  changeValueHandler: (item: { option: string; value: boolean } | undefined) => void;
}

export const RadioBtnGroup = (props: RadioBtnGroupProps): JSX.Element => {
  const { title, details = "", options, comparatorKey, changeValueHandler } = props;

  // Local state(s)
  const [shouldDisplayDetails, setShouldDisplayDetails] = useState<boolean>(false);

  const handleItemClick = (itemToSet: { option: string; value: boolean }) => {
    const newStates = options.map((item: { option: string; value: boolean }) => {
      if (item.option === itemToSet.option) {
        return { option: item.option, value: !item.value };
      }
      return { option: item.option, value: false };
    });

    const item: { option: string; value: boolean } | undefined = newStates.find(
      (state: { option: string; value: boolean }) => {
        return state.option === comparatorKey;
      }
    );

    changeValueHandler(item);
  };

  return (
    <div className="radioBtnGroupContainer">
      <div className="radioBtnGroupTitle">
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
      <SpacerXSmall />
      {options.map((item: { option: string; value: boolean }) => {
        return (
          <RadioBtnComponent
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
