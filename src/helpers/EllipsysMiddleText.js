export const ellipsysMiddleText = (
  str,
  ellipsisAboveCount = 10,
  startingChars = 6,
  endingChars = 4
) => {
  if (str.length > ellipsisAboveCount) {
    return (
      str.substr(0, startingChars) +
      "..." +
      str.substr(str.length - endingChars, str.length)
    );
  }
  return str;
};
