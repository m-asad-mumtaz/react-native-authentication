import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Logo from "../../assets/images/RP-Logo.png";
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const ConfirmEmailScreen = () => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const { control, handleSubmit } = useForm()

    const onConfirmPressed = (data) => {
        console.warn(data);
        navigation.navigate('Home');
    };
    const onResendPressed = () => {
        console.warn("Code Resent");
    };
    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={[styles.logo, { height: height * 0.25 }]}
                    resizeMode="contain"
                />
                <Text style={styles.title}>Confirm Your Email</Text>
                <CustomInput
                    name="code"
                    control={control}
                    placeholder="Enter your confirmation code"
                    rules={{ required: "Confirmation code is required" }}
                />
                <CustomButton
                    text="Confirm"
                    onPress={handleSubmit(onConfirmPressed)}
                />
                <CustomButton
                    text="Resend Code"
                    onPress={onResendPressed}
                    type="SECONDARY"
                />
                <CustomButton
                    text="Back to Sign In"
                    onPress={onSignInPressed}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        paddingTop: 20,
    },
    logo: {
        width: "60%",
        maxWidth: 300,
        maxHeight: 300,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: "#4c34ec",
        marginBottom: 12,
    },
    textContainer: {
        width: '90%',
        alignItems: 'center',
    },

    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },
});

export default ConfirmEmailScreen
