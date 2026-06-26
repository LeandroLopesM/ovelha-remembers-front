import { StyleSheet, Text, View } from "react-native";

export function formatData(d: Date): string {
    let now = new Date();
    
    if (Math.abs(now.getFullYear() - d.getFullYear()) > 0) {
        return Math.abs(d.getFullYear() - now.getFullYear()) + ' anos';
    }
    else if(Math.abs(now.getDay() - d.getDay()) > 0) {
        return Math.abs(d.getDay() - now.getDay()) + ' dias';
    }

    return d.getHours() - now.getHours() + ' horas';
}

export default function OvelhaExtraInfo({info}: any) {
    return (
        <View style={localStyle.infoContainer}>
            <Text style={localStyle.info}><b>Idade:</b> {formatData(new Date(info.birthday))} </Text>
            <Text style={localStyle.info}><b>Sexo:</b> {info.sexo} </Text>
            <Text style={localStyle.info}><b>Peso:</b> {info.peso} </Text>
            <Text style={localStyle.info}><b>Raça:</b> {info.race} </Text>
            <Text style={localStyle.info}><b>Ultima tosa:</b> {formatData(new Date(info.lastTosa)) + ' atrás'} </Text>
        </View>
    )
}


export const localStyle = StyleSheet.create({
    infoContainer: {
        width: '100%',
        maxHeight: '60%',
    },

    info: {
        fontSize: 20
    },
});