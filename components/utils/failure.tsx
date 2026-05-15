import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

type FailureProps = {
    children: string | ReactNode
}

export default function Failure({children}: FailureProps) {
    // console.log(children)
    return (
        <View style={style.lfCont}>
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
        color: '#000',
        margin: 'auto',
        fontSize: 21,
    }
})