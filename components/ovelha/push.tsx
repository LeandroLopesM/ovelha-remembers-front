import { useState } from "react"
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

type OvelhaPusherArgs = { isOpen: boolean, setOpen: (a: boolean) => void }
export default function OvelhaPusher({isOpen, setOpen}: OvelhaPusherArgs) {

    var [Name, setName] = useState<string>()
    var [Nasc, setNasc] = useState<string>()
    var [Gen, setGen] = useState<string>()
    return (
        <Modal
            visible={isOpen}
            transparent={true}
            onRequestClose={_ => setOpen(!isOpen)}>
                
            <View style={Style.popupBG}>
                <View style={Style.popup}>
                    <TextInput
                        style={Style.userInput}
                        onChangeText={setName}
                        placeholder=" Nome" />
                    <TextInput
                        style={Style.userInput}
                        onChangeText={setNasc}
                        placeholder=" Nascimento" />
                    <TextInput
                        style={Style.userInput}
                        onChangeText={setGen}
                        placeholder=" Gênero" />
                    <TouchableOpacity style={Style.submitContainer} onPress={(_) => {
                        setOpen(false)
                        store(JSON.stringify({
                            name: Name,
                            nascimento: setNasc,
                            generio: Gen
                        }))
                    }}>
                        <Text style={Style.submit}>Pronto</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const Style = StyleSheet.create({
    popup: {
        minHeight: '30%',
        minWidth: '70%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        margin: 'auto',
        gap: 7, 
    },
    popupBG: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        height: '100%',
        alignItems: 'center',
    },
    userInput: {
        width: '90%',
        height: '20%',
        fontSize: 21,
        borderColor: 'gray',
        borderWidth: 1,
        outline: 'none' 
    },
    submitContainer: {
        backgroundColor: 'green',
        color: 'white',
        margin: 'auto',
        width: '90%',
        height: '20%',
        textAlign: 'center',
        verticalAlign: 'middle',
    },
    submit: {
        color: 'white',
        margin: 'auto',
    }
})