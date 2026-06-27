import { style } from "@/conf";
import { Vacina } from "@/scripts/types";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import VacinaEditor from "./editor";

type VacinaEntryProps = {
    data: Vacina[],
    setData: (a: Vacina[]) => void
    index: number
}

export default function VacinaEntry({data, setData, index}: VacinaEntryProps) {
    const [editorVisible, setEditorVisible] = useState(false);
    
    return (
        <TouchableOpacity
                onPress={() => { setEditorVisible(!editorVisible) }}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '15px',
                    marginBottom: 10,
                    justifyContent: 'space-around'
                }}>

            <VacinaEditor
                info={data[index]}
                setInfo={(newData: Vacina) => {
                    let x = data;
                    x[data.indexOf(data[index])] = newData;
                    setData(x)
                }}
                editorVisible={editorVisible}    
                setEditorVisible={setEditorVisible}/>
                
            <AntDesign name='edit' size={20} color='black'/>
            
            <View style={{overflow: 'scroll'}}> 
                <Text style={style.vacina}>{data[index].name}</Text>
            </View>

            <Text style={style.vacina}>{new Date(data[index].date).toLocaleDateString()}</Text>
            <Text style={style.vacina}>{new Date(data[index].due).toLocaleDateString()}</Text>
        </TouchableOpacity>
    )
}