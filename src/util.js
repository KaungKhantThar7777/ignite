export const smallImage = (imagePath, size) => {
  const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        "/media/screenshoots",
        `/media/resize/${size}/-/screenshoots`
      )
    : imagePath.replace("/media/games", `/media/resize/${size}/-/games`);
  return image;
};
