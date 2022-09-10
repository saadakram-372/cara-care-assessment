import React from "react";
import { View } from "react-native";

function HorizontalDivider({ width, height, backgroundColor }) {
  return (
    <View
      style={{
        marginHorizontal: 10,
        width: width,
        alignSelf: "center",
        height: height,
        backgroundColor: backgroundColor,
      }}
    />
  );
}

export default HorizontalDivider;
