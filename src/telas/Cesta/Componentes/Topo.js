import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

import Texto from "../../../componentes/Texto";

import topo from '../../../../assets/topo.png'

/*Obtem as dimensões da tela*/
const width = Dimensions.get('screen').width;

export default function Topo() {
    return <>
        <Image source={topo} style={estilos.topo} ></Image>
        <Texto style={estilos.titulo}> Detalhes da cesta</Texto>
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
    },
})
