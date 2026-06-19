import { style } from "@/conf";
import { OptionalOvelha, Ovelha } from "@/scripts/types";
import { useState } from "react";
import { TextInput } from "react-native";
import DateInput from "../utils/date_input";
import Popup, { compareUndefined } from "./editor";

type OvelhaEditorProps = {
    info: Ovelha,
    setInfo: any,
    editorVisible: boolean,
    setEditorVisible: any
}

export default function OvelhaEditor({info, setInfo, setEditorVisible, editorVisible}: OvelhaEditorProps) {
    const [form, setForm] = useState<OptionalOvelha>({})

    return( 
        <Popup
            setVisible={setEditorVisible}
            isVisible={editorVisible}
            label={'Editar ovelha'}
            ovelha={info}
            setOvelha={setInfo}
            onSubmit={
                () => {
                    setEditorVisible(false)
                    
                    setInfo((prev: Ovelha) => ({
                        name: compareUndefined(form.name, prev.name),
                        birthday: compareUndefined(form.birthday, prev.birthday),
                        race: compareUndefined(form.race, prev.race),
                        sexo: compareUndefined(form.sexo, prev.sexo),
                        peso: compareUndefined(form.peso, prev.peso),
                    }))
                }
            }>
            <TextInput
                style={[style.userInput, {width: '100%'}]}
                onChangeText={ text => {setForm(prev => ({...prev, name: text}))} }
                placeholder=" Nome" value={info.name}/>
            <DateInput 
                onDateChange={ (date: Date) => setForm(prev => ({ ...prev, birthday: date })) }
                text={'Nascimento'}
                value={info.birthday}/>
            <TextInput
                style={[style.userInput, {width: '100%'}]}
                onChangeText={ text => {setForm(prev => ({...prev, race: text}))} }
                placeholder=" Raça" value={info.race}/>
            <TextInput
                style={[style.userInput, {width: '100%'}]}
                onChangeText={ text => {setForm(prev => ({...prev, sexo: text}))} }
                placeholder=" Sexo" value={info.sexo}/>
            <TextInput
                style={[style.userInput, {width: '100%'}]}
                onChangeText={ text => {setForm(prev => ({...prev, peso: +text}))} }
                placeholder=" Peso (Kg)" value={'' + info.peso}/>
        </Popup>
    )
}