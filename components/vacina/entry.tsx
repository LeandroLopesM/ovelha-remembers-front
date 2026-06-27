import { style } from "@/conf";
import { Vacina } from "@/scripts/types";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text, TouchableOpacity, View } from "react-native";

type VacinaEntryProps = {
    editorVisible: boolean
    setEditorVisible: any
    item: Vacina
    
    setEditorTarget: any
    index: number
}

export default function VacinaEntry({editorVisible, setEditorVisible, setEditorTarget, index, item}: VacinaEntryProps) {
    return (
        <TouchableOpacity
                onPress={() => { setEditorVisible(!editorVisible), setEditorTarget(index) }}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '15px',
                    marginBottom: 10,
                    justifyContent: 'space-around'
                }}>
            <AntDesign name='edit' size={20} color='black'/>
            
            <View style={{overflow: 'scroll'}}> 
                <Text style={style.vacina}>{item.name}</Text>
            </View>

            <Text style={style.vacina}>{new Date(item.date).toLocaleDateString()}</Text>
            <Text style={style.vacina}>{new Date(item.due).toLocaleDateString()}</Text>
        </TouchableOpacity>
    )
}