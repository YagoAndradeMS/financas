import React from "react";
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
} from "react-native";

import { Feather } from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 65;
export default function Header({ name }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>
                    Olá {name} 🤑 </Text>

                <TouchableOpacity style={styles.buttonUser}>
                    <Feather name="user" size={27} color={"#fff"} ></Feather>
                </TouchableOpacity>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8000ff',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    username: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    buttonUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 44 / 2,
    }
})