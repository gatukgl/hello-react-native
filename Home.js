import React from "react";
import { ScrollView } from "react-native";

import { Text, Header, Card, ListItem, CheckBox } from "react-native-elements";

export const Home = () => {
  const items = ["feed a cat", "plant a tree"];

  return (
    <>
      <Header
        centerComponent={{ text: "ALL TODOS", style: { color: "white" } }}
      />
      <ScrollView>
        <Card>
          <Card.Title>TODOs</Card.Title>
          <Card.Divider />
          {items.map((item, i) => (
            <>
              <ListItem keyItem={i} bottomDivider>
                <CheckBox checked />
                <ListItem.Title>{item}</ListItem.Title>
              </ListItem>
            </>
          ))}
        </Card>
      </ScrollView>
    </>
  );
};
