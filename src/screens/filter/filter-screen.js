import React from "react";
import { View, Text } from "react-native";

// Constants
import { FILTER_SCREEN_CONSTANTS } from "../../constants/Strings";

// Routes
import { CHARACTER_END_POINT } from "../../constants/routes";

// Icons
import AntDesign from "react-native-vector-icons/AntDesign";

// colors
import colors from "../../theme/colors";

// Styles
import { styles } from "./filter-screen-styles";

// Components
import Button from "../../components/button";
import CheckBox from "../../components/check-box";
import HorizontalDivider from "../../components/dividers/horizontal-divider";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getCharacterData } from "../../redux/thunks/AppThunk";
import { setCheckedFilter } from "../../redux/reducers/PersistReducer";

function FilterScreen({ navigation }) {
  // useDispatch
  const dispatch = useDispatch();

  // useSelector
  const { checkedFilter } = useSelector((state) => state.PersistReducer);

  /**
   * Function to return keys of true values from object
   */
  const getTrueValueKeys = (obj) => {
    const keys = Object.keys(obj);
    return keys.filter((key) => {
      return obj[key];
    })[0];
  };

  /**
   * Function when apply button is clicked to apply the selected filters
   */
  const onClickedApply = () => {
    // Logic to get the key of status if value is true
    const filtered_Key = getTrueValueKeys(checkedFilter.status);

    // Api call to get filtered rick and morty data
    dispatch(
      getCharacterData({
        end_point: `${CHARACTER_END_POINT}?status=${filtered_Key}`,
      })
    );

    // Navigate to previous home page
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      {/* Close icon + title view */}
      <View style={styles.close_icon_title_view_style}>
        {/* Close Icon */}
        <AntDesign
          name="close"
          size={32}
          color={colors.white}
          style={styles.close_icon_style}
          onPress={() => navigation.pop()}
        />

        {/* Title */}
        <Text style={styles.title_style}>{FILTER_SCREEN_CONSTANTS.TITLE}</Text>
      </View>

      {/* Section title + divider view */}
      <View style={styles.section_title_divider_view_style}>
        <Text style={styles.section_title_style}>
          {FILTER_SCREEN_CONSTANTS.FIRST_SECTION_TITLE}
        </Text>

        <HorizontalDivider
          width="75%"
          height={2}
          backgroundColor={colors.silverChalice}
        />
      </View>

      {/* Section details */}
      <View style={styles.section_details_view_style}>
        {FILTER_SCREEN_CONSTANTS.FILTER_STATUS_KEYS.map((value, index) => {
          return (
            <View key={index} style={styles.text_check_box_view_style}>
              <Text style={styles.section_text_style}>{value}</Text>
              <CheckBox
                checked={checkedFilter?.status[value]}
                setChecked={() => {
                  dispatch(setCheckedFilter({ value: value }));
                }}
              />
            </View>
          );
        })}
      </View>

      {/* Button View */}
      <View style={styles.button_view_style}>
        <Button text="Apply" onPress={() => onClickedApply()} />
      </View>
    </View>
  );
}

export default FilterScreen;
