import React from "react";
import { View } from "react-native";
import { TabButton } from "./buttons/TabButton";
import styles from "../style";
import icons from "../components/icons";
export class TabBar extends React.Component {
  render() {
    return (
      <View style={styles.tabBarWrapper}>
        {this.props.navigationState.routes.map((route, i) => {
          var icon = icons.default;
          if (route.key == "history") icon = icons.art;
          else if (route.key == "subjects") icon = icons.book;
          else if (route.key == "promises") icon = icons.tree;
          else if (route.key == "achievements") icon = icons.star;

          return (
            <TabButton
              route={route}
              i={i}
              icon={icon}
              updateScreen={this.props.updateScreen.bind(this)}
            />
          );
        })}
      </View>
    );
  }
}
