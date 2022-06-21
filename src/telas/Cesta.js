import React from 'react';
import { StyleSheet, Image, Dimensions, Text } from 'react-native';

import topo from '../../assets/topo.png'

/*Obtem as dimensões da tela*/
const width = Dimensions.get('screen').width;

/* export - Necessário utilizar 
            para que seja possível utilizar em outros arquivos
*/
export default function Cesta() {
    return <>
        <Image source={topo} style={estilos.topo}></Image>
        <Text style={estilos.titulo}> Detalhes da cesta</Text>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width
    },
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 16
    }
})