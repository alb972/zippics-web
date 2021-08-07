import React, { useState } from "react";
import { ZPDir } from "../../../model/ZPDir";
import { Directories } from "../Directories";

export const MoveDirForm = (props: {
  shouldAppear: boolean;
  allDirectories: Array<ZPDir>;
  cancelMoveHandler: () => void;
  validMoveHandler: (newDirUUID: string) => void;
}): JSX.Element => {
  const { shouldAppear, allDirectories, cancelMoveHandler, validMoveHandler } = props;
  const [selectedDirUUID, setSelectedDirUUID] = useState<string>("");

  const handleSelectDir = (dirUUID: string): void => {
    setSelectedDirUUID(dirUUID);
  };

  return (
    <>
      {shouldAppear && (
        <div className="moveDirForm">
          <Directories allDirs={allDirectories} dirToDisplayUUID={selectedDirUUID} selectDirHandler={handleSelectDir} />
          <button type="button" onClick={cancelMoveHandler} className="btn gray">
            Annuler
          </button>
          <button
            type="button"
            onClick={() => {
              validMoveHandler(selectedDirUUID);
              setSelectedDirUUID("");
            }}
            className="btn blue">
            Déplacer
          </button>
        </div>
      )}
    </>
  );
};
