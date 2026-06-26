import { style } from "@/conf";
import { OptionalVacina, Vacina } from "@/scripts/types";
import { useState } from "react";
import { TextInput } from "react-native";
import DateInput from "../utils/date_input";
import Popup, { compareUndefined } from "./editor";

type VacinaEditorProps = {
    info: Vacina,
    setInfo: any,
    editorVisible: boolean,
    setEditorVisible: any
}

export default function VacinaEditor({info, setInfo, setEditorVisible, editorVisible}: VacinaEditorProps) {
    const [form, setForm] = useState<OptionalVacina>({})

    return( 
        <Popup
            setVisible={setEditorVisible}
            isVisible={editorVisible}
            label={'Editar vacina'}
            vacina={info}
            setVacina={setInfo}
            onSubmit={
                () => {
                    setEditorVisible(false)
                    
                    setInfo((prev: Vacina) => ({
                        date: compareUndefined(form.date, prev.date),
                        name: compareUndefined(form.name, prev.name),
                        due: compareUndefined(form.due, prev.due),
                    }))
                }
            }>
            <TextInput
                style={[style.userInput, {width: '100%'}]}
                onChangeText={ text => {setForm(prev => ({...prev, name: text}))} }
                placeholder=" Nome" value={info.name}/>
            <DateInput 
                onDateChange={ (date: Date) => setForm(prev => ({ ...prev, date: date })) }
                text={'Data'}
                value={info.date}/>
            <DateInput 
                onDateChange={ (due: Date) => setForm(prev => ({ ...prev, date: due })) }
                text={'Vencimento'}
                value={info.date}/>
        </Popup>
    )
}