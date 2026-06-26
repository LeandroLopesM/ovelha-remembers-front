import { style } from "@/conf";
import statelyFetch from "@/scripts/storage";
import { Ovelha } from "@/scripts/types";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import OvelhaCard from "../ovelha/card";
import Failure from "../utils/failure";
import OvelhaPusher from "./push";

export var data: Ovelha[], setData: (arg0: Ovelha[]) => void;

export function newData(ov: Ovelha) {
    setData([...data, ov])
}

export default function OvelhasList() {
    const [progress, setProgress] = useState('wait');
    const [err, setErr] = useState(Error('No details'));
    [data, setData] = useState<Ovelha[]>([]);

    const getOvelhas = async () => {
        statelyFetch<Ovelha[]>('ovelhas')
            .then(it => {
                setData(it)
                setProgress('ok')
            })
            .catch(err => {
                setErr(err)
                setProgress('fail')
            })
    }

    useEffect(() => { getOvelhas(); }, []);

    const [ovelhaManagerVisible, setOvelhaManagerVisible] = useState(false)
    return (
        <View style={style.subContainer}>
            <OvelhaPusher output={newData} isOpen={ovelhaManagerVisible} setOpen={setOvelhaManagerVisible} />

            <TouchableOpacity style={oStyle.subSubContainer} onPress={_ => setOvelhaManagerVisible(true)}>
                <Text style={[oStyle.title, style.dailyTitle]}>Ovelhas</Text>
                <FontAwesome5 name="plus" size={24} color="black" style={oStyle.add} />
            </TouchableOpacity>

            {
            progress === 'wait' ? (
                <ActivityIndicator></ActivityIndicator>
            ) : 
            progress === 'ok' ? (
                <FlatList
                    data={data as Ovelha[]}
                    renderItem={({item}) => (
                        // <Ionicons name="checkmark-circle" size={32} />
                        <OvelhaCard info={item}></OvelhaCard>
                    )}
                    ListEmptyComponent={() => (
                        <Text>Sem ovelhas!</Text>
                    )}></FlatList>
            ) : (
                <Failure err={err}>Falha ao carregar ovelhas</Failure>
            )
            }
        </View>
    );
}

const oStyle = StyleSheet.create({
    add: {
        alignSelf: 'flex-end',
        marginRight: '5%',
        margin: 'auto',
    },
    title: {
        margin: 'auto',
        left: '16%',
    },
    subSubContainer: {
        width: '100%',
        height: '15%',
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

