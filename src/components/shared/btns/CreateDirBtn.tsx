import React from "react";

export const CreateDirBtn = (props: { createDirHandler: () => void }): JSX.Element => {
  const { createDirHandler } = props;
  return (
    <button type="button" onClick={createDirHandler} className="ZPBtn blue">
      Créer un dossier
    </button>
  );
};
