import React from "react";

export const MoveImgBtn = (props: { isDisabled: boolean; displayMoveToDirFormHandler: () => void }): JSX.Element => {
  const { isDisabled, displayMoveToDirFormHandler } = props;
  const colorText: string = isDisabled ? "disabled" : "";
  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={() => {
        displayMoveToDirFormHandler();
      }}
      className={`ZPBtn purple ${colorText}`}>
      Déplacer image(s)
    </button>
  );
};
