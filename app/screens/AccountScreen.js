import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import colors from "../config/colors";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

export default function AccountScreen(props) {
  return (
    <Screen>
      <View style={styles.background}>
        <ListItem>
          title="Mosh Hamedani" subTitle="programmingwithmosh@gmail.com" image=
          {require("../assets/mosh.jpg")}
        </ListItem>
      </View>
      <View>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        ></FlatList>
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: { colors: colors.white },
  container: { marginVertical: 20 },
});
