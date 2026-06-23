import Header from "@/components/header";
import OvelhaExtraInfo from "@/components/ovelha/extra_info";
import OvelhaEditor from "@/components/ovelha/ovelha_editor";
import OvelhaInfoCard from "@/components/ovelha/ovelha_info";
import ChoicePopup from "@/components/utils/choice_modal";
import VacinaList from "@/components/vacina/list";
import { style } from "@/conf";
import { remove } from "@/scripts/storage";
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
    const [deleteVisible, setDeleteVisible] = useState(false);

    console.log(info);

    return (
        <View style={style.main}>
            <Header color={'#007D77'} title={info.name}/>
            
            <OvelhaEditor
                info={info}
                setInfo={setInfo}
                setEditorVisible={setEditorVisible}
                editorVisible={editorVisible} />
            
            <ChoicePopup
                isVisible={deleteVisible}            
                setVisible={setDeleteVisible}

                onSubmit={choice => {
                    setDeleteVisible(false)
                    
                    if (choice == 'y') {
                        remove('ovelhas', info)
                    }
                }} />

            <View style={[style.subContainer]}>
                <OvelhaInfoCard
                    photo={info.photo}
                    setEditorVisible={setEditorVisible}
                    editorVisible={editorVisible}
                    deleteVisible={deleteVisible}
                    setDeleteVisible={setDeleteVisible}/>

                <hr style={ovelhaStyle.hr} />

                <OvelhaExtraInfo info={info} />

                <hr style={ovelhaStyle.hr} />

                <VacinaList info={info} />
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

