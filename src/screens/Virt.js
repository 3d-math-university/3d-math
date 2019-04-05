import React, { Component } from 'react';
import { WebView } from 'react-native';

class VirtScreen extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://avladimir.beget.tech/index.html'}}
      />
    );
  }
}

export {VirtScreen};