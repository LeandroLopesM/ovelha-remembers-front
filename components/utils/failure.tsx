import Ionicons from '@expo/vector-icons/Ionicons';
import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";


type FailureProps = {
    children: string | ReactNode
}

export default function Failure({children}: FailureProps) {
    // console.log(children)
    return (
        <View style={style.lfCont}>
            <Ionicons style={style.lfIcon} name="warning-outline" size={100} color="gray" />
            <Text style={style.lfText}>{children}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    lfCont: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },
    lfText: {
        color: 'gray',
        margin: 'auto',
        fontSize: 21,
        padding: 0,
        fontWeight: 'bold',
    },
    lfIcon: {
        alignSelf: 'center',
        height: '5%',
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
})