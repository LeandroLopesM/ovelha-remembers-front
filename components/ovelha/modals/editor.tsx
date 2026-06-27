import { style } from "@/conf";
import { Ovelha } from "@/scripts/types";
import { useState } from "react";
import { TextInput } from "react-native";
import DateInput from "../../utils/date_input";
import Popup from "../../utils/editor";

type OvelhaEditorProps = {
    info: Ovelha,
    setInfo: any,
    editorVisible: boolean,
    setEditorVisible: any
}

export default function OvelhaEditor({info, setInfo, setEditorVisible, editorVisible}: OvelhaEditorProps) {
    const [form, setForm] = useState<Ovelha>(info)

    return( 
        <Popup
            setVisible={setEditorVisible}
            isVisible={editorVisible}
            label={'Editar ovelha'}
            onSubmit={
                () => {
                    setEditorVisible(false)
                    
                    setInfo(form)
                }
            }>
            <TextInput
                style={[style.userInput, {width: '100%'}]}
                onChangeText={ text => {setForm(prev => ({...prev, name: text}))} }
                placeholder=" Nome" value={form.name}/>
            <DateInput 
                onDateChange={ (date: Date) => setForm(prev => ({ ...prev, birthday: date })) }
                text={'Nascimento'}
                value={form.birthday}/>
            <TextInput
                style={[style.userInput, {width: '100%'}]}
                onChangeText={ text => {setForm(prev => ({...prev, race: text}))} }
                placeholder=" Raça" value={form.race}/>
            <TextInput
                style={[style.userInput, {width: '100%'}]}
                onChangeText={ text => {setForm(prev => ({...prev, sexo: text}))} }
                placeholder=" Sexo" value={form.sexo}/>
            <TextInput
                style={[style.userInput, {width: '100%'}]}
                onChangeText={ text => {setForm(prev => ({...prev, peso: +text}))} }
                placeholder=" Peso (Kg)" value={'' + form.peso}/>
        </Popup>
    )
}