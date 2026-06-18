import { style } from "@/conf";
import statelyFetch from "@/scripts/statelyFetch";
import { store } from "@/scripts/storage";
import { TESTING_DLIST } from "@/scripts/testing_data";
import { DailyList } from "@/scripts/types";
import Checkbox from "expo-checkbox";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import Failure from "./utils/failure";

export default function DailyTasks() {
    const [err, setErr] = useState(Error());
    const [fetchProgress, setProgress] = useState('wait');
    const [data, setData] = useState<string[]>([]);

    const [taskStateList, setTaskStateList] = useState<boolean[]>([]);

    const getDaily = async () => {
        statelyFetch<DailyList>('tasks')
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
                setTaskStateList(new Array(TESTING_DLIST.items.length).fill(false))
                store('tasks', JSON.stringify(TESTING_DLIST.items))
            })
    }

    useEffect(() => { getDaily(); }, []);
    
    const addDynamicState = (index : number, newob : boolean) => {
        setTaskStateList((prev) =>
        prev.map((item, i) =>
            i === index ? newob : item
        )
        );
    };

    return (
        <View style={[style.subContainer, taskStyle.container]}>
            <Text style={style.dailyTitle}>Lembretes Diários</Text>
            {
                fetchProgress === 'wait' ? (
                    <ActivityIndicator></ActivityIndicator>
                ) :
                fetchProgress === 'ok' ? (
                    <FlatList
                        data={data}
                        style={taskStyle.superTaskList}
                        renderItem={({item, index}) => {
                            return (
                                <View style={taskStyle.dailyActivity}>
                                    <Checkbox
                                        value={taskStateList[index] ?? false}
                                        onValueChange={(value) => addDynamicState(index, value)}
                                    />
                                    <Text style={taskStyle.taskListItem}>{item}</Text>
                                </View>
                            )}
                        }></FlatList>
                ) : (
                    <Failure err={err}>Falha em pegar atividades</Failure>
                )
            }
        </View>
    )
}

const taskStyle = StyleSheet.create({
    dailyActivity: {
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        alignItems: 'center',
    },

    superTaskList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },

    taskListItem: {
        fontSize: '18px'
    },
    container: {
        height: '60%'
    }
})