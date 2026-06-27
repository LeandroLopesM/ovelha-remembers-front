import { style } from "@/conf";
import { Vacina } from "@/scripts/types";
import { useState } from "react";
import { TextInput } from "react-native";
import DateInput from "../utils/date_input";
import Popup from "../utils/editor";


type VacinaEditorProps = {
    info: Vacina
    setInfo: any
    editorVisible: boolean
    setEditorVisible: any
}

export default function VacinaEditor({info, setInfo, setEditorVisible, editorVisible}: VacinaEditorProps) {
    const [form, setForm] = useState<Vacina>(info)

    return( 
        <Popup
            setVisible={setEditorVisible}
            isVisible={editorVisible}
            label={'Editar vacina'}
            onSubmit={
                () => {
                    setEditorVisible(false)
                    
                    setInfo(form)
                }
            }>
            <TextInput
                style={[style.userInput]}
                onChangeText={ text => {setForm(prev => ({...prev, name: text}))} }
                placeholder=" Nome" value={form.name}/>
            <DateInput 
                onDateChange={ (date: Date) => setForm(prev => ({ ...prev, date: date })) }
                text={'Data'}
                value={info.date}/>
            <DateInput 
                onDateChange={ (due: Date) => setForm(prev => ({ ...prev, due: due })) }
                text={'Vencimento'}
                value={info.due}/>
        </Popup>
    )
}