import React, { useEffect } from "react";
import { Image, View, Text } from "react-native";

// Images
import Images from "../../../assets/images";

// Styles
import { styles } from "./splash-screen-styles";

// Constants
import { SPLASH_SCREEN_CONSTANTS } from "../../constants/Strings";

function SplashScreen({ navigation }) {
  /**
   * Function to show the splash screen for about 2 sec
   */
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("bottomTab");
    }, 2000);
  });

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={Images.logo} style={styles.logo_style} />

      {/* Text */}
      <Text style={styles.title_style}>{SPLASH_SCREEN_CONSTANTS.TITLE}</Text>

      <Text style={styles.desc_style}>{SPLASH_SCREEN_CONSTANTS.DESC}</Text>
    </View>
  );
}

export default SplashScreen;
