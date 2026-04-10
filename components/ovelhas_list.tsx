import { Ovelha, OvelhaList } from "@/app/util/types";
import { SERVER_ADDR, style } from "@/conf";
import Ionicons from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

export default function OvelhasList() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Ovelha[] | string[]>([]);

    const getDalvas = async () => {
        try {
            const response = await fetch(`${SERVER_ADDR}/ovelhas`);
            const json = (await response.json()) as OvelhaList;
            setData(json.items);
        } catch (error) {
            console.error(error);
            setData([])
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => { getDalvas(); }, []);

    return (
        <View style={style.subContainer}>
            {
            isLoading ? (
                <ActivityIndicator></ActivityIndicator>
            ) : (
                <FlatList
                    data={data as Ovelha[]}
                    renderItem={({item}) => (
                        <Ionicons name="checkmark-circle" size={32} />
                    )}
                    ListEmptyComponent={() => (
                        <Text>Sem ovelhas :(</Text>
                    )}></FlatList>
            )
            }
        </View>
    );
}