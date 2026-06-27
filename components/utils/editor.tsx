import { style } from "@/conf";
import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

export type PopupProps = {
    label?: string
    isVisible: boolean
    setVisible: any,

    onSubmit: () => void,

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
                        props.label? (<Text style={style.listTitle}>{props.label}</Text>) : (<></>)
                    }

                    {props.children}

                    <TouchableOpacity
                        onPress={props.onSubmit}
                        style={style.submitContainer}>
                        <Text style={style.submit}>Pronto</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}