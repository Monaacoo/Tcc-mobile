import React, { useState } from "react"
import { TouchableOpacity, Image, Text } from "react-native"
import estilo from "../styles/Estilo"

export default function BotaoLike (props){

    const [curtidas, setCurtidas] = useState(0)

    return <TouchableOpacity onPress={()=> setCurtidas(curtidas + 1)} style={estilo.botao}>

        <Image source={{uri: "https://ibb.co/Z1j7ZyZ/pencil.png"}} style= {estilo.botaoImagem} />
        <Text style={estilo.botaoTexto}> {curtidas} </Text>
    </TouchableOpacity>
}