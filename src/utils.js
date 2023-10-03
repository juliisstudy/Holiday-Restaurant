export function getImageSrc(lunchName) {
  return require("./image/" + lunchName + ".jpg");
}


export function getImageRef(name) {
  return "Thank you for the image from " + name +".";
}
