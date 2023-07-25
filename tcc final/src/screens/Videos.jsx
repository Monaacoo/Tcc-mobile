import React from "react"
import {Text, StatusBar, View} from "react-native"

import Navegacacao from "../components/Navegacao"
import videos from "../storage/videos"
import Tela from "../components/Tela"
import BotaoLike from "../components/BotaoLike"
import Conteudo from "../components/Conteudo"
import estilo from "../styles/Estilo"


export default function Videos ({navigation}){
    return <Tela>
        
        <StatusBar barStyle="dark-content" backgroundColor="#331D2C"/>

        <Navegacacao navigation={navigation}/>
        <View style={ estilo.clienteArea}>
        {
          videos.map(function(video){
            
            return <View key={video.codigo}>
              <BotaoLike/>
              <Conteudo fonte={video.fonte}/>
  
            </View>
            
          })
        }
        </View>
        
    </Tela>
  
  }