import React from "react"
import { SafeAreaView, StatusBar, Text, Button, View, ScrollView } from "react-native"

import Navegacacao from "../components/Navegacao"
import estilo from "../styles/Estilo"

export default function Agenda ({navigation}){

    return <SafeAreaView>

        <ScrollView>

        <StatusBar barStyle="dark-content" backgroundColor="#331D2C"/>

        <Navegacacao navigation={navigation}/>

        <View style={ estilo.clienteArea}>

            <View style={ estilo.estaVer}>
                <Text style={ estilo.estaNome}> Felipe </Text>
                <Text style={estilo.estaSec}> Caique </Text>
                <Text style={estilo.estaSec}> 29/09 </Text>
                <Text style={estilo.estaSec}> 15h </Text>

            </View>

            <View style={ estilo.estaVer}>
                <Text style={ estilo.estaNome}> Caio </Text>
                <Text style={estilo.estaSec}> Roberto </Text>
                <Text style={estilo.estaSec}> 03/11 </Text>
                <Text style={estilo.estaSec}> 19h </Text>

            </View>

            <View style={ estilo.estaVer}>
                <Text style={ estilo.estaNome}> Mariana </Text>
                <Text style={estilo.estaSec}> Caique </Text>
                <Text style={estilo.estaSec}> 11/12 </Text>
                <Text style={estilo.estaSec}> 9h </Text>

            </View>

            <View style={ estilo.estaVer}>
                <Text style={ estilo.estaNome}> Mariana </Text>
                <Text style={estilo.estaSec}> Camila </Text>
                <Text style={estilo.estaSec}> 11/12 </Text>
                <Text style={estilo.estaSec}> 20h </Text>

            </View>

            <View style={ estilo.estaVer}>
                <Text style={ estilo.estaNome}> Pedro </Text>
                <Text style={estilo.estaSec}> Roberto </Text>
                <Text style={estilo.estaSec}> 29/08 </Text>
                <Text style={estilo.estaSec}> 11h </Text>

            </View>

            <View style={ estilo.estaVer}>
                <Text style={ estilo.estaNome}> Lucas </Text>
                <Text style={estilo.estaSec}> Caique </Text>
                <Text style={estilo.estaSec}> 18/02 </Text>
                <Text style={estilo.estaSec}> 18h </Text>

            </View>

            <View style={ estilo.estaVer}>
                <Text style={ estilo.estaNome}> Cristiones </Text>
                <Text style={estilo.estaSec}> Camila </Text>
                <Text style={estilo.estaSec}> 10/10 </Text>
                <Text style={estilo.estaSec}> 10h </Text>

            </View> 

        </View>
        </ScrollView>
    </SafeAreaView>
}