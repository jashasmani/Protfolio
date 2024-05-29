import { TinyColor } from "@ctrl/tinycolor";

const colors1 = ["#6253E1", "#04BEFE"];
const colorsSet = ["#3B82F6", "#8B5CF6"];

const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

export { colors1, colorsSet, getHoverColors, getActiveColors };
