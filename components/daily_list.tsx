import { DailyList } from "@/app/util/types";
import { style } from "@/conf";
import statelyFetch from "@/scripts/statelyFetch";
import { TESTING_DLIST } from "@/scripts/testing_data";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import Failure from "./utils/failure";

export default function DailyTasks() {
    const [err, setErr] = useState(Error());
    const [fetchProgress, setProgress] = useState('wait');
    const [data, setData] = useState<string[]>([]);

    const getDaily = async () => {
        statelyFetch<DailyList>('ovelhas')
            .then(it => {
                setData(it.items)
                setProgress('ok')
            })
            .catch(err => {
                setErr(err)
                setProgress('fail')
            })
            .finally(( ) => {
                setProgress('ok')
                setData(TESTING_DLIST.items)
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
                    <Failure err={err}>Falha em pegar atividades</Failure>
                )
            }
        </View>
    )
}