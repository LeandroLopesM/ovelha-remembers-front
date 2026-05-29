import DailyTasks from "@/components/daily_list";
import OvelhasList from "@/components/ovelha/list";
import { style } from "@/conf";
import { Text, View } from "react-native";

export default function Home() {
    

    return (
        <View style={style.main}>
            <View style={style.header}>
                <Text style={style.title}>Ovelha Remembers</Text>
            </View>

            <DailyTasks />  
                
            <OvelhasList />
        </View> 
    );
}