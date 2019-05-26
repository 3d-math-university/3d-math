import * as React from "react";
import { Dimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { History } from "./History";
import { Achievements } from "./Achievements";
import { Promises } from "./Promises";
import { Subjects } from "./Subjects";
import { TabBar } from "../../../components/TabBar";

export class AlgebraFuncAnalysis extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "history", title: "История" },
      { key: "subjects", title: "Дисциплины" },
      { key: "promises", title: "Перспективы" },
      { key: "achievements", title: "Достижения" }
    ]
  };
  renderScene = SceneMap({
    history: History,
    subjects: Subjects,
    promises: Promises,
    achievements: Achievements
  });
  renderTabBar = props => {
    return <TabBar {...props} />;
  };
  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this.renderScene}
        renderTabBar={this.renderTabBar}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get("window").width }}
        tabBarPosition="bottom"
      />
    );
  }
}
