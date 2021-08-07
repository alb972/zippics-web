import React from "react";
import { ZPDir } from "../../model/ZPDir";
import { CreateDirBtn } from "./btns/CreateDirBtn";
import { DownloadBtn } from "./btns/DownloadBtn";
import { Directories } from "./Directories";
import { CreateDirForm } from "./forms/CreateDirForm";

interface LeftPartProps {
  directoryFormShouldAppear: boolean;
  allDirectories: Array<ZPDir>;
  dirToDisplayUUID: string;
  displayNewDirectoryFormHandler: () => void;
  cancelNewDirCreationHandler: () => void;
  validNewDirCreationHandler: (dirName: string) => void;
  downloadFilesHandler: () => void;
  selectDirHandler: (dirUUID: string) => void;
}

export const LeftPart = (props: LeftPartProps): JSX.Element => {
  const {
    directoryFormShouldAppear,
    allDirectories,
    dirToDisplayUUID,
    displayNewDirectoryFormHandler,
    cancelNewDirCreationHandler,
    validNewDirCreationHandler,
    downloadFilesHandler,
    selectDirHandler,
  } = props;

  return (
    <div className="leftPart">
      <div className="topPart">
        <CreateDirBtn createDirHandler={displayNewDirectoryFormHandler} />
        <CreateDirForm
          shouldAppear={directoryFormShouldAppear}
          allDirectories={allDirectories}
          cancelCreationHandler={cancelNewDirCreationHandler}
          validCreationHandler={validNewDirCreationHandler}
        />
      </div>
      <div className="middlePart">
        <Directories allDirs={allDirectories} dirToDisplayUUID={dirToDisplayUUID} selectDirHandler={selectDirHandler} />
      </div>
      <div className="bottomPart">
        <DownloadBtn downloadFilesHandler={downloadFilesHandler} />
      </div>
    </div>
  );
};
