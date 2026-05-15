import { Modal, TextInput } from "react-native";

export default function OvelhaManager() {
    return (
        <Modal>
            <TextInput placeholder="Nome"></TextInput>
            <TextInput placeholder="Nascimento"></TextInput>
            <TextInput placeholder="Gênero"></TextInput>
        </Modal>
    )   
}