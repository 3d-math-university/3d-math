import { GLView } from 'expo';
import React from "react";
import ExpoTHREE, { THREE } from "expo-three";
import { PixelRatio, TouchableWithoutFeedback,Dimensions} from 'react-native';
import { Switch } from 'react-native-gesture-handler';
//import * as THREE from 'three'
class VirtScreen extends React.Component {

  constructor(props){
    super(props);
    this.prevX1;
    this.prevX2;
    this.prevDiff;
    this.info = `{
      "2018_1204_140215_048.jpg" : {
        "points":{
          "1":{
            "coords":[60, -15, 25],
            "next": "2018_1206_104942_019.jpg",
            "longitude": 113.4
          }
          
        }
      },

      "2018_1206_104942_019.jpg" : {
        "points":{
          "0":{
            "coords":[-30, -5, 60],
            "next": "2018_1206_103734_002.jpg",
            "longitude": 135.1
          },

          "1":{
            "coords":[4, -20, 50],
            "next": "2018_1204_140215_048.jpg",
            "longitude": 15.1
          }
          
        }
      },
      
      "2018_1206_103734_002.jpg" : {
        "points":{
          "0":{
            "coords":[3, -5, 60],
            "next": "2018_1206_103843_003.jpg",
            "longitude": 138.5
          },

          "1":{
            "coords":[50, -30, 45],
            "next": "2018_1206_104942_019.jpg",
            "longitude": 113.4
          },

          "2":{
            "coords":[-85, -25, 13],
            "next": "2018_1206_104545_008.jpg",
            "longitude": 52
          }						
        }
      },

      "2018_1206_103843_003.jpg" : {
        "points":{
          "0":{
            "coords":[-35, 0, 60],
            "next": "2018_1206_103929_005.jpg",
            "longitude": 31
          },

          "1":{
            "coords":[-30, -30, 60],
            "next": "2018_1206_103734_002.jpg",
            "longitude": 135.1
          }
          
        }
      },

      "2018_1206_103929_005.jpg" : {
        "points":{
          "0":{
            "coords":[53, -20, 30],
            "next": "2018_1206_104013_007.jpg",
            "longitude": -5.3
          },

          "1":{
            "coords":[15, -32, -70],
            "next": "2018_1206_103734_002.jpg",
            "longitude": 135.1
          }
          
        }
      },

      "2018_1206_104013_007.jpg": {
        "points":{
          "0":{
            "coords":[50, -18, -6],
            "next": "2018_1206_104209_003.jpg",
            "longitude": -2.4
          },

          "1":{
            "coords":[-50, -18, 4],
            "next": "2018_1206_103929_005.jpg",
            "longitude": 281.6
          },
          

          "2":{
            "coords":[-3, -15, -40],
            "next": "geometry.jpg",
            "longitude": -298.6
          }
          
        }
      },

      "geometry.jpg": {
        "points":{
          "0":{
            "coords":[-30, -18, 55],
            "next": "2018_1206_104013_007.jpg",
            "longitude": -2.4
          }						
        }
      },

      "2018_1206_104209_003.jpg": {
        "points":{
          "0":{
            "coords":[50, -18, -3],
            "next": "2018_1206_104332_004.jpg",
            "longitude": 304.8
          },

          "1":{
            "coords":[-50, -18, 0],
            "next": "2018_1206_104013_007.jpg",
            "longitude": 174.9
          }
          
        }
      },

      "2018_1206_104332_004.jpg": {
        "points":{
          "0":{
            "coords":[40, -25, -60],
            "next": "2018_1206_104420_006.jpg",
            "longitude": 4.2
          },

          "1":{
            "coords":[-37, -25, 60],
            "next": "2018_1206_104209_003.jpg",
            "longitude": 179.9
          }
          
        }
      },

      "2018_1206_104420_006.jpg": {
        "points":{
          "0":{
            "coords":[-43, -15, 20],
            "next": "matan.jpg",
            "longitude": 43.7
          },

          "1":{
            "coords":[-80, -25, -10],
            "next": "2018_1206_104332_004.jpg",
            "longitude": 121.9
          }
          
        }
      },

      "matan.jpg": {
        "points":{
          "1":{
            "coords":[-60, -18, 23],
            "next": "2018_1206_104420_006.jpg",
            "longitude": 121.9
          }          
        }
      },

      "2018_1206_104545_008.jpg": {
        "points":{
          "0":{
            "coords":[58, -28, 60],
            "next": "2018_1206_104620_010.jpg",
            "longitude": 43.7
          },

          "1":{
            "coords":[-53, -28, -60],
            "next": "2018_1206_103734_002.jpg",
            "longitude": 45.2
          }
          
        }
      },

      "2018_1206_104620_010.jpg": {
        "points":{
          "0":{
            "coords":[65, -28, 50],
            "next": "2018_1206_104733_014.jpg",
            "longitude": 51.6
          },

          "1":{
            "coords":[-65, -28, -54],
            "next": "2018_1206_104545_008.jpg",
            "longitude": 226
          }
          
        }
      },

      "2018_1206_104733_014.jpg": {
        "points":{
          "0":{
            "coords":[58, -28, 60],
            "next": "2018_1206_104832_018.jpg",
            "longitude": 5.6
          },

          "1":{
            "coords":[-53, -28, -60],
            "next": "2018_1206_104620_010.jpg",
            "longitude": 217.4
          },

          "2":{
            "coords":[30, -10, 1],
            "next": "primat.jpg",
            "longitude": 217.4
          }
          
        }
      },

      "primat.jpg": {
        "points":{
          "0":{
            "coords":[-42, -10, 10],
            "next": "2018_1206_104733_014.jpg",
            "longitude": 5.6
          }
        }
      },

      "2018_1206_104832_018.jpg": {
        "points":{
          "0":{
            "coords":[-65, -20, -4],
            "next": "2018_1206_104733_014.jpg",
            "longitude": 226.7
          },

          "1":{
            "coords":[-30, -10, -22],
            "next": "it.jpg",
            "longitude": 217.4
          }
          
        }
      },
      
      "it.jpg": {
        "points":{
          "1":{
            "coords":[-15, -10, -30],
            "next": "2018_1206_104832_018.jpg",
            "longitude": 217.4
          }          
        }
      }
    }`
    this.info = JSON.parse(this.info);
    this.files = {
      "2018_1204_140215_048.jpg": require('./2018_1204_140215_048.jpg'),      
      "2018_1206_104942_019.jpg": require('./2018_1206_104942_019.jpg'),                     
      "2018_1206_103734_002.jpg": require('./2018_1206_103734_002.jpg'), 
      "2018_1206_103843_003.jpg": require('./2018_1206_103843_003.jpg'),
      "2018_1206_103929_005.jpg": require('./2018_1206_103929_005.jpg'), 
      "2018_1206_104013_007.jpg": require('./2018_1206_104013_007.jpg'),
      "geometry.jpg": require('./geometry.jpg'), 
      "2018_1206_104209_003.jpg": require('./2018_1206_104209_003.jpg'),
      "2018_1206_104332_004.jpg": require('./2018_1206_104332_004.jpg'),
      "2018_1206_104420_006.jpg": require('./2018_1206_104420_006.jpg'),
      "matan.jpg": require('./matan.jpg'),
      "2018_1206_104545_008.jpg": require('./2018_1206_104545_008.jpg'),
      "2018_1206_104620_010.jpg": require('./2018_1206_104620_010.jpg'),
      "2018_1206_104733_014.jpg": require('./2018_1206_104733_014.jpg'),
      "primat.jpg": require('./primat.jpg'),
      "2018_1206_104832_018.jpg": require('./2018_1206_104832_018.jpg'),
      "it.jpg": require('./it.jpg'),
    }
    this.width = Dimensions.get('window').width;
    this.height = Dimensions.get('window').height;

    this.manualControl = false;
    this.longitude = 15.1;
    this.latitude = 0;
    this.savedX;
    this.savedY;
    this.savedLongitude;
    this.savedLatitude;
    this.raycaster = new THREE.Raycaster();
    this.mouseVector = new THREE.Vector3();
    this.nextPhoto = "2018_1204_140215_048.jpg";
    this.getIntersects = ( x, y ) => {
      x = ( x / this.width ) * 2 - 1;
      y = - ( y / this.height ) * 2 + 1;
      this.mouseVector.set( x, y, 0.5 );
      this.raycaster.setFromCamera( this.mouseVector, this.camera );
      return this.raycaster.intersectObject( this.group, true );
    }
  }
  componentDidMount() {
    THREE.suppressExpoWarnings(); 
  }

