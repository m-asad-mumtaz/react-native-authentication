import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? { backgroundColor: bgColor } : {}
            ]}>
            <Text
                style={[
                    styles.text,
                    styles[`text_${type}`],
                    fgColor ? { color: fgColor } : {}
                ]}
            >
                {text}
            </Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        width: '90%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    container_PRIMARY: {
        backgroundColor: '#4c34ec',
    },
    container_SECONDARY: {
        borderColor: '#4c34ec',
        borderWidth: 2,
    },
    conrainer_TERTIARY: {
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    text_SECONDARY: {
        color: '#4c34ec',
    },
    text_TERTIARY: {
        color: 'gray',
    },

});