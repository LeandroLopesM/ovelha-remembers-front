import Header from "@/components/header";
import OvelhaExtraInfo from "@/components/ovelha/info/extra";
import OvelhaInfoHeader from "@/components/ovelha/info/header";
import OvelhaEditor from "@/components/ovelha/modals/editor";
import VacinaList from "@/components/vacina/list";
import { style } from "@/conf";
import { Ovelha } from "@/scripts/types";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export type OvelhaInfoProps = {
    info: Ovelha
};

export default function OvelhaInfoPage() {
    const [info, setInfo] = useState(JSON.parse((useLocalSearchParams().info || '{}') as string));
    const [editorVisible, setEditorVisible] = useState(false);
    const [vacinaEditor, setVacinaEditor] = useState(false);
    // TODO: implement vacina editor

    console.log(info);

    return (
        <View style={style.main}>
            <Header color={'#007D77'} title={info.name}/>
            
            <OvelhaEditor
                info={info}
                setInfo={setInfo}
                setEditorVisible={setEditorVisible}
                editorVisible={editorVisible} />

            <View style={[style.subContainer]}>
                <OvelhaInfoHeader
                    photo={info.photo}
                    setEditorVisible={setEditorVisible}
                    editorVisible={editorVisible} />

                <hr style={ovelhaStyle.hr} />

                <OvelhaExtraInfo info={info} />

                <hr style={ovelhaStyle.hr} />

                <VacinaList vacinaEditor={vacinaEditor} setVacinaEditor={setVacinaEditor} />
            </View>
        </View>
    )
}

export const ovelhaStyle = StyleSheet.create({
    infoContainer: {
        width: '100%',
        maxHeight: '60%',
    },

    info: {
        fontSize: 20
    },

    hr: {
        width: '80%',
        height: '0%',
        
        margin: 'auto',
        marginTop: '5%',
        marginBottom: '5%',
        
        borderColor: 'black',
        borderWidth: 1,
    },

    vacinaContainer: {
        flexDirection: 'column'
    },
    vacinaHeader: {
        flexDirection: 'row'
    }
});

