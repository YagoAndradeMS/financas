import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

export default function Movements({ data }) {
    return (
        <View style={estilos.container}>
            <Text style={estilos.date}> {data.date} </Text>

            <View style={estilos.content}>
                <Text style={estilos.label}> {data.label} </Text>
                <Text
                    style={data.type === 1 ? estilos.value: estilos.expenses}>

                    R$ {data.value} </Text>

            </View>
        </View>
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
    }
})