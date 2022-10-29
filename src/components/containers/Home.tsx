/* eslint-disable react/sort-comp */
/* eslint-disable class-methods-use-this */
import React from "react";
import { connect } from "react-redux";
import FileSaver from "file-saver";
import JSZip from "jszip/lib";
import UUID from "uuidjs";
import { CounterStoreInterface } from "../../model/redux/Counter";
import { StoreState } from "../../reducers/indexReducers";
import { inctCounter, dectCounter } from "../../actions/counterActions";
import { StoreDispatch } from "../App";
import { getFilteredFiles, isImgIn, removeHeaderBase64, toZPImage } from "../../utils/methods";
import { ZPImage } from "../../model/ZPImage";
import { ZPDir } from "../../model/ZPDir";
import { LeftPart } from "../shared/LeftPart";
import { RightPart } from "../shared/RightPart";

interface HomeProps {
  counter: CounterStoreInterface;
  increment: () => void;
  decrement: () => void;
}

interface HomeState {
  defaultDirUUID: string;
  allDirectories: Array<ZPDir>;
  dirToDisplayUUID: string;
  directoryFormShouldAppear: boolean;
  moveDirFormShouldAppear: boolean;
  selectedImgFilesData: Array<ZPImage>;
}

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);

    const defaultDirUUID = UUID.generate();
    const defaultDir: ZPDir = { uuid: defaultDirUUID, name: "Par défaut", images: [] };

    this.state = {
      defaultDirUUID,
      dirToDisplayUUID: defaultDirUUID,
      allDirectories: [defaultDir],
      directoryFormShouldAppear: false,
      moveDirFormShouldAppear: false,
      selectedImgFilesData: [],
    };

    // Bindings
    // ----
    this.handleImagesInputChange = this.handleImagesInputChange.bind(this);
    this.loadFiles = this.loadFiles.bind(this);
    this.toggleImgSelect = this.toggleImgSelect.bind(this);
    this.downloadFiles = this.downloadFiles.bind(this);
    this.handleDisplayNewDirectoryForm = this.handleDisplayNewDirectoryForm.bind(this);
    this.handleMoveToDir = this.handleMoveToDir.bind(this);
    this.handleDirNameChange = this.handleDirNameChange.bind(this);
    this.handleSelectDir = this.handleSelectDir.bind(this);
    this.cancelNewDirCreation = this.cancelNewDirCreation.bind(this);
    this.validNewDirCreation = this.validNewDirCreation.bind(this);
    this.handleDisplayMoveDirForm = this.handleDisplayMoveDirForm.bind(this);
    this.cancelMoveDir = this.cancelMoveDir.bind(this);
  }

  handleImagesInputChange(event: any) {
    this.loadFiles(event.target.files);
  }

  async loadFiles(files: FileList) {
    console.log("loadFiles called ");
    const { allDirectories, defaultDirUUID } = this.state;

    let imgsFiles: Array<File> = [];

    for (let i = 0; i < files.length; i += 1) {
      imgsFiles = [...imgsFiles, files[i]];
    }

    // Transform files to ZipPic image

    let imgsToAdd: Array<ZPImage> = [];

    for (let i = 0; i < imgsFiles.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const img: ZPImage = await toZPImage(imgsFiles[i]);
      imgsToAdd = [...imgsToAdd, img];
    }

    const newDirArray: Array<ZPDir> = allDirectories.map((item: ZPDir) => {
      return item.uuid === defaultDirUUID ? { ...item, images: item.images.concat(imgsToAdd) } : { ...item };
    });
    this.setState({ allDirectories: newDirArray });
  }

  toggleImgSelect(image: ZPImage) {
    console.log("toggleImgSelect called ");
    const { selectedImgFilesData } = this.state;

    if (isImgIn(image, selectedImgFilesData)) {
      const array: Array<ZPImage> = selectedImgFilesData.filter((imageToCompare) => {
        return image.base64Img !== imageToCompare.base64Img;
      });

      this.setState({ selectedImgFilesData: array });
    } else {
      this.setState({ selectedImgFilesData: [...selectedImgFilesData, image] });
    }
  }

  handleDisplayNewDirectoryForm() {
    console.log("handleDisplayNewDirectoryForm called ");
    this.setState({ directoryFormShouldAppear: true });
  }

  cancelNewDirCreation() {
    console.log("cancelNewDirCreation called ");
    this.setState({ directoryFormShouldAppear: false });
  }

  handleDisplayMoveDirForm() {
    console.log("handleDisplayMoveDirForm called ");
    this.setState({ moveDirFormShouldAppear: true });
  }

  cancelMoveDir() {
    console.log("cancelMoveDir called ");
    this.setState({ moveDirFormShouldAppear: false });
  }

  validNewDirCreation(dirName: string) {
    console.log("validNewDirCreation called ");
    const { allDirectories } = this.state;
    const dirUUID = UUID.generate();
    const array: Array<ZPDir> = [...allDirectories, { uuid: dirUUID, name: dirName, images: [] }];
    this.setState({ allDirectories: array, directoryFormShouldAppear: false });
  }

  handleMoveToDir(toMoveDirUUID: string) {
    console.log("handleMoveToDir called ");
    const { selectedImgFilesData, allDirectories, dirToDisplayUUID } = this.state;

    const newDirsWithRemoveArray: Array<ZPDir> = allDirectories.map((item: ZPDir) => {
      return item.uuid === dirToDisplayUUID
        ? { ...item, images: getFilteredFiles(item.images, selectedImgFilesData) }
        : { ...item };
    });

    const newDirsWithAddedArray: Array<ZPDir> = newDirsWithRemoveArray.map((item: ZPDir) => {
      return item.uuid === toMoveDirUUID ? { ...item, images: item.images.concat(selectedImgFilesData) } : { ...item };
    });

    this.setState({
      allDirectories: newDirsWithAddedArray,
      selectedImgFilesData: [],
      moveDirFormShouldAppear: false,
    });
  }

  handleSelectDir(dirUUID: string): void {
    this.setState({ dirToDisplayUUID: dirUUID });
  }

  handleDirNameChange(dirUUID: string, newName: string) {
    const { allDirectories } = this.state;
    const newDirArray: Array<ZPDir> = allDirectories.map((item: ZPDir) => {
      return item.uuid === dirUUID ? { ...item, name: newName } : { ...item };
    });
    this.setState({ allDirectories: newDirArray });
  }

  downloadFiles() {
    console.log("downloadFiles called");
    const { allDirectories } = this.state;

    const zip = new JSZip();
    const img = zip.folder("zip-pic-images");

    for (let i = 0; i < allDirectories.length; i += 1) {
      const prefixFolder = allDirectories[i].name;
      const subDirectory = img.folder(prefixFolder);

      for (let j = 0; j < allDirectories[i].images.length; j += 1) {
        const fileName = allDirectories[i].images[j].name;
        const extension = fileName.substring(fileName.lastIndexOf(".") + 1);

        subDirectory.file(
          `${prefixFolder} (${j + 1}).${extension}`,
          removeHeaderBase64(allDirectories[i].images[j].base64Img),
          {
            base64: true,
          }
        );
      }
    }

    zip.generateAsync({ type: "blob" }).then((content: any) => {
      FileSaver.saveAs(content, "zip-pic-images.zip");
    });
  }

  render() {
    const {
      defaultDirUUID,
      dirToDisplayUUID,
      allDirectories,
      directoryFormShouldAppear,
      moveDirFormShouldAppear,
      selectedImgFilesData,
    } = this.state;

    return (
      <div className="appContainer">
        <LeftPart
          dirToDisplayUUID={dirToDisplayUUID}
          allDirectories={allDirectories}
          directoryFormShouldAppear={directoryFormShouldAppear}
          selectDirHandler={this.handleSelectDir}
          displayNewDirectoryFormHandler={this.handleDisplayNewDirectoryForm}
          cancelNewDirCreationHandler={this.cancelNewDirCreation}
          validNewDirCreationHandler={this.validNewDirCreation}
          downloadFilesHandler={this.downloadFiles}
        />
        <RightPart
          defaultDirUUID={defaultDirUUID}
          dirToDisplayUUID={dirToDisplayUUID}
          allDirectories={allDirectories}
          selectedImgFilesData={selectedImgFilesData}
          moveDirFormShouldAppear={moveDirFormShouldAppear}
          handleImagesInputChangeHandler={this.handleImagesInputChange}
          toggleImgSelectHandler={this.toggleImgSelect}
          dirNameChangeHandler={this.handleDirNameChange}
          displayMoveToDirFormHandler={this.handleDisplayMoveDirForm}
          cancelMoveToDirHandler={this.cancelMoveDir}
          validMoveToDirHandler={this.handleMoveToDir}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch: StoreDispatch) => {
  return {
    increment: () => dispatch(inctCounter()),
    decrement: () => dispatch(dectCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
