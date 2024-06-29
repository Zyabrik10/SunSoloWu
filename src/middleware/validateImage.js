export default function validateImage(image) {
  return image.width * image.height <= 1_000_000;
}
