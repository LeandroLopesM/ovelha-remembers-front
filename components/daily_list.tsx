import { DailyList } from "@/app/util/types";
import { SERVER_ADDR, style } from "@/conf";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import Failure from "./utils/failure";

export default function DailyTasks() {
    const [fetchProgress, setProgress] = useState('wait');
    const [data, setData] = useState<string[]>([]);

    const getDaily = async () => {
        try {
            const response = await fetch(`${SERVER_ADDR}/daily`);
            const json = (await response.json()) as DailyList;
            setData(json.items);
        } catch (error) {
            console.error(error);
            // setData(['Failed to reach server'])
            setProgress('fail')
            return
        } 
        setProgress('ok');
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