import React, { Component } from "react";
import { ImageBackground, Text, View, ScrollView } from "react-native";
import styles from "../../../style";

export class Achievements extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.InfoPageView}>
          <ImageBackground
            source={require("../../../../media/img/AlgebraFuncAnalysis/header.jpg")}
            style={styles.StoryHeaderImage}
          >
            <Text style={styles.StoryHeaderTextSmall}>Достижения</Text>
          </ImageBackground>

          <View style={styles.InfoPageContainer}>
            <Text style={styles.InfoPageText}>Достижения...</Text>
          </View>
          <Text style={styles.footerText}>CFU Labs &copy; 2019</Text>
        </ScrollView>
      </View>
    );
  }
}
