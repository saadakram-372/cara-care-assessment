import { Dimensions } from "react-native";

/**
 * Screen dimensions
 */
export const SCREEN_WIDTH = Dimensions.get("screen").width;
export const SCREEN_HEIGHT = Dimensions.get("screen").height;

/**
 * Function to return keys of true values from object
 */
export const getTrueValueKeys = (obj) => {
  const keys = Object.keys(obj);
  return keys.filter((key) => {
    return obj[key];
  })[0];
};
