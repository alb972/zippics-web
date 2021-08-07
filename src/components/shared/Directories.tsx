/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { ZPDir } from "../../model/ZPDir";

/* images */
import SelectedDirIcon from "../../assets/imgs/dir-selected.svg";
import DirIcon from "../../assets/imgs/dir.svg";

interface DirectoriesProps {
  allDirs: Array<ZPDir>;
  dirToDisplayUUID: string;
  selectDirHandler: (dirUUID: string) => void;
}

export const Directories = (props: DirectoriesProps): JSX.Element => {
  const { allDirs, dirToDisplayUUID, selectDirHandler } = props;
  return (
    <>
      {allDirs.map((item: ZPDir) => {
        return (
          <React.Fragment key={item.uuid}>
            {item.uuid === dirToDisplayUUID ? (
              <SelectedDirectory dir={item} />
            ) : (
              <Directory dir={item} selectDirHandler={selectDirHandler} />
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};

export const SelectedDirectory = (props: { dir: ZPDir }): JSX.Element => {
  const { dir } = props;
  return (
    <div className="directoryContainer">
      <img src={SelectedDirIcon} height={60} alt="selected dir icon" />
      <p>{dir.name}</p>
    </div>
  );
};

export const Directory = (props: { dir: ZPDir; selectDirHandler: (dirUUID: string) => void }): JSX.Element => {
  const { dir, selectDirHandler } = props;
  return (
    <div
      className="directoryContainer"
      onClick={() => {
        selectDirHandler(dir.uuid);
      }}>
      <img src={DirIcon} height={60} alt="dir icon" />
      <p>{dir.name}</p>
    </div>
  );
};
