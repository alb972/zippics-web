/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

export const AddImgsBtn = (props: { handleImagesInputChange: (event: any) => void }): JSX.Element => {
  const { handleImagesInputChange } = props;
  return (
    <>
      <label htmlFor="imgs" className="ZPImgLabel blue">
        <div>Ajouter image(s)</div>
      </label>
      <input
        id="imgs"
        name="imgs"
        type="file"
        accept="image/png, image/jpeg"
        hidden
        onChange={handleImagesInputChange}
        multiple
      />
    </>
  );
};
