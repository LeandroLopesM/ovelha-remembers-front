import { Ovelha, OvelhaList } from "@/app/util/types";
import { style } from "@/conf";
import statelyFetch from "@/scripts/statelyFetch";
import { TESTING_OLIST } from "@/scripts/testing_data";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import OvelhaCard from "./ovelha_card";
import Failure from "./utils/failure";

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
    const [OMNasc, setOMNasc] = useState<Date>(new Date(0))
    const [OMGen, setOMGen] = useState<string>('')

    return (
        <View style={style.subContainer}>
            {/* //TODO: Finish modal para adicionar ovelha!! */}
            <Modal
                style={OMStyle.popup}
                visible={ovelhaManagerVisible}
                transparent={true}
                onRequestClose={() => {
                    setOvelhaManagerVisible(!ovelhaManagerVisible);
                }}>
                <TextInput onChangeText={setOMName} placeholder="Nome"></TextInput>
                <TextInput onChangeText={t => setOMNasc(new Date(t))} placeholder="Nascimento"></TextInput>
                <TextInput onChangeText={setOMGen} placeholder="Gênero"></TextInput>
                <TouchableOpacity onPress={(_) => setOvelhaManagerVisible(false)}>Pronto</TouchableOpacity>
            </Modal>

            <TouchableOpacity style={oStyle.subSubContainer} onPress={(_) => setOvelhaManagerVisible(true)}>
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

const OMStyle = StyleSheet.create({
    popup: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
})