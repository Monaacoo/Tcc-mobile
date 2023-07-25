import React, { useState } from "react"
import { TouchableOpacity, View } from "react-native"
import { Video, ResizeMode } from "expo-av"

import estilo from "../styles/Estilo"

export default function Conteudo (props){
    const [reproduzir, setReproduzir] = useState(false)

    return <TouchableOpacity onPress={()=> setReproduzir(!reproduzir)}>
        <View style={estilo.videoBox}>
        <Video 
        source={props.fonte}
        style={estilo.video}
        resizeMode={ResizeMode.CONTAIN}
        useNativeControls={false}
        shouldPlay={reproduzir}
        isLooping/>
        </View>
    </TouchableOpacity>
}