import React, { PropsWithChildren, Children, ReactChild, ReactFragment, ReactPortal } from "react";

interface VerticalListTemplateProps {
  spacer: JSX.Element;
}

export const VerticalListTemplate = (props: PropsWithChildren<VerticalListTemplateProps>): JSX.Element => {
  const { spacer, children } = props;
  const childrenArray = Children.toArray(children);
  return (
    <div className="verticalContainer">
      {childrenArray &&
        childrenArray.map((childItem: ReactChild | ReactFragment | ReactPortal, index: number) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={index}>
              {childItem}
              {spacer}
            </React.Fragment>
          );
        })}
    </div>
  );
};
