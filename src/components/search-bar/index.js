import React from "react";

// Constants
import { HOME_SCREEN_CONSTANTS } from "../../constants/Strings";

// Components
import TextInput from "../../components/text-input";

function SearchBar(props) {
  const {
    searchItem,
    searchBarText,
    searchBarError,
    setSearchBarText,
    setSearchBarError,
    resetSearchBarError,
  } = props;

  return (
    <TextInput
      showErrorMsg={true}
      mode="outlined"
      text={searchBarText}
      error={searchBarError}
      label={HOME_SCREEN_CONSTANTS.SEARCH_BAR_LABEL}
      onChangeText={(value) => {
        resetSearchBarError();
        setSearchBarText(value.toString());
      }}
      placeholder={HOME_SCREEN_CONSTANTS.SEARCH_BAR_PLACEHOLER}
    />
  );
}

export default SearchBar;
