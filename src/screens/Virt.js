import React, { Component } from 'react';
import { WebView } from 'react-native';

class VirtScreen extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://skycolor.space/wp/panoram'}}
      />
    );
  }
}

export {VirtScreen};