import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

// Colors
import colors from "../../theme/colors";

// Icons
import Foundation from "react-native-vector-icons/Foundation";

function Pagination(props) {
  const { currentPage, totalPages, next, previous, setPageIndex } = props;

  /**
   * Function called when user presses previous icon for pagination
   */
  const pressedPrevious = () => {
    if (previous !== null) {
      setPageIndex(currentPage - 1);
    }
  };

  /**
   * Function called when user presses next icon for pagination
   */
  const pressedNext = () => {
    if (next !== null) {
      setPageIndex(currentPage + 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Previous Icon */}
      <TouchableOpacity
        disabled={previous !== null ? false : true}
        activeOpacity={0.7}
        onPress={() => pressedPrevious()}
      >
        <Foundation
          name="previous"
          size={32}
          color={previous !== null ? colors.black : colors.silverChalice}
        />
      </TouchableOpacity>

      {/* Currrent page of total pages text */}
      <Text style={styles.page_index_text_style}>
        {currentPage} of {totalPages}
      </Text>

      {/* Next Icon */}
      <TouchableOpacity
        disabled={next !== null ? false : true}
        activeOpacity={0.7}
        onPress={() => pressedNext()}
      >
        <Foundation
          name="next"
          size={32}
          color={next !== null ? colors.black : colors.silverChalice}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-around",
  },
  page_index_text_style: {
    fontWeight: "400",
    fontSize: 14,
    color: colors.black,
  },
});

export default Pagination;
