import { style } from "@/conf";
import { OptionalOvelha, Ovelha } from "@/scripts/types";
import React, { useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import DateInput from "../utils/date_input";

export type PopupProps = {
    label?: string
    isVisible: boolean
    setVisible: any,

    ovelha: Ovelha,
    setOvelha: any
}

function compareUndefined<T>(maybeUdefined: T | undefined, defaultVal: T): T {
    if (maybeUdefined === undefined) {
        return defaultVal
    }
    return maybeUdefined != defaultVal? maybeUdefined : defaultVal;
}

export default function Popup(props: PopupProps) {
    
    const [form, setForm] = useState<OptionalOvelha>({})

    return (
        <Modal
            visible={props.isVisible}
            onRequestClose={() => props.setVisible(!props.isVisible)}
            transparent={true}>
            
            <View style={style.popupBG}>
                <View style={style.popup}>
                    {
                        props.label? (<Text style={style.dailyTitle}>{props.label}</Text>) : (<></>)
                    }

                    <TextInput
                        style={[style.userInput, {width: '100%'}]}
                        onChangeText={ text => {setForm(prev => ({...prev, name: text}))} }
                        placeholder=" Nome" value={props.ovelha.name}/>
                    {/* <TextInput
                        style={[style.userInput, {width: '100%'}]}
                        onChangeText={ text => {setForm(prev => ({...prev, birthday: new Date(text)}))} }
                        placeholder=" Nascimento" value={props.ovelha.birthday.getD}/> */}
                    <DateInput 
                        onDateChange={ (date: Date) => setForm(prev => ({ ...prev, birthday: date })) }
                        text={'Nascimento'}
                        value={props.ovelha.birthday}/>

                    <TextInput
                        style={[style.userInput, {width: '100%'}]}
                        onChangeText={ text => {setForm(prev => ({...prev, race: text}))} }
                        placeholder=" Raça" value={props.ovelha.race}/>
                    <TextInput
                        style={[style.userInput, {width: '100%'}]}
                        onChangeText={ text => {setForm(prev => ({...prev, sexo: text}))} }
                        placeholder=" Sexo" value={props.ovelha.sexo}/>
                    <TextInput
                        style={[style.userInput, {width: '100%'}]}
                        onChangeText={ text => {setForm(prev => ({...prev, peso: +text}))} }
                        placeholder=" Peso (Kg)" value={'' + props.ovelha.peso}/>

                    <TouchableOpacity
                        onPress={() => {
                            props.setVisible(false)
                            
                            props.setOvelha((prev: Ovelha) => ({
                                name: compareUndefined(form.name, prev.name),
                                birthday: compareUndefined(form.birthday, prev.birthday),
                                race: compareUndefined(form.race, prev.race),
                                sexo: compareUndefined(form.sexo, prev.sexo),
                                peso: compareUndefined(form.peso, prev.peso),
                            }))
                        }}>
                        <View>
                            <Text>Pronto</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}