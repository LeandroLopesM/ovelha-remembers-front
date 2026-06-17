import { Ovelha } from '@/scripts/types';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ReactNode } from 'react';
import { StyleSheet, Text, View } from "react-native";

type OvelhaCardProps = {
    info: Ovelha,
    children?: string | ReactNode
}
export default function OvelhaCard({info}: OvelhaCardProps) {
    return (
        <View style={style.container}>
            <Text style={style.name}>{info.name}</Text>
            <AntDesign name="caret-right" size={15} color="black" style={style.proceed}/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '5%',
        flex: 1,
        flexDirection: 'row',
        padding: 4
    },
    name: {
        fontSize: 20,
        zIndex: 1,
    },
    proceed: {
        alignSelf: 'flex-end',
        zIndex: 2,
        marginRight: 0,
        margin: 'auto',

    }
})