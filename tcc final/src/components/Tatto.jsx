import React from "react"
import { View, Text, Image } from "react-native"

import estilo from "../styles/Estilo"

export default function Tatto (props){

    
    return <View style= {estilo.nav}>

        <Text style ={estilo.tatto}> Nossos Tatuadores </Text>

        <View style={estilo.perfilQ}>
        <Text style={estilo.perfil}> Caique </Text>
        <Image source={{uri: "https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?ims=704x"}}
        style={estilo.foto}/>
        <Text style={estilo.descricao}>  Trabalho com tatuagens pequenas de Realismo Preto e Cinza e Colorido, Fine Line, Black Work e Aquarela. </Text>
        </View>
        
        <View style={estilo.perfilQ}>
        <Text style={estilo.perfil}> Roberto </Text>
        <Image source={{uri: "https://colegiocognos.com.br/wp-content/uploads/2020/08/essa-pessoa-nao-existe2.jpeg"}}
        style={estilo.foto}/>
        <Text style={estilo.descricao}> Trabalho com fechamento, tatuagens grandes, com maior demanda e faço tatuagens em areas intimas. </Text>
        </View>
        
        <View style={estilo.perfilQ}>
        <Text style={estilo.perfil}> Camila </Text>
        <Image source={{uri: "https://colegiocognos.com.br/wp-content/uploads/2020/08/essa-pessoa-nao-existe.jpeg"}}
        style={estilo.foto}/>
        <Text style={estilo.descricao}> Trabalho com perfurações de piercins, joias de procedência em titânio e aço cirúrgico. </Text>
        </View>

        </View>
    
}