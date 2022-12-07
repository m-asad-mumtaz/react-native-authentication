import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const SignUpScreen = () => {
    const navigation = useNavigation();
    const { control, handleSubmit, watch } = useForm({
        defaultValues: {
            username: "test12345",
            email: "test12345@gmail.com",
            password: "12345678",
            confirm_password: "12345678"
        }
    });
    const pwd = watch('password');

    const onSignUpPressed = (data) => {
        console.log(data);
        navigation.navigate('ConfirmEmail');
    };
    const onTermsOfUsePressed = () => {
        console.warn("Terms of Use");
    };
    const onPrivacyPolicyPressed = () => {
        console.warn("Privacy Policy");
    };
    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <CustomInput
                    name="username"
                    control={control}
                    placeholder="Username"
                    rules={{
                        required: "Username is required",
                        minLength: {
                            value: 3,
                            message: "Username should be minimum 3 characters long",
                        },
                        maxLength: {
                            value: 24,
                            message: "Username should be maximum 24 characters long",
                        }
                    }}
                />
                <CustomInput
                    name="email"
                    control={control}
                    placeholder="Email"
                    rules={{
                        required: "Email is required",
                        pattern: {
                            value: EMAIL_REGEX,
                            message: "Please enter a valid email"
                        }
                    }}
                />
                <CustomInput
                    name="password"
                    control={control}
                    placeholder="Password"
                    secureTextEntry={true}
                    rules={{
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password should be minimum 8 characters long",
                        }
                    }}
                />
                <CustomInput
                    name="confirm_password"
                    control={control}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    rules={{
                        required: "Password is required",
                        validate: value => value == pwd || "Password do not match"
                    }}
                />
                <CustomButton
                    text="Sign Up"
                    onPress={handleSubmit(onSignUpPressed)}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>By registering, you confirm that you accept our
                        <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use</Text> and
                        <Text style={styles.link} onPress={onPrivacyPolicyPressed}> Privacy policy.</Text>
                    </Text>
                </View>
                {/* <SocialSignInButtons /> */}
                <CustomButton
                    text="Already have an account? Sign In"
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

export default SignUpScreen
