import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const ConfirmEmailScreen = () => {
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
                <Text style={styles.title}>Please enter the code below to confirm your email.</Text>
                <CustomInput
                    name="code"
                    control={control}
                    placeholder="Enter your email code"
                    rules={{
                        required: "Code is required",
                        minLength: {
                            value: 6,
                            message: "Code should be 6 characters long",
                        },
                        maxLength: {
                            value: 6,
                            message: "Code should be 6 characters long",
                        }
                    }}
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
    title: {
        fontSize: 16,
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
