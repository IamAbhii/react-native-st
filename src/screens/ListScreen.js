import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friedn 1", age: 1 },
    { name: "Friedn 2", age: 2 },
    { name: "Friedn 3", age: 3 },
    { name: "Friedn 4", age: 4 },
    { name: "Friedn 5", age: 5 },
    { name: "Friedn 6", age: 6 },
    { name: "Friedn 7", age: 7 },
    { name: "Friedn 8", age: 8 },
    { name: "Friedn 9", age: 9 },
    { name: "Friedn 10", age: 10 },
  ];

  return (
    <FlatList
      keyExtractor={(friends) => friends.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle} key={item.name}>
            {item.name} - Age:{item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
