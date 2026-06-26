import { style } from "@/conf";
import statelyFetch from "@/scripts/storage";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import Failure from "../utils/failure";
import DailyItem from "./item";

export default function DailyList() {
    const [err, setErr] = useState(Error());
    const [fetchProgress, setProgress] = useState('wait');
    const [data, setData] = useState<string[]>([]);

    const getDaily = async () => {
        statelyFetch<Array<string>>('tasks')
            .then(it => {
                setData(it)
                setProgress('ok')
                // console.error(it, it.length);
                // taskListStates.rawSet(new Array(it.length).fill(false))
            })
            .catch(err => {
                setErr(err)
                setProgress('fail')
            })
    }

    useEffect(() => { getDaily(); }, []);

    return (
        <View style={[style.subContainer, listStyle.container]}>
            <Text style={style.dailyTitle}>Lembretes Diários</Text>
            {
                fetchProgress === 'wait' ? (
                    <ActivityIndicator></ActivityIndicator>
                ) :
                fetchProgress === 'ok' ? (
                    <FlatList
                        data={data}
                        style={listStyle.superTaskList}
                        renderItem={({item}) => (<DailyItem item={item}/>)}></FlatList>
                ) : (
                    <Failure err={err}>Falha em pegar atividades</Failure>
                )
            }
        </View>
    )
}

const listStyle = StyleSheet.create({
    superTaskList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },
    container: {
        height: '60%'
    }
})