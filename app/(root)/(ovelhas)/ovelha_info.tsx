import Header from "@/components/header";
import { style } from "@/conf";
import { TESTING_URI } from "@/scripts/testing_data";
import { Ovelha } from "@/scripts/types";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useLocalSearchParams } from "expo-router";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type OvelhaInfoProps = {
    info: Ovelha
};

export default function OvelhaInfoPage() {
    const info: Ovelha = JSON.parse((useLocalSearchParams().info || '{}') as string);

    return (
        <View style={style.main}>
            <Header color={'#007D77'} />
            {/* {JSON.stringify(info)} */}

            <View style={[style.subContainer]}>
                <View style={ovelhaStyle.card}>
                    <AntDesign name='edit' size={32} color='black' style={ovelhaStyle.leftAlign} />
                    <Image
                        source={{uri: info.photo || TESTING_URI}}
                        style={{minWidth: '80%', minHeight: '30%'}}
                        resizeMode={'contain'}/>
                    <AntDesign name='delete' size={32} color='black' style={ovelhaStyle.rightAlign} />
                </View>

                <hr style={ovelhaStyle.hr} />

                <View style={ovelhaStyle.infoContainer}>
                    <Text style={ovelhaStyle.info}><b>Idade:</b> {info.birthday.toString()} </Text>
                    <Text style={ovelhaStyle.info}><b>Sexo:</b> {info.sexo} </Text>
                    <Text style={ovelhaStyle.info}><b>Peso:</b> {info.peso} </Text>
                    <Text style={ovelhaStyle.info}><b>Raça:</b> {info.race} </Text>
                    <Text style={ovelhaStyle.info}><b>Ultima tosa:</b> {info.lastTosa.toString()} </Text>
                </View>

                <hr style={ovelhaStyle.hr} />

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
                            <Text>Sem vacinas!</Text>
                        )} />
                </View>
            </View>
        </View>
    )
}

export const ovelhaStyle = StyleSheet.create({
    card: {
        position: 'static',
        width: '100%',
        height: '20%',
        flexDirection: 'row'
    },

    rightAlign: {
        marginRight: 10,
        // marginLeft: 20,
        margin: 'auto',
    },

    leftAlign: {
        marginLeft: 10,
        // margin: 0,
        margin: 'auto',
    },

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

