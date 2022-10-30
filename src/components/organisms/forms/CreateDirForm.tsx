import React from "react";
import { ZPDir } from "../../../model/ZPDir";
import { ActiveBtn, SecondaryBtn } from "../../atoms/Buttons";
import { SpacerSmall } from "../../atoms/Spacers";
import { SubTitle1Text } from "../../atoms/Texts";
import { VerticalListTemplate } from "../../templates/VerticalListTemplate";

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
        <VerticalListTemplate spacer={<SpacerSmall />}>
          <SubTitle1Text text={`Dossier: ${dirName}`} />
          <SecondaryBtn text="Annuler" clickHandler={cancelCreationHandler} />
          <ActiveBtn
            text="Créer"
            clickHandler={() => {
              validCreationHandler(dirName);
            }}
          />
        </VerticalListTemplate>
      )}
    </>
  );
};
