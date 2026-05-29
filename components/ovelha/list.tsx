import { Ovelha, OvelhaList } from "@/app/util/types";
import { style } from "@/conf";
import statelyFetch from "@/scripts/statelyFetch";
import { TESTING_OLIST } from "@/scripts/testing_data";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import OvelhaCard from "../ovelha/card";
import Failure from "../utils/failure";
import OvelhaPusher from "./push";

export default function OvelhasList() {
    const [progress, setProgress] = useState('wait');
    const [err, setErr] = useState(Error('No details'));
    const [data, setData] = useState<Ovelha[] | string[]>([]);

    const getDalvas = async () => {
        statelyFetch<OvelhaList>('ovelhas')
            .then(it => {
                setData(it.items)
                setProgress('ok')
            })
            .catch(err => {
                setErr(err)
                setProgress('fail')
            })
            .finally(( ) => { // Here for testing
                setProgress('ok')
                setData(TESTING_OLIST.items)
            })
    }

    useEffect(() => { getDalvas(); }, []);

    const [ovelhaManagerVisible, setOvelhaManagerVisible] = useState(false)
    const [OMName, setOMName] = useState<string>('')
    const [OMNasc, setOMNasc] = useState<string>('')
    const [OMGen, setOMGen] = useState<string>('')

    return (
        <View style={style.subContainer}>
            <OvelhaPusher isOpen={ovelhaManagerVisible} setOpen={setOvelhaManagerVisible} />

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

