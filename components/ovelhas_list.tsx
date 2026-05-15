import { Ovelha, OvelhaList } from "@/app/util/types";
import { style } from "@/conf";
import statelyFetch from "@/scripts/statelyFetch";
import { TESTING_OLIST } from "@/scripts/testing_data";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
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

    return (
        <View style={style.subContainer}>
            {
            progress === 'wait' ? (
                <ActivityIndicator></ActivityIndicator>
            ) : 
            progress === 'ok' ? (
                <FlatList
                    data={data as Ovelha[]}
                    renderItem={({item}) => (
                        // <Ionicons name="checkmark-circle" size={32} />
                        <Text>{item.name}</Text>
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