import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const NewPasswordScreen = () => {
    const navigation = useNavigation();
    const { control, handleSubmit } = useForm();
    const onSubmitPressed = () => {
        console.warn("Password Reset Successfully");
        navigation.navigate('Home');
    };
    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset Your Password</Text>
                <CustomInput
                    name="code"
                    control={control}
                    placeholder="Enter Code Sent to Your Email"
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
                <CustomInput
                    name="password"
                    control={control}
                    placeholder="New Password"
                    secureTextEntry={true}
                    rules={{
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password should be minimum 8 characters long",
                        }
                    }}
                />
                <CustomButton
                    text="Submit"
                    onPress={handleSubmit(onSubmitPressed)}
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

export default NewPasswordScreen
