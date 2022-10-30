import React, { useState } from "react";
import { ZPDir } from "../../../model/ZPDir";
import { ActiveBtn, SecondaryBtn } from "../../atoms/Buttons";
import { SpacerSmall } from "../../atoms/Spacers";
import { SubTitle1Text } from "../../atoms/Texts";
import { HorizontalListTemplate } from "../../templates/HorizontalListTemplate";
import { VerticalListTemplate } from "../../templates/VerticalListTemplate";
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
        <VerticalListTemplate spacer={<SpacerSmall />}>
          <SubTitle1Text text="Move:" />
          <HorizontalListTemplate spacer={<SpacerSmall />}>
            <Directories
              allDirs={allDirectories}
              dirToDisplayUUID={selectedDirUUID}
              selectDirHandler={handleSelectDir}
            />
          </HorizontalListTemplate>
          <SecondaryBtn text="Annuler" clickHandler={cancelMoveHandler} />
          <ActiveBtn
            text="Déplacer"
            clickHandler={() => {
              validMoveHandler(selectedDirUUID);
              setSelectedDirUUID("");
            }}
          />
        </VerticalListTemplate>
      )}
    </>
  );
};
