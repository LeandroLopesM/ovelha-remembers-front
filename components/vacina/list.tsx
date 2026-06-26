import { style } from "@/conf";
import statelyFetch from "@/scripts/storage";
import { Vacina } from "@/scripts/types";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Failure from "../utils/failure";

export var data: Vacina[], setData: (arg0: Vacina[]) => void;

export default function VacinaList({vacinaEditor, setVacinaEditor} : any) {
    const [progress, setProgress] = useState('wait');
    const [err, setErr] = useState(Error('No details'));
    [data, setData] = useState<Vacina[]>([]);

    const getVacinas = async () => {
        statelyFetch<Vacina[]>('vacinas')
            .then(it => {
                setData(it)
                setProgress('ok')
            })
            .catch(err => {
                setErr(err)
                setProgress('fail')
            })
    }

    useEffect(() => { getVacinas(); }, []);
    
    return (
        <View style={vacinaStyle.vacinaContainer}>
            
            <TouchableOpacity style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10}} onPress={_ => setVacinaEditor(true)}>
                <Text style={{
                    fontSize: 24,
                    alignSelf: 'center',
                    marginBottom: 10,
                }}><b>Vacinas</b></Text>
                <FontAwesome5 name="plus" size={24} color="black" />
            </TouchableOpacity>

            <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '15px',
                        marginBottom: 10,
                        alignContent: 'center',
                        justifyContent: 'space-around'
                    }}>
                <Text>Vacina</Text>
                <Text>Aplicação</Text>
                <Text>Vencimento</Text>
            </View>
            {
                progress === 'wait' ? (
                    <ActivityIndicator></ActivityIndicator>
                ) : progress === 'ok' ? (
                    <FlatList
                        data={data as Vacina[]}
                        renderItem={({item}) => (
                            <View>
                                <TouchableOpacity
                                        onPress={() => setVacinaEditor(!vacinaEditor)}
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: '15px',
                                            marginBottom: 10,
                                            justifyContent: 'space-around'
                                        }}>
                                    <AntDesign name='edit' size={20} color='black'/>
                                    <View style={{overflow: 'scroll'}}> 
                                        <Text style={style.vacina}>{item.name}</Text>
                                    </View>
                                    <Text style={style.vacina}>{new Date(item.date).toLocaleDateString()}</Text>
                                    <Text style={style.vacina}>{new Date(item.due).toLocaleDateString()}</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        ListEmptyComponent={() => (
                        <View style={{position: 'static', height: '100%'}}>
                            <Text style={{margin: 'auto', marginTop: 20, fontSize: 20}}>Sem vacinas!</Text>
                        </View>
                    )} />
                ) : (
                    <Failure err={err}>Falha ao carregar vacinas</Failure>
                )
            }
        </View>
    )
}

export const vacinaStyle = StyleSheet.create({
    vacinaContainer: {
        flexDirection: 'column'
    },
    vacinaHeader: {
        flexDirection: 'row'
    }
});