import React from "react";

import { FlatList, View, Text, StyleSheet } from "react-native";
import colors from "../../theme/colors";
import spacing from "../../theme/spacing";

function FlatListComponent(props) {
  const { data, renderItem, listEmptyText } = props;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      removeClippedSubviews={true}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => String(index)}
      ListEmptyComponent={() => (
        <View style={styles.empty_list_text_view_style}>
          <Text style={styles.text_style}>{listEmptyText}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  text_style: {
    color: colors.darkBlue,
    fontSize: 20,
    fontWeight: "400",
    marginHorizontal: spacing.mediumPlus,
    marginTop: spacing.textMidScreen,
    textAlign: "center",
  },
  empty_list_text_view_style: {
    alignItems: "center",
  },
});

export default FlatListComponent;
