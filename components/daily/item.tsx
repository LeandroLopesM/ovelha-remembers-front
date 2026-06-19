import Checkbox from "expo-checkbox";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export type DailyItemProps = {
    item: string
}

export default function DailyItem({item}: DailyItemProps) {
    const [active, setActive] = useState(false);

    const strikeThrough = () => {
        if (active) {
            return StyleSheet.create({
                std: {
                    textDecorationLine: 'line-through'
                }
            })
        } else {
            return StyleSheet.create({ std: { } })
        }
    }

    return (
        <View style={taskStyle.dailyActivity}>
            <Checkbox
                value={active}
                onValueChange={(value) => setActive(value)}
            />
            <Text
                style={[taskStyle.taskListItem, strikeThrough().std]}>{item}</Text>
        </View>
    )
}

const taskStyle = StyleSheet.create({
    dailyActivity: {
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        alignItems: 'center',
    },
    taskListItem: {
        fontSize: 18
    },
})