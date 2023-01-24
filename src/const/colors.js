export const mainAccent = "rgb(250,130,20)";
export const mainDarkAccent = "rgb(4,127,231)";

export const mainAccentHover = "rgba(250,130,20, 0.8)";
export const mainAccentHoverDark = "rgba(4,127,231,0.8)";

export const borders = "rgb(230, 230, 230)";
export const bordersDark = "rgb(100, 100, 100)";

export const mainFont = "rgb(90, 90, 90)";
export const mainFontDark = "rgb(230, 230, 230)";

export const props = {
  fontColor: mainAccent,
  buttonColor: "white",
};

export const mainColor = "white";
export const mainDarkColor = "black";

export const getMainColor = (darkMode) => {
  return darkMode ? mainDarkColor : mainColor;
};

export const getMainAccent = (darkMode) => {
  return darkMode ? mainDarkAccent : mainAccent;
};

export const getHoverColor = (darkMode) => {
  return darkMode ? mainAccentHoverDark : mainAccentHover;
};

export const getBorderColor = (darkMode) => {
  return darkMode ? bordersDark : borders;
};

export const getFontColor = (darkMode) => {
  return darkMode ? mainFontDark : mainFont;
};
