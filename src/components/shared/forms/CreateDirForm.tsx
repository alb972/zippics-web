import React from "react";
import { ZPDir } from "../../../model/ZPDir";

export const CreateDirForm = (props: {
  shouldAppear: boolean;
  allDirectories: Array<ZPDir>;
  cancelCreationHandler: () => void;
  validCreationHandler: (dirName: string) => void;
}): JSX.Element => {
  const { shouldAppear, allDirectories, cancelCreationHandler, validCreationHandler } = props;
  const dirName = `dir-${allDirectories.length + 1}`;

  return (
    <>
      {shouldAppear && (
        <div className="dirForm">
          <p>{`Dossier: ${dirName}`}</p>
          <button type="button" onClick={cancelCreationHandler} className="btn gray">
            Annuler
          </button>
          <button
            type="button"
            onClick={() => {
              validCreationHandler(dirName);
            }}
            className="btn blue">
            Créer
          </button>
        </div>
      )}
    </>
  );
};
