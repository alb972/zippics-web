import React, { PropsWithChildren, Children, ReactChild, ReactFragment, ReactPortal } from "react";
import { SpacerMedium, SpacerSmall } from "../atoms/Spacers";
import { StyledLine } from "../atoms/StyledLine";
import { H1Text } from "../atoms/Texts";

interface FormSectionProps {
  title: string;
}

export const FormSection = (props: PropsWithChildren<FormSectionProps>): JSX.Element => {
  const { title, children } = props;
  const childrenArray = Children.toArray(children);
  return (
    <>
      <H1Text text={title} />
      <StyledLine color="gray" />
      <SpacerSmall />
      {childrenArray &&
        childrenArray.map((childItem: ReactChild | ReactFragment | ReactPortal, index: number) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={index}>
              {childItem}
              <SpacerSmall />
            </React.Fragment>
          );
        })}
    </>
  );
};
