import { style } from "@/conf";
import { Vacina } from "@/scripts/types";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import VacinaEntry from "./entry";

export default function VacinaList({vacinas} : any) {
    const [data, setData] = useState<Vacina[]>(vacinas);
    
    return (
        <View style={style.subContainer}>            
            <TouchableOpacity style={localStyle.subSubContainer} onPress={_ => {}}>
                <Text style={[localStyle.title, style.listTitle]}>Vacinas</Text>
                <FontAwesome5 name="plus" size={24} color="black" style={localStyle.add} />
            </TouchableOpacity>

            <FlatList
                data={data}
                ListHeaderComponent={() => (
                    <View style={localStyle.headerStyle}>
                        <Text>Vacina</Text>
                        <Text>Aplicação</Text>
                        <Text>Vencimento</Text>
                    </View>
                )}
                renderItem={({item, index}) => (
                    <VacinaEntry
                        data={data}
                        setData={setData}
                        index={index}/>
                )}

                ListEmptyComponent={() => (
                    <View style={{position: 'static', height: '100%'}}>
                        <Text style={{margin: 'auto', marginTop: 20, fontSize: 20}}>Sem vacinas!</Text>
                    </View>)
                } />
        </View>
    )
}

export const localStyle = StyleSheet.create({
    add: {
        alignSelf: 'flex-end',
        marginRight: '5%',
        margin: 'auto',
    },
    title: {
        margin: 'auto',
        textAlign: 'center',
        height: '100%',
        left: '16%',
    },
    subSubContainer: {
        width: '100%',
        height: '15%',
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerStyle: {  
        display: 'flex',
        flexDirection: 'row',
        gap: '15px',
        marginBottom: 10,
        alignContent: 'center',
        justifyContent: 'space-around'
    }
});