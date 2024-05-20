import React, { useState } from 'react'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export default function Movements({ data }) {

    const [showValue, setShowValue] = useState(false)

    return (
        <TouchableOpacity style={estilos.container} onPress={ () => setShowValue(!showValue) } >
            <Text style={estilos.date}> {data.date} </Text>

            <View style={estilos.content}>
                <Text style={estilos.label}> {data.label} </Text>

                {showValue ? (
                    <Text
                        style={data.type === 1 ? estilos.value : estilos.expenses}>

                        {data.type === 1 ? `R$ ${data.value}` : `R$ - ${data.value}`} </Text>
                ) : (
                    <View style={estilos.skeleton}>

                    </View>
                )}

            </View>
        </TouchableOpacity>
    )
}
const estilos = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#DADADA'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
        marginBottom: 8,
    },
    date: {
        color: '#DADADA',
        fontWeight: 'bold'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    value: {
        fontSize: 16,
        color: '#2ecc71'
    },
    expenses: {
        fontSize: 16,
        color: '#e74e3c',
        fontWeight: 'bold'
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 8
    }
})