import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'

const SocialSignInButtons = () => {
    const onSignInFacebookPressed = () => {
        console.warn("Sign In With Facebook");
    };
    const onSignInGooglePressed = () => {
        console.warn("Sign In With Google");
    };
    const onSignInApplePressed = () => {
        console.warn("Sign In With Apple");
    };
    return (
        <>
            <CustomButton
                text="Sign In With Facebook"
                onPress={onSignInFacebookPressed}
                bgColor="#E7EAF4"
                fgColor="#4765B9"
            />
            <CustomButton
                text="Sign In With Google"
                onPress={onSignInGooglePressed}
                bgColor="#FAE9FA"
                fgColor="#DD4D44"
            />
            <CustomButton
                text="Sign In With Apple"
                onPress={onSignInApplePressed}
                bgColor="#e3e3e3"
                fgColor="#363636"
            />

        </>
    )
}

export default SocialSignInButtons

const styles = StyleSheet.create({})