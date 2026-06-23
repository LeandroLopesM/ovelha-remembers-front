import { style } from "@/conf";
import { Ovelha } from "@/scripts/types";
import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

export type PopupProps = {
    label?: string
    isVisible: boolean
    setVisible: any,

    onSubmit: () => void,
    ovelha: Ovelha,
    setOvelha: any,

    children: any
}

export function compareUndefined<T>(maybeUdefined: T | undefined, defaultVal: T): T {
    if (maybeUdefined === undefined) {
        return defaultVal
    }
    return maybeUdefined != defaultVal? maybeUdefined : defaultVal;
}

export default function Popup(props: PopupProps) {
    
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

                    {props.children}

                    <TouchableOpacity
                        onPress={props.onSubmit}>
                        <View>
                            <Text>Pronto</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}