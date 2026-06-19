import { style } from "@/conf";
import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

export type HeaderProps = {
    color?: string
};

export default function Header({color}: HeaderProps) {
    return (
        <TouchableOpacity onPress={() => router.push('/home')} style={[style.header, {backgroundColor: color || 'green'}]}>
            <Text style={style.title}>Ovelha Remembers</Text>
        </TouchableOpacity>
    )
}