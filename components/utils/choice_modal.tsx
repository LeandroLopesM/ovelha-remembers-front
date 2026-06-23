import { style } from "@/conf";
import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

export type ChoicePopupProps = {
    label?: string
    isVisible: boolean
    setVisible: any,
    
    onSubmit: (choice: any) => void
}

export default function ChoicePopup(props: ChoicePopupProps) {
    const [choice, setChoice] = useState('n')
    
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

                    <View>
                        <TouchableOpacity
                            onPress={() => props.onSubmit('s')}>
                            <View>
                                <Text>Sim</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => props.onSubmit('n')}>
                            <View>
                                <Text>Não</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}