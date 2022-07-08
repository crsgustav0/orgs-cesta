import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Topo from './Componentes/Topo';
import Detalhes from './Componentes/Detalhes';
import Itens from './Componentes/Itens';

/* export - Necessário utilizar 
            para que seja possível utilizar em outros arquivos
*/
export default function Cesta({ topo, detalhes, itens }) {
    return <ScrollView>
        <Topo {...topo} />
        <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
            <Itens {...itens} />
        </View>
    </ScrollView>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
})