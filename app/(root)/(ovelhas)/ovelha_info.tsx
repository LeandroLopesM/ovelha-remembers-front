import Header from "@/components/header";
import Popup, { compareUndefined } from "@/components/ovelha/editor";
import DateInput from "@/components/utils/date_input";
import { style } from "@/conf";
import { TESTING_URI } from "@/scripts/testing_data";
import { OptionalOvelha, Ovelha } from "@/scripts/types";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export type OvelhaInfoProps = {
    info: Ovelha
};

function formatData(d: Date): string {
    let now = new Date();
    
    if (Math.abs(now.getFullYear() - d.getFullYear()) > 0) {
        return Math.abs(d.getFullYear() - now.getFullYear()) + ' anos atrás';
    }
    else if(Math.abs(now.getDay() - d.getDay()) > 0) {
        return Math.abs(d.getDay() - now.getDay()) + ' dias atrás';
    }

    return d.getHours() - now.getHours() + ' horas atrás';
}

export default function OvelhaInfoPage() {
    const [info, setInfo] = useState(JSON.parse((useLocalSearchParams().info || '{}') as string));

    console.log(info);

    const [editorVisible, setEditorVisible] = useState(false);
    const [form, setForm] = useState<OptionalOvelha>({})

    return (
        <View style={style.main}>
            <Header color={'#007D77'} title={info.name}/>
            
            <Popup
                setVisible={setEditorVisible}
                isVisible={editorVisible}
                label={'Editar ovelha'}
                ovelha={info}
                setOvelha={setInfo}
                onSubmit={
                    () => {
                        setEditorVisible(false)
                        
                        setInfo((prev: Ovelha) => ({
                            name: compareUndefined(form.name, prev.name),
                            birthday: compareUndefined(form.birthday, prev.birthday),
                            race: compareUndefined(form.race, prev.race),
                            sexo: compareUndefined(form.sexo, prev.sexo),
                            peso: compareUndefined(form.peso, prev.peso),
                        }))
                    }
                }>
                <TextInput
                    style={[style.userInput, {width: '100%'}]}
                    onChangeText={ text => {setForm(prev => ({...prev, name: text}))} }
                    placeholder=" Nome" value={info.name}/>
                {/* <TextInput
                    style={[style.userInput, {width: '100%'}]}
                    onChangeText={ text => {setForm(prev => ({...prev, birthday: new Date(text)}))} }
                    placeholder=" Nascimento" value={info.birthday.getD}/> */}
                <DateInput 
                    onDateChange={ (date: Date) => setForm(prev => ({ ...prev, birthday: date })) }
                    text={'Nascimento'}
                    value={info.birthday}/>

                <TextInput
                    style={[style.userInput, {width: '100%'}]}
                    onChangeText={ text => {setForm(prev => ({...prev, race: text}))} }
                    placeholder=" Raça" value={info.race}/>
                <TextInput
                    style={[style.userInput, {width: '100%'}]}
                    onChangeText={ text => {setForm(prev => ({...prev, sexo: text}))} }
                    placeholder=" Sexo" value={info.sexo}/>
                <TextInput
                    style={[style.userInput, {width: '100%'}]}
                    onChangeText={ text => {setForm(prev => ({...prev, peso: +text}))} }
                    placeholder=" Peso (Kg)" value={'' + info.peso}/>
            </Popup>

            <View style={[style.subContainer]}>
                <View style={ovelhaStyle.card}>
                    <AntDesign
                        name='edit'
                        size={32}
                        color='black'
                        style={ovelhaStyle.leftAlign}
                        onPress={() => setEditorVisible(!editorVisible)}/>

                    <Image
                        source={{uri: info.photo || TESTING_URI}}
                        style={{minWidth: '80%', minHeight: '30%'}}
                        resizeMode={'contain'}/>

                    <AntDesign
                        name='delete'
                        size={32}
                        color='black'
                        style={ovelhaStyle.rightAlign}/>
                </View>

                <hr style={ovelhaStyle.hr} />

                <View style={ovelhaStyle.infoContainer}>
                    <Text style={ovelhaStyle.info}><b>Idade:</b> {formatData(new Date(info.birthday))} </Text>
                    <Text style={ovelhaStyle.info}><b>Sexo:</b> {info.sexo} </Text>
                    <Text style={ovelhaStyle.info}><b>Peso:</b> {info.peso} </Text>
                    <Text style={ovelhaStyle.info}><b>Raça:</b> {info.race} </Text>
                    <Text style={ovelhaStyle.info}><b>Ultima tosa:</b> {formatData(new Date(info.lastTosa))} </Text>
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
                            <View style={{position: 'static', height: '100%'}}>
                                <Text style={{margin: 'auto', marginTop: 20, fontSize: 20}}>Sem vacinas!</Text>
                            </View>
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

