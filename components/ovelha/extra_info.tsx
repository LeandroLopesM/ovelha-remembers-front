import { ovelhaStyle } from "@/app/(root)/(ovelhas)/ovelha_info";
import { Text, View } from "react-native";

function formatData(d: Date): string {
    let now = new Date();
    
    if (Math.abs(now.getFullYear() - d.getFullYear()) > 0) {
        return Math.abs(d.getFullYear() - now.getFullYear()) + ' anos atrás';
    }
    else if(Math.abs(now.getDay() - d.getDay()) > 0) {
        return Math.abs(d.getDay() - now.getDay()) + ' dias atrás';
    }

    return d.getHours() - now.getHours() + ' horas atrás';
}

export default function OvelhaExtraInfo({info}: any) {
    return (
        <View style={ovelhaStyle.infoContainer}>
            <Text style={ovelhaStyle.info}><b>Idade:</b> {formatData(new Date(info.birthday))} </Text>
            <Text style={ovelhaStyle.info}><b>Sexo:</b> {info.sexo} </Text>
            <Text style={ovelhaStyle.info}><b>Peso:</b> {info.peso} </Text>
            <Text style={ovelhaStyle.info}><b>Raça:</b> {info.race} </Text>
            <Text style={ovelhaStyle.info}><b>Ultima tosa:</b> {formatData(new Date(info.lastTosa))} </Text>
        </View>
    )
}