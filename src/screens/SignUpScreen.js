import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Logo from "../../assets/images/RP-Logo.png";
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onSignUpPressed = () => {
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
                <Image
                    source={Logo}
                    style={[styles.logo, { height: height * 0.25 }]}
                    resizeMode="contain"
                />
                <Text style={styles.title}>Create Account</Text>
                <CustomInput
                    value={userName}
                    setValue={setUserName}
                    placeholder="Username"
                />
                <CustomInput
                    value={email}
                    setValue={setEmail}
                    placeholder="Email"
                />
                <CustomInput
                    value={password}
                    setValue={setPassword}
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <CustomInput
                    value={confirmPassword}
                    setValue={setConfirmPassword}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                />
                <CustomButton
                    text="Sign Up"
                    onPress={onSignUpPressed}
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
    logo: {
        width: "60%",
        maxWidth: 300,
        maxHeight: 300,
    },
    title: {
        fontSize: 28,
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

export default SignUpScreen
