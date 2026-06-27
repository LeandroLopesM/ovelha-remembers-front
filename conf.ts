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
    listTitle: {
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
    },
    popup: {
        minHeight: '30%',
        minWidth: '70%',
        maxWidth: '80%',
        maxHeight: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        margin: 'auto',
        gap: 7, 
    },
    popupBG: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        height: '100%',
        alignItems: 'center',
    },
    userInput: {
        width: '90%',
        height: '20%',
        fontSize: 21,
        borderColor: 'gray',
        borderWidth: 1,
        outline: 'none' 
    },
    submitContainer: {
        backgroundColor: 'green',
        color: 'white',
        margin: 'auto',
        width: '90%',
        height: '20%',
        textAlign: 'center',
        verticalAlign: 'middle',
    },
    submit: {
        color: 'white',
        margin: 'auto',
    },
    vacina: {
        fontSize: 16
    }
});


