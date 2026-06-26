import DailyList from "@/components/daily/list";
import Header from "@/components/header";
import OvelhasList from "@/components/ovelha/list";
import { style } from "@/conf";
import { newOvelha } from "@/scripts/storage";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {
    return (
        <View style={style.main}>
            <TouchableOpacity onPress={() => newOvelha()}><Text>Criar ovelha dev</Text></TouchableOpacity>
            {/* DEV: (Remove before flight) */}

            <Header />
            <DailyList />
            <OvelhasList />
        </View>
    );
}