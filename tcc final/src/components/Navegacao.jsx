import React from "react"
import { View, Text, Pressable } from "react-native"

import estilo from "../styles/Estilo"

export default function Navegacacao(props){
    return <View style= {estilo.nav}>

        <View style= {estilo.navTopo}>
            <Text style ={estilo.navTopoTexto}> Fedel {"\n"} Tattos </Text>
        </View>

        <View style= {estilo.navBase}>

            <Pressable onPress={() => props.navigation.navigate("Home")}>
                <Text style= {estilo.navBotao}> Home </Text>
            </Pressable>

            <Pressable onPress={() => props.navigation.navigate("Agenda")}>
                <Text style= {estilo.navBotao}> Agenda </Text>
            </Pressable>

            <Pressable onPress={() => props.navigation.navigate("Videos")}>
                <Text style= {estilo.navBotao}> Videos </Text>
            </Pressable>

            
        </View>
    </View>

}