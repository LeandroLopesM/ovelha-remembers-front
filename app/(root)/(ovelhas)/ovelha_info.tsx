import { Ovelha } from "@/scripts/types";
import { StyleSheet, View } from "react-native";

export type OvelhaInfoProps = {
    info: Ovelha
};

export default function OvelhaInfoPage({info}: OvelhaInfoProps) {
    return (
        <View>
            {JSON.stringify(info)}
        </View>
    )
}

export const ovelhaStyle = StyleSheet.create({

});