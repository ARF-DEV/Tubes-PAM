import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    backNav: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    titleText: {
        fontSize: 28,
        color: '#498A77',
        fontFamily: 'Roboto-Bold', 
    },
    descriptionCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    image: {
        width: '100%',
        borderRadius: 10,
        marginBottom:20 ,
    },
    descriptionText: {
        marginBottom: 20,
        marginHorizontal: 20,
    },
    menuTitle: {
        fontFamily: 'Roboto-Bold',
        fontSize: 24,
        color: '#498A77',
        marginBottom: 10,
    },
    descText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 18,
        color: '#000000',
        marginBottom: 10,
    },
    theButton: {
        marginTop: '20%',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#498A77',
        height: 40,
        borderRadius: 20,
        alignItems: 'center',        
        justifyContent: 'center',
    },
    textButton: {
        fontFamily: 'Roboto-Medium',
        color: '#ffff',
        fontSize: 16,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center", 
        width: '100%',   
    },
    modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 50,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText:{
        fontSize:20,
        color: "#498A77",
    },
});

export default styles;