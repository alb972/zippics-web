import React from "react";
import { ZPDir } from "../../model/ZPDir";
import { ZPImage } from "../../model/ZPImage";
import { AddImgsBtn } from "./btns/AddImgsBtn";
import { MoveImgBtn } from "./btns/MoveImgBtn";
import { MoveDirForm } from "./forms/MoveDirForm";
import { ImgsPreview } from "./ImgsPreview";

interface RightPartProps {
  defaultDirUUID: string;
  dirToDisplayUUID: string;
  allDirectories: Array<ZPDir>;
  selectedImgFilesData: Array<ZPImage>;
  moveDirFormShouldAppear: boolean;
  handleImagesInputChangeHandler: (event: any) => void;
  toggleImgSelectHandler: (img: ZPImage) => void;
  dirNameChangeHandler: (dirUUID: string, newName: string) => void;
  displayMoveToDirFormHandler: () => void;
  cancelMoveToDirHandler: () => void;
  validMoveToDirHandler: (newDir: string) => void;
}

export const RightPart = (props: RightPartProps): JSX.Element => {
  const {
    defaultDirUUID,
    dirToDisplayUUID,
    allDirectories,
    selectedImgFilesData,
    moveDirFormShouldAppear,
    handleImagesInputChangeHandler,
    toggleImgSelectHandler,
    dirNameChangeHandler,
    cancelMoveToDirHandler,
    validMoveToDirHandler,
    displayMoveToDirFormHandler,
  } = props;

  let dirToDisplay: ZPDir | null = null;

  for (const item of allDirectories) {
    if (item.uuid === dirToDisplayUUID) {
      dirToDisplay = item;
    }
  }

  return (
    <div className="rightPart">
      {dirToDisplay && (
        <>
          <div>
            {dirToDisplay.uuid === defaultDirUUID && (
              <AddImgsBtn handleImagesInputChange={handleImagesInputChangeHandler} />
            )}
            <MoveImgBtn
              isDisabled={selectedImgFilesData.length <= 0}
              displayMoveToDirFormHandler={displayMoveToDirFormHandler}
            />
            <MoveDirForm
              shouldAppear={moveDirFormShouldAppear}
              allDirectories={allDirectories}
              cancelMoveHandler={cancelMoveToDirHandler}
              validMoveHandler={validMoveToDirHandler}
            />
          </div>
          <div className="dirNameForm">
            <CustomTextInput
              label="Nom du dossier"
              id={`dir-name-${dirToDisplayUUID}`}
              name={`dir-name-${dirToDisplayUUID}`}
              value={dirToDisplay.name}
              onChangeHandler={(newName: string) => {
                if (dirToDisplay) {
                  dirNameChangeHandler(dirToDisplay.uuid, newName);
                }
              }}
            />
          </div>
          <ImgsPreview
            dirToDisplay={dirToDisplay}
            selectedImgs={selectedImgFilesData}
            toggleImgSelectHandler={toggleImgSelectHandler}
          />
        </>
      )}
    </div>
  );
};

const CustomTextInput = (props: {
  label: string;
  id: string;
  value: string;
  name: string;
  onChangeHandler: (newName: string) => void;
}): JSX.Element => {
  const { label, id, name, value, onChangeHandler } = props;
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const value = event.target.value;
          onChangeHandler(value);
        }}
      />
    </>
  );
};
