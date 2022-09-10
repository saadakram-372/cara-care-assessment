import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// Icons
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../theme/colors";

// Spacing
import spacing from "../../theme/spacing";

/**
 * Function to get Filter icon
 * @param {object} navigation
 * @returns
 */
const getFilterIcon = ({ navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate("Filter")}
    >
      <MaterialCommunityIcons
        size={32}
        name="filter"
        style={styles.icon_style}
      />

      <Text style={styles.text_style}>Filter</Text>
    </TouchableOpacity>
  );
};

/**
 * Function to get icon for gridView or listView based upon user selection
 * @param {string} viewType
 * @returns
 */
const getViewTypeIcon = ({ viewType }) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      {viewType === "grid" ? (
        <>
          <Entypo size={32} name="grid" style={styles.icon_style} />
          <Text style={styles.text_style}>Grid</Text>
        </>
      ) : (
        <>
          <Entypo size={32} name="list" style={styles.icon_style} />
          <Text style={styles.text_style}>List</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

function headerRight({ navigation, viewType }) {
  return (
    <View style={styles.icon_view_style}>
      {getFilterIcon({ navigation })}

      {getViewTypeIcon({ viewType })}
    </View>
  );
}

const styles = StyleSheet.create({
  icon_view_style: {
    flexDirection: "row",
    marginRight: spacing.smaller,
  },
  icon_style: {
    marginLeft: spacing.medium,
    alignSelf: "center",
  },
  text_style: {
    color: colors.black,
    fontWeight: "400",
    fontSize: 12,
    textAlign: "center",
    alignSelf: "center",
    marginLeft: spacing.smaller,
  },
});

export default headerRight;
