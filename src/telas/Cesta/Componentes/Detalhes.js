import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

import Texto from "../../../componentes/Texto";

import logo from '../../../../assets/logo.png'

/*Obtem as dimensões da tela*/
const width = Dimensions.get('screen').width;

export default function Detalhes() {
    return <>
        <Texto style={estilos.nome} >Cesta de verduras</Texto>

        <View style={estilos.fazenda}>
            <Image style={estilos.imagemFazenda} source={logo}></Image>
            <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>

        <Texto style={estilos.descricao}>
            Uma cesta com produtos selecionados
            cuidadosamente da fazenda direto para
            sua cozinha
        </Texto>
        <Texto style={estilos.preco}>R$40</Texto>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width,
        fontWeight: 'normal',
        fontFamily: 'MontserratBold'
    },
    titulo: {
        width: '100%',
        position: 'absolute',
        TextAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 16
    }, nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold'
    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})