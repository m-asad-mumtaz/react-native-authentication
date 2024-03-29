import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const { control, handleSubmit } = useForm();
    const onSendPressed = (data) => {
        console.warn(data);
        navigation.navigate('NewPassword');
    };
    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Please provide your username to reset password.</Text>
                <CustomInput
                    name="username"
                    control={control}
                    placeholder="Enter Your Username"
                    rules={{
                        required: "Username is required",
                        minLength: {
                            value: 3,
                            message: "Username should be minimum 8 characters long",
                        },
                        maxLength: {
                            value: 24,
                            message: "Username should be maximum 24 characters long",
                        }
                    }}
                />
                <CustomButton
                    text="Next"
                    onPress={handleSubmit(onSendPressed)}
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

export default ForgotPasswordScreen
