import React from "react";
import {View} from "react-native";
export class VirtScreen extends React.Component {
    render() {
      return (
      <View></View>
      );
    }  
  }
/*_onGLContextCreate = async (gl) => {
    // Here is where we will define our scene, camera and renderer
    // 1. Scene
  var scene = new THREE.Scene(); 
// 2. Camera
  const camera = new THREE.PerspectiveCamera(
  75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);
// 3. Renderer
  const renderer = ExpoTHREE.createRenderer({ gl });
  renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
}*/