//Importando bibliotecas prontas 
import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

//Criando e exportando a função:
export default function Balance() {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>
                    Saldo
                </Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}> R$</Text>
                    <Text style={styles.balance}>80.000,00 </Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>
                    Gastos
                </Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}> R$</Text>
                    <Text style={styles.expenses}> 20.000,00 </Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 6,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99 //Sobrepõe a tela home sobre qq outro componente
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    currencySymbol: {
        color: '#00008B',
        marginRight: 6,
    },
    balance:{
        fontSize: 22,
        color: '#2eCc71'
    },
    expenses: {
        fontSize: 22,
        color: '#e74c3c'
    }
})