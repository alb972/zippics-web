import { ZPImage } from "../model/ZPImage";

export function toZPImage(file: File): Promise<ZPImage> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const zpImage: ZPImage = { name: file.name, base64Img: reader.result as string };
      resolve(zpImage);
    };
    reader.onerror = () => {
      reject(new Error("Error"));
    };
  });
}

export function isImgIn(image: ZPImage, images: Array<ZPImage>): boolean {
  let existIn = false;

  images.forEach((imgToCompare: ZPImage) => {
    existIn = existIn || image.base64Img === imgToCompare.base64Img;
  });

  return existIn;
}

export function removeHeaderBase64(base64: string): string {
  return base64.substr(base64.indexOf(";base64,") + ";base64,".length);
}

export function getFilteredFiles(images: Array<ZPImage>, imagesToDelete: Array<ZPImage>): Array<ZPImage> {
  console.log("getFilteredFiles called ");

  return images.filter((imgToCompare: ZPImage) => {
    return !isImgIn(imgToCompare, imagesToDelete);
  });
}
