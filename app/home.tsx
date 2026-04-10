import OvelhasList from "@/components/ovelhas_list";
import { SERVER_ADDR, style } from "@/conf";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { DailyList } from "./util/types";

export default function Home() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<string[]>([]);

    const getDaily = async () => {
        try {
            const response = await fetch(`${SERVER_ADDR}/daily`);
            const json = (await response.json()) as DailyList;
            setData(json.items);
        } catch (error) {
            console.error(error);
            setData(['Failed to reach server'])
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => { getDaily(); }, []);

    return (
        <View style={style.main}>
            <View style={style.header}>
                <Text style={style.title}>Ovelha Remembers</Text>
            </View>

            <View style={style.subContainer}>
                <Text style={style.dailyTitle}>Lembretes Diários</Text>
                {
                    isLoading ? (
                        <ActivityIndicator></ActivityIndicator>
                    ) : (
                        <FlatList
                            data={data}
                            renderItem={({item}) => (
                                <Text style={style.listItem}>{item}</Text>
                            )}></FlatList>
                    )
                }
            </View>
            <OvelhasList />
        </View> 
    );
}