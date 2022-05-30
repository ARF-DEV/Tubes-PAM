import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    title: {
        marginBottom: 20,
    },
    titleText: {
        fontSize: 30,
        color: '#498A77',
        fontFamily: 'Roboto-Bold', 
    },
    searching: {
        marginBottom: 20,
    },
    menuText: {
        fontSize: 28,
        color: '#498A77',
        fontFamily: 'Roboto-Bold',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        marginBottom: 10,
        padding: 10,
        flexDirection: 'row',
        borderRadius: 10,
    },
    image: {
        marginRight: 20,
    },
    foodTitle: {
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        color: '#498A77',
    },
    menuFlatList: {
        height: '58%',
    },
});

export default styles;