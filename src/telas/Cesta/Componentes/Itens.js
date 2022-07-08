import React from 'react';
import { StyleSheet, View, Image } from 'react-native'

import Texto from '../../../componentes/Texto';

export default function Itens({ titulo, lista }) {
    return <>
        <Texto style={estilos.titulo}>{titulo}</Texto>
        {
            lista.map(({ nome, imagem }) => {
                return <View key={nome} style={estilos.item}>
                    <Image style={estilos.imagem} source={imagem}></Image>
                    <Texto style={estilos.conteudo}>{nome}</Texto>
                </View>
            })
        }
    </>
}

const estilos = StyleSheet.create({
    item: {
        textAlign: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        alignItems: 'center'
    },
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8
    },
    conteudo: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#464646',
    },
    imagem: {
        width: 46,
        height: 46,
        borderRadius: 12
    }
})