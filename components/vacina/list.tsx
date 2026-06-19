import { ovelhaStyle } from "@/app/(root)/(ovelhas)/ovelha_info";
import AntDesign from "@expo/vector-icons/AntDesign";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

export default function VacinaList({info}: any) {
    return (
        <View style={ovelhaStyle.vacinaContainer}>
            <TouchableOpacity style={ovelhaStyle.vacinaHeader}>
                <Text style={{
                    fontSize: 24,
                    marginLeft: 'auto'
                }}><b>Próximas vacinas</b></Text>
                
                <AntDesign name='arrow-right' size={32} color='black' style={{
                    margin: 'auto',
                    marginRight: 20,
                }}/>
            </TouchableOpacity>

            <FlatList
                data={info.vacinas}
                renderItem={({item}) => (
                    <View>
                        <AntDesign name='clock-circle' size={24} color='black' />
                        <Text>{item.name}</Text>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <View style={{position: 'static', height: '100%'}}>
                        <Text style={{margin: 'auto', marginTop: 20, fontSize: 20}}>Sem vacinas!</Text>
                    </View>
                )} />
        </View>
    )
}