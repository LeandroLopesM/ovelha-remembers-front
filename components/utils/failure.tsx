import Ionicons from '@expo/vector-icons/Ionicons';
import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";


type FailureProps = {
    err?: Error,
    children: string | ReactNode
}

export default function Failure({err, children}: FailureProps) {
    console.log(err)

    err = err || Error('No details')
    const msg = err.message === undefined?  'No details' : err.message
    return (
        <View style={style.lfCont}>
            <Ionicons style={style.lfIcon} name="warning-outline" size={100} color="gray" />
            <Text style={style.lfText}>{children}</Text>
            <Text style={style.lfErr}>{msg === undefined ? 'No details' : msg}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    lfErr: {
        fontSize: 12,
        fontFamily: 'monospace'
    },
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