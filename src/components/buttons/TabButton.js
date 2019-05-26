import React from "react";
import { TouchableOpacity, ImageBackground } from "react-native";
import styles from "../../style";
import Animated from "react-native-reanimated";

export class TabButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.tabButtonWrapper}
        onPress={() => this.props.updateScreen(this.props.i)}
      >
        <ImageBackground
          source={this.props.icon}
          style={styles.tabButtonImage}
        />
        <Animated.Text style={styles.tabButtonText}>
          {this.props.route.title}
        </Animated.Text>
      </TouchableOpacity>
    );
  }
}
