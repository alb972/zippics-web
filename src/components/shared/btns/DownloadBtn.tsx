import React from "react";

export const DownloadBtn = (props: { downloadFilesHandler: () => void }): JSX.Element => {
  const { downloadFilesHandler } = props;
  return (
    <button type="button" onClick={downloadFilesHandler} className="ZPBtn blue">
      Télécharger tout
    </button>
  );
};
