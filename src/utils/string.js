export const capitalizeLetter = (string) => {
  if (!string || typeof string !== "string") {
    return "";
  }
  return string[0].toUpperCase() + string.slice(1);
};
