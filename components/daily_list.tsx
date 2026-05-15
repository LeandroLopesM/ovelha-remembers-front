import { DailyList } from "@/app/util/types";
import { style } from "@/conf";
import statelyFetch from "@/scripts/statelyFetch";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import Failure from "./utils/failure";

export default function DailyTasks() {
    const [fetchProgress, setProgress] = useState('wait');
    const [data, setData] = useState<string[]>([]);

    const getDaily = async () => {
        statelyFetch<DailyList>('ovelhas')
            .then(it => {
                setData(it.items)
                setProgress('ok')
            })
            .catch(err => {
                setProgress('fail')
            })
    }

    useEffect(() => { getDaily(); }, []);
    
    return (
        <View style={style.subContainer}>
            <Text style={style.dailyTitle}>Lembretes Diários</Text>
            {
                fetchProgress === 'wait' ? (
                    <ActivityIndicator></ActivityIndicator>
                ) :
                fetchProgress === 'ok' ? (
                    <FlatList
                        data={data}
                        renderItem={({item}) => (
                            <Text style={style.listItem}>{item}</Text>
                        )}></FlatList>
                ) : (
                    <Failure>Falha em pegar atividades</Failure>
                )
            }
        </View>
    )
}