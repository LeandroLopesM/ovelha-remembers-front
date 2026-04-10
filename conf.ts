import { StyleSheet } from "react-native";

export const SERVER_ADDR = 'localhost:8080';

export const style = StyleSheet.create({
    main: {
        backgroundColor: '#ddd',
        flex:1,
        width: '100%',
        height: '100%',
    },
    subContainer: {
        flex: 1,
        width: '92%',
        margin: '2%',
        padding: '2%',
        backgroundColor: 'white',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    header: {
        height: '10%',
        width: '100%',
        position: 'static',
        backgroundColor: 'green'
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily: 'Consolas',
        margin: 'auto'
    },
    dailyTitle: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: '-1%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '1%',
    },
    listItem: {
        color: 'black',
        fontSize: 15,
        fontFamily: 'Arial'
    },
    ovelhaItem: {
        color: 'black',
        padding: 'auto'
    }
});
