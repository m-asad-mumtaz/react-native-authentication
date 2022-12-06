import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput } from 'react-native';
import React from 'react';
import Logo from "../../assets/images/RP-Logo.png";
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const SignInScreen = () => {

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const { control, handleSubmit } = useForm();

    const onSignInPressed = (data) => {
        console.log(data);
        // Validate User
        navigation.navigate('Home');
    };
    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    };
    const onSignUpPressed = () => {
        navigation.navigate('SignUp');
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source={Logo}
                    style={[styles.logo, { height: height * 0.25 }]}
                    resizeMode="contain" />
                <CustomInput
                    name="username"
                    placeholder="Username"
                    control={control}
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
                    name='password'
                    placeholder="Password"
                    control={control}
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
                    text="Sign In"
                    onPress={handleSubmit(onSignInPressed)}
                />
                <CustomButton
                    text="Forgot Password?"
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY"
                />
                <SocialSignInButtons />
                <CustomButton
                    text="Don't have an account? Create one!"
                    onPress={onSignUpPressed}
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
});

export default SignInScreen
