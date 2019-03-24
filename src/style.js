import { StyleSheet, PixelRatio} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    homeContainer:{
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
    homePageHeader:{
        color: '#6c609e',
        fontSize: 36,
        fontWeight: 'bold',
        textShadowColor: '#121212',
        textShadowRadius: 2,
        textShadowOffset: {
            width: 0,
            height: 1
        }
    },
    homePageMainMenu: {
        marginTop: 50,
    },
    homePageLink: {
        color: '#121212',
        fontSize: 21,
        fontWeight: 'bold',
        margin: 10,
        width: '100%',
        textAlign: 'center'
    },
    homePageFooter: {
        color: '#666',
        width: '100%',
        textAlign: 'center',
        position: 'absolute',
        bottom: 10
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
      margin: 0
      // height: 30
    },
    imageStyle: {
      margin: 0
    },
});
