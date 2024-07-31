export interface PredictionDataProps {
  isMobile: boolean;
}

export interface ImageCycleProps {
  url: string;
  id: ImageCyleEnum;
}

export enum ImageCyleEnum {
  image1 = "image1",
  image2 = "image2",
  image3 = "image3",
}
