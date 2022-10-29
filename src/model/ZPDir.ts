import { ZPImage } from "./ZPImage";

export interface ZPDir {
  uuid: string;
  name: string;
  images: Array<ZPImage>;
}
