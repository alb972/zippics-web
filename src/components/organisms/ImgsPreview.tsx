/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { ZPDir } from "../../model/ZPDir";
import { ZPImage } from "../../model/ZPImage";
import { isImgIn } from "../../utils/methods";
import { SpacerSmall } from "../atoms/Spacers";
import { HorizontalListTemplate } from "../templates/HorizontalListTemplate";

interface PreviewProps {
  dirToDisplay: ZPDir;
  selectedImgs: ZPImage[];
  toggleImgSelectHandler: (img: ZPImage) => void;
}

export const ImgsPreview = (props: PreviewProps): JSX.Element => {
  const { dirToDisplay, selectedImgs, toggleImgSelectHandler } = props;

  return (
    <HorizontalListTemplate spacer={<SpacerSmall />}>
      {dirToDisplay.images.map((item: ZPImage, index: number) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={index}>
            {isImgIn(item, selectedImgs) ? (
              <div
                className="imgContainer selected"
                onClick={() => {
                  toggleImgSelectHandler(item);
                }}>
                <img src={item.base64Img} height={250} alt="img" />
              </div>
            ) : (
              <div
                className="imgContainer unselected"
                onClick={() => {
                  toggleImgSelectHandler(item);
                }}>
                <img src={item.base64Img} height={250} alt="img" />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </HorizontalListTemplate>
  );
};