  componentWillUnmount() {
    THREE.suppressExpoWarnings(false);
  }
  render() {
    return (
      <TouchableWithoutFeedback      
        style={{ flex: 1 }}
        onPress={(event) => {
          event.preventDefault();       
          var intersects = this.getIntersects( event.layerX, event.layerY );
          if ( intersects.length > 0 ) {
            this.nextPhoto = intersects[0].object.next;
            //this.longitude = intersects[0].object.longitude;
            this.showPanorama(this.nextPhoto);            
          }        
        }}
      >
      <GLView
          style={{ flex: 1, backgroundColor:"#fff" }}
          onContextCreate={this.onContextCreate}
      ></GLView>  
     </TouchableWithoutFeedback> 
    );
  }
 
  onContextCreate = async gl => {

    this.cameraPoint = (longitude) => {
      this.camera.target.x = 500 * Math.cos(THREE.Math.degToRad(longitude));
      this.camera.target.y = 500 * Math.cos(THREE.Math.degToRad(90));
      this.camera.target.z = 500 * Math.sin(THREE.Math.degToRad(longitude));      
      this.camera.lookAt(this.camera.target);
    }
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
    const scale = PixelRatio.get();

    const scene = new THREE.Scene();
    this.scene = scene;
    const camera = new THREE.PerspectiveCamera(
      75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000
    );

    camera.target = new THREE.Vector3(0, 0, 0);
    //camera.position.z = 4;    
    this.camera=camera;

    this.renderer = new ExpoTHREE.Renderer({ gl });
    this.renderer.setSize(width, height);
    this.sphere = new THREE.SphereGeometry(100, 100, 40);
    this.sphere.applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1));			
    this.group = new THREE.Group();		

    this.showPanorama = async (nextPhoto) => {
      // creation of the sphere material
      const texture = await ExpoTHREE.loadAsync(this.files[nextPhoto]);
      // const texture = await ExpoTHREE.loadAsync(file);      
      file = null; 
     // const texture = await ExpoTHREE.loadAsync(toDataURL(path));
      var sphereMaterial = new THREE.MeshBasicMaterial( { map: texture } );
    
      // geometry + material = mesh (actual object)
      var sphereMesh = new THREE.Mesh(this.sphere, sphereMaterial);
      this.scene.add(sphereMesh);

      this.showArrows(nextPhoto);
    }
    this.showArrows = async (nextPhoto) => {

      this.scene.remove(this.group);

      this.group = new THREE.Group();
      this.scene.add( this.group );
      
      var arrows = typeof(this.info[nextPhoto]) != 'undefined' ? this.info[nextPhoto]["points"] : [];
      console.log(arrows)
      for(var i in arrows){
        if(this.info[nextPhoto]["points"][i].coords.length == 3){
          // var spriteMap = new THREE.TextureLoader().load( './arrow.png' ); 
          var spriteMap = await ExpoTHREE.loadAsync( require('./arrow.png' ));      
          var sprite = new THREE.Sprite( new THREE.SpriteMaterial( { map: spriteMap} ) );
          sprite.position.set(...this.info[nextPhoto]["points"][i].coords);
          sprite.scale.set( 8, 8, 8 );
          sprite.next = this.info[nextPhoto]["points"][i].next;
          sprite.longitude = this.info[nextPhoto]["points"][i].longitude;
          this.group.add( sprite );
        }
      }
    }  
    this.render = () => {
      requestAnimationFrame(this.render);
      this.latitude = Math.max(-85, Math.min(85, this.latitude));
      this.cameraPoint(this.longitude);
      this.renderer.render(this.scene, this.camera);
      gl.endFrameEXP();
    };
    this.showPanorama(this.nextPhoto);    
    this.render();

  }; 
}


export {VirtScreen};