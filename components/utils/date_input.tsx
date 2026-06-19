import { useState } from "react"
import { Text, TextInput, View } from "react-native"

export type DateInputProps = {
    onDateChange: (d: Date) => void,
    text: string
    value?: Date
}

export default function DateInput(props: DateInputProps) {
    const defaultDate = new Date(props.value || new Date());
    const [date, setDate] = useState(defaultDate);
    
    return (
        <View style={{flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
            <Text
                style={{fontSize: 21, width: '40%'}}>{props.text}</Text>
            <TextInput
                style={[{ maxWidth: '20%', textAlign: 'center', borderWidth: 1, borderColor: 'gray', fontSize: 21 }]}
                placeholder={'Dia'}
                value={'' + defaultDate.getDate()}
                onChangeText={text => setDate(prev => { prev.setDate(+text); props.onDateChange(prev); return prev })}/>
            <TextInput
                style={[{ maxWidth: '20%', textAlign: 'center', borderWidth: 1, borderColor: 'gray', fontSize: 21 }]}
                placeholder={'Mês'}
                value={'' + defaultDate.getMonth()}
                onChangeText={text => setDate(prev => { prev.setMonth(+text); props.onDateChange(prev); return prev })}/>
            <TextInput
                style={[{ maxWidth: '20%', textAlign: 'center', borderWidth: 1, borderColor: 'gray', fontSize: 21 }]}
                placeholder={'Ano'}
                value={'' + defaultDate.getFullYear()}
                onChangeText={text => setDate(prev => { prev.setFullYear(+text); props.onDateChange(prev); return prev })}/>

        </View>
    )
}