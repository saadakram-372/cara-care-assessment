import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Libraries

// Components
import Pagination from "../pagination";

function ListView(props) {
  const { data, pageIndex, setPageIndex } = props;

  console.log("list data: ", data);

  return (
    <View>
      {/* Pagination */}
      <Pagination
        currentPage={pageIndex}
        totalPages={data?.info?.pages}
        next={data?.info?.next}
        previous={data?.info?.prev}
        setPageIndex={setPageIndex}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default ListView;
