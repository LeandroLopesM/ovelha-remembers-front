import { TESTING_URI } from "@/scripts/testing_data";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Image, StyleSheet, View } from "react-native";

export default function OvelhaInfoHeader({photo, editorVisible, setEditorVisible}: any) {
    return (
        <View style={ocStyle.card}>
            <AntDesign
                name='edit'
                size={32}
                color='black'
                style={ocStyle.leftAlign}
                onPress={() => setEditorVisible(!editorVisible)}/>

            <Image
                source={{uri: photo || TESTING_URI}}
                style={{minWidth: '80%', minHeight: '30%'}}
                resizeMode={'contain'}/>

            <AntDesign
                name='delete'
                size={32}
                color='black'
                style={ocStyle.rightAlign}/>
        </View>
    )
}

const ocStyle = StyleSheet.create({
    card: {
        position: 'static',
        width: '100%',
        height: '20%',
        flexDirection: 'row'
    },
    rightAlign: {
        marginRight: 10,
        // marginLeft: 20,
        margin: 'auto',
    },
    leftAlign: {
        marginLeft: 10,
        // margin: 0,
        margin: 'auto',
    },
})