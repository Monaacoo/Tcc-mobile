import React from "react"
import {SafeAreaView, ScrollView } from "react-native"

import estilo from "../styles/Estilo"

export default function Tela(props){
    return <SafeAreaView>
        <ScrollView style={ estilo.tela} pagingEnabled>
            {props.children}
        </ScrollView>

    </SafeAreaView>
}