import { style } from "@/conf"
import { Ovelha } from "@/scripts/types"
import { useState } from "react"
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native"
import { store } from "../../scripts/storage"
import { newData } from "./list"

type OvelhaPusherArgs = { isOpen: boolean, setOpen: (a: boolean) => void }
export default function OvelhaPusher({isOpen, setOpen}: OvelhaPusherArgs) {

    var [Name, setName] = useState<string>()
    var [ Nasc, setNasc] = useState<string>()
    var [Gen, setGen] = useState<string>()
    return (
        <Modal
            visible={isOpen}
            transparent={true}
            onRequestClose={_ => setOpen(!isOpen)}>
                
            <View style={style.popupBG}>
                <View style={style.popup}>
                    <TextInput
                        style={style.userInput}
                        onChangeText={setName}
                        placeholder=" Nome" />
                    <TextInput
                        style={style.userInput}
                        onChangeText={setNasc}
                        placeholder=" Nascimento" />
                    <TextInput
                        style={style.userInput}
                        onChangeText={setGen}
                        placeholder=" Gênero" />
                    <TouchableOpacity style={style.submitContainer} onPress={(_) => {
                        setOpen(false)
                        let ovelha: Ovelha = {
                            id: 0,
                            name: Name || 'Sem nome',
                            birthday: new Date(Nasc || ''),
                            sexo: Gen || 'Sem genero',
                            vacinas: [],
                            peso: Math.random() * 100,
                            race: '',
                            lastTosa: new Date('')
                        };
                        store(
                        'ovelhas',
                        JSON.stringify(ovelha))

                        newData(ovelha);

                        setName(undefined);
                        setGen(undefined);
                    }}>
                        <Text style={style.submit}>Pronto</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
