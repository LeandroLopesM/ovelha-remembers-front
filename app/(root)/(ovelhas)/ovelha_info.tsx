import { Ovelha } from "@/scripts/types";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";

export type OvelhaInfoProps = {
    info: Ovelha
};

export default function OvelhaInfoPage() {
    const info: Ovelha = JSON.parse((useLocalSearchParams().info || '{}') as string);

    return (
        <View>
            {JSON.stringify(info)}
        </View>
    )
}

export const ovelhaStyle = StyleSheet.create({

});