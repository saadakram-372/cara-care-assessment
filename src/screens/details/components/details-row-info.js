/**
 * Function to list down the details of the selected character
 */

import React from "react";
import { View, Text } from "react-native";

// Components
import HorizontalDivider from "../../../components/dividers/horizontal-divider";

// Colors
import colors from "../../../theme/colors";

// Styles
import { styles } from "../details-screen-styles";

function GetCharacterDetails(props) {
  const { title, value } = props;

  return (
    <>
      <View style={styles.info_text_view_style}>
        <Text style={[styles.text_style, { textAlign: "left", width: "30%" }]}>
          {title}
        </Text>
        <Text style={[styles.text_style, { textAlign: "right", width: "60%" }]}>
          {value}
        </Text>
      </View>

      {/* Horizontal divider */}
      <HorizontalDivider
        width="95%"
        height={2}
        backgroundColor={colors.silverChalice}
      />
    </>
  );
}

export default GetCharacterDetails;
