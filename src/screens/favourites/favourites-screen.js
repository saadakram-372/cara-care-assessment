import React from "react";
import { View } from "react-native";

// Constants
import { VIEW_TYPE_CONSTANTS } from "../../constants/Strings";

// Redux
import { useSelector } from "react-redux";

// Styles
import { styles } from "./favourites-screen-styles";

// Components
import ListView from "../../components/list-view";
import GridView from "../../components/grid-view";

function FavouritesScreen({ navigation }) {
  const { favouritesData, viewType } = useSelector(
    (state) => state.PersistReducer
  );

  return (
    <View style={styles.container}>
      {viewType === VIEW_TYPE_CONSTANTS.LIST ? (
        <ListView
          data={favouritesData}
          searchBarText={""}
          navigation={navigation}
          loader={false}
        />
      ) : (
        <GridView
          data={favouritesData}
          searchBarText={""}
          loader={false}
          viewType={viewType}
          navigation={navigation}
        />
      )}
    </View>
  );
}

export default FavouritesScreen;
