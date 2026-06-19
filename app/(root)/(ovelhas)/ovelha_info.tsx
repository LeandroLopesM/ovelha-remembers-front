import Header from "@/components/header";
import { style } from "@/conf";
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
            <Header color={'purple'} />
            {/* {JSON.stringify(info)} */}

            <View style={[style.subContainer]}>
                <View>
                    <AntDesign name='edit' size={24} color='black' />
                    <Image />
                    <AntDesign name='delete' size={24} color='black' />
                </View>

                <View>
                    <Text>Idade: </Text>
                    <Text>Sexo: </Text>
                    <Text>Peso: </Text>
                    <Text>Raça: </Text>
                    <Text>Ultima tosa: </Text>
                </View>

                <View>
                    <TouchableOpacity>
                        <Text>Próximas vacinas</Text>
                        <AntDesign name='arrow-right' size={24} color='black' />
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

});