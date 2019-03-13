import { StyleSheet, PixelRatio} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    HomeContainer:{
      marginTop: 20*PixelRatio.get()+'%',
      //flex: -1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    DepartmentsContainer:{
      display: 'flex', 
      flexDirection: 'row', 
      flexWrap: 'wrap',
    },
    InfoPageView:{             
      color: '#111',
      //flex: 1,  
      flexGrow: 0,
      //height: ',     
   //   padding: 10*PixelRatio.get(),
   
    },
    InfoPageContainer:{             
    //  
      width: '100%',   
      color: '#111',  
    },
    StoryHeaderImage:{
      width: '100%',      
      height: 75*PixelRatio.get(),
      flex: 1,
      justifyContent: 'center',
    },
    StoryHeaderText:{
      textAlign: 'center', // <-- the magic 
      fontSize: 40,   
      fontWeight: 'bold',      
      color:'#fff',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
    }, 
    InfoPageText:{
      padding: 7*PixelRatio.get(),
      fontSize: 14,
    },
    InfoPageImage:{
      width: '100%',
      maxHeight: 100*PixelRatio.get(),
    },
    logo:{
      marginBottom: 10,
    },
    h1:{
      color: '#000',      
      fontSize: 20,
    },
    mainMenu: {
      fontSize: 17,
      fontWeight: 'bold',
      marginTop: 10,
    },    
    imageButtonDepart: {
      width: '50%',
      height: 60*PixelRatio.get(),  
    },    
    imageButtonDepartTitle:{       
      textAlign: 'right',
      marginTop:40*PixelRatio.get(),
      marginRight: 3*PixelRatio.get(),
      color: "#fff",             
      fontSize: 12,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
    },


    imageButtonStyle: {
      width: '50%',
      height: 60*PixelRatio.get(),
    },    
    imageButtonTitle:{},

    containerStyle: {
      alignItems: 'center',
      borderRadius: 5,
      margin: 0,
      height: 30
    },
    imageStyle: {
      margin: 0
    },
    MainMenuTextStyle: {
      /*fontFamily: fonts.regular,*/
      
      color: '#000',
      fontSize: 16,
      margin: 10
    }
  });

