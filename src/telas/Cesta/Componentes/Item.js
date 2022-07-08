import React from 'react';
import { StyleSheet, View, Image } from 'react-native'

import Texto from '../../../componentes/Texto';

export default function Item({ item: { nome, imagem } }) {
    return <View style={estilos.item}>
        <Image style={estilos.imagem} source={imagem}></Image>
        <Texto style={estilos.conteudo}>{nome}</Texto>
    </View>
}

const estilos = StyleSheet.create({
    item: {
        textAlign: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        alignItems: 'center',
        paddingVertical: 16,
        marginHorizontal: 16,

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