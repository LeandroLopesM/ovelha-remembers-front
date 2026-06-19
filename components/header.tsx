import { style } from "@/conf";
import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

export type HeaderProps = {
    color?: string,
    title?: string,
};

export default function Header({color, title}: HeaderProps) {
    return (
        <TouchableOpacity onPress={() => router.push('/home')} style={[style.header, {backgroundColor: color || 'green'}]}>
            <Text style={style.title}>{title || 'Ovelha Remembers'}</Text>
        </TouchableOpacity>
    )
}