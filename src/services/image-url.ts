import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;

  return `https://image.tmdb.org/t/p/w500/${url}`;
};

export default getCroppedImageUrl;
