import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Topo from './Componentes/Topo';
import Detalhes from './Componentes/Detalhes';
import Item from './Componentes/Item';
import Texto from '../../componentes/Texto';

/* export - Necessário utilizar 
            para que seja possível utilizar em outros arquivos
*/
export default function Cesta({ topo, detalhes, itens }) {
    return <>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes} />
                        <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                    </View>
                </>
            }}
        />
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8
    },
})