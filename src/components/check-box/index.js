import React from "react";

// Libraries
import { Checkbox } from "react-native-paper";
import colors from "../../theme/colors";

function CheckBox(props) {
  const { checked, setChecked } = props;

  return (
    <Checkbox.Android
      color={colors.white}
      uncheckedColor={colors.silverChalice}
      status={checked ? "checked" : "unchecked"}
      onPress={setChecked}
    />
  );
}

export default CheckBox;
