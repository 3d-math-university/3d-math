import { StyleSheet, PixelRatio} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    homeContainer:{
        marginTop: 20*PixelRatio.get()+'%',
        alignItems: 'center',
        justifyContent: 'center',
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

    departmentsContainer:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexGrow: 0,
    },

    departmentsButton: {
        width: '100%',
        height: 150,
        position: 'relative'
    },

    departmentsButtonTitle:{
        textAlign: 'right',
        position: 'absolute',
        bottom: 5,
        right: 0,
        padding: 10,
        color: "#fff",
        fontSize: 16,
        width: '100%',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
    },

    imageButtonStyle: {
        width: '100%',
        height: 35*PixelRatio.get(),
    },

    InfoPageView:{
        color: '#111',
        flexGrow: 0,
    },

    InfoPageContainer:{
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
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color:'#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
    },

    StoryHeaderTextSmall:{
        textAlign: 'center',
        fontSize: 24,
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
        height: 75*PixelRatio.get(),
        flex: 1,
    },

    InfoPageHeader: {
        fontSize: 28,
        textAlign: 'center',
        color: '#121212',
        padding: 7*PixelRatio.get(),
    },

    InfoCard: {
        padding: 7*PixelRatio.get(),
    },

    InfoCardTop: {
        flexDirection: 'row'
    },

    InfoCardImage: {
        flex: 2,
        overflow: 'hidden',
        marginRight: 10,
        maxHeight: 200
    },

    InfoCardText: {
        flex: 2
    },

    InfoCardTextFull: {
        width: '100%'
    },

    InfoCardBottom: {
        marginTop: 10,
        textAlign: 'center'
    },

    InfoCardPerson: {
        marginTop: 5,
        marginBottom: 5
    },

    InfoCardPersonBold: {
        fontWeight: 'bold'
    },

    InfoListItem: {
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 12,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
    },

    InfoListText: {
        fontSize: 18,
        color: '#121212',
    },


    logo:{
        marginBottom: 10,
    },

    containerStyle: {
        alignItems: 'center',
        borderRadius: 5,
        margin: 0
    },

    footerText: {
        color: '#666',
        width: '100%',
        textAlign: 'center',
        margin: 10
    },
});
