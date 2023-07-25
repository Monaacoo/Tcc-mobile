import React from "react"
import { SafeAreaView, StatusBar, Text, Button, View, TextInput, Pressable, ScrollView } from "react-native"

import Navegacacao from "../components/Navegacao"
import estilo from "../styles/Estilo"
import Tatto from "../components/Tatto"

export default function Home({navigation}) {

    return <SafeAreaView>

        <ScrollView>

        <StatusBar barStyle="dark-content" backgroundColor="#331D2C"/>
        <Navegacacao navigation={navigation}/>

        <View style={ estilo.clienteArea}>

            <Tatto/>

            <TextInput style={ estilo.clienteEntrada} placeholder="Digite seu nome"/>
            <TextInput style={ estilo.clienteEntrada} placeholder="Digite seu tatuador"/>
            <TextInput style={ estilo.clienteEntrada} placeholder="Escolha um dia"/>
            <TextInput style={ estilo.clienteEntrada} placeholder="Escolha seu horario"/>


            <Pressable style={ estilo.clienteBotao} onPress={() => alert("Agendado!")}>
                <Text style={ estilo.clienteBotaoTexto}> Fazer agendamento </Text>
            </Pressable>

            


        </View>

        </ScrollView>
    </SafeAreaView>

}