import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({

    nav:{
        backgroundColor: "#331D2C"
    },

    navTopo:{
        backgroundColor: "#3F2E3E",
        paddingVertical: 20,
    },

    navTopoTexto: {
        color: "#fff",
        fontSize:32,
        textAlign: "center"
    },

    navBase:{
        flexDirection: "row",
        gap: 16,
        justifyContent: "space-around",
    },

    navBotao:{
        backgroundColor: "#A78295",
        padding: 20,
    },

    clienteArea:{
        backgroundColor: "#331D2C",
        padding:32,
        gap:16,
    },

    tatto:{
        padding: 21,
        color: "#fff",
        fontSize:32,
        textAlign: "center"
    },

    perfil:{
        fontSize: 40,
        color: "purple",
        fontWeight: "bold",
        textAlign: "center"
    },

    descricao:{
        fontSize: 20,
        margin: 10,
        color: "white",
        textAlign: "center"
    },

    clienteEntrada:{
        backgroundColor: "white",
        borderRadius: 8,
        padding: 8,
        placeholderTextColor: '#333'
    },
    
    clienteBotao:{
        backgroundColor: "#A78295",
        padding: 16,
    },

    clienteBotaoTexto:{
        color: "white",
        fontWeight: "bold",
        textAlign: "center",   
    },

    estaArea:{
        padding:32,
        gap: 16,
    },

    estaVer:{
        backgroundColor: "#A78295",
        borderRadius: 10,
        padding: 16,
    },

    estaSec:{
        fontSize: 20,
    },

    estaNome:{
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 24,
    },

    tela: {
        backgroundColor: "white",
        height: "100%"
    },

    perfilQ:{
        margin: 30,
        textAlign: "center",
        alignItems: "center",
        padding: 20
    },

    video:{
        height: 650,
        resizeMode: "contain",
        //marginVertical: 40
        },

    videoBox:{
        marginVertical: 45
    },
    
    foto:{
        height: 300,
        width: 300,
        margin: 30
    },

    botao:{
        position: "absolute",
        bottom: 16,
        right: 16,
        zIndex: 1,
    },

    botaoImagem:{
        width: 120,
        height: 120,
        resizeMode: "contain"
    },

    botaoTexto:{
        color: "white",
        fontSize: 32,
        position:"absolute",
        bottom: 60,
        right: 32,
        zIndex: 1,
    },

})