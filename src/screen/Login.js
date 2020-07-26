import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { logo } from '../logo.png';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Login() {
    const logoImage = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngio.com%2Fimages%2Fpng-a818335.html&psig=AOvVaw1Uk39tZFTjaM_C5zG9OhbX&ust=1595836716608000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLiKm5i56uoCFQAAAAAdAAAAABAI';

    const alertMessage = () => 
    Alert.alert("Error", "This is on mantaining");
    return (
        <>
            <View style={styles.container}>
                {/* <Image
                    style={styles.tinyLogo}
                    source={require('../logo.png')}
                /> */}
                <Text style={styles.logoText} h1>Go Cambodia</Text>

                {/*  */}
                <View style={styles.inputArea}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Phone Number"
                    />

                    <TextInput
                        style={styles.inputText}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        style={styles.forgetPassword}
                        onPress={alertMessage}
                    >
                        <Text style={{color:'#525050'}}>forget password ?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputArea}>
                    {/* <Button
                        onPress={console.log('test')}
                        title="LOGIN"
                        style={styles.button}
                        
                        accessibilityLabel="Learn more about this purple button"
                    /> */}

                    <TouchableOpacity
                        style={styles.button}
                        onPress={alertMessage}
                    >
                        <Text>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                {/*  */}
                <View style={styles.textSignUp}>
                <Text>Don't have an account ?</Text>
                    <TouchableOpacity
                        style={{paddingLeft:7}}
                        onPress={alertMessage}
                    >
                        <Text style={{color:'blue'}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
    },
    tinyLogo: {
        width: 100,
        height: 100,
        margin: 5,
    },
    logoText: {
        fontSize: 40,
        color: '#fff',
        fontWeight: '800',
        fontFamily: 'Roboto',
    },
    inputArea: {
        height: 100,
        // backgroundColor: 'red',
        marginTop: '10%',
        width: '80%',
    },
    inputText: {
        color: '#fff',
        borderColor: '#ffff',
        margin: 8,
        borderRadius: 50,
        // padding:5,
        paddingLeft: 25,
        borderWidth: 1,
        fontSize: 14,
    },
    button: {
        width:'95%',
        marginTop:45,
        margin: 8,
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderRadius: 50
    },
    textSignUp:{
        flexDirection: 'row',
    },
    forgetPassword: {
        // padding:10,
        marginRight:20,
        alignSelf: 'flex-end'
    }
});
