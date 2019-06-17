import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import api from '../services/api';
export default class Feedback extends Component {
    state = {
        feedback: "",
    }

    handleNextPage() {
        this.props.navigation.navigate('Feedback')
    }

    handleAlert() {
        Alert.alert(
            'Pronto',
            'Feedback enviado com sucesso',
        )
    }

    handleFeedback = async () => {
        const token = await AsyncStorage.getItem('token')

        fetch("http://172.23.149.134:3001/auth/feedback", {
            method: "POST",
            body:
                JSON.stringify({
                    feedback: this.state.feedback
                }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })
            .then(response => response.json())
            .then(data => { console.log(data) })
            .catch(err => { console.log(err) })
        this.handleAlert()
        this.handleNextPage();


    }

    render() {
        return (
            <ImageBackground source={require('../app/imagens/fundo.jpg')}
                style={styles.container}>
                <View style={styles.inner}>
                    <Text style={styles.titulo1}>VirtualBorn</Text>
                    <Text style={styles.titulo}>Feedback</Text>
                    <TextInput style={styles.input}
                        placeholder="Insira o feedback"
                        multiline
                        placeholderTextColor="#363636"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={this.state.feedback}
                        onChangeText={text => this.setState({ feedback: text })} />

                    <TouchableOpacity style={styles.botao}

                        onPress={() => {
                            this.handleFeedback()

                        }}>
                        <Text style={styles.buttonText}>Enviar</Text>

                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        padding: 0,
        margin: 5,
        fontSize: 20,
    },
    titulo1: {
        padding: 20,
        fontSize: 30,
        color: '#FFF',
        margin: 10,
    },

    inner: {
        height: 600,
        width: 350,
        backgroundColor: '#EDC271',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',

    },
    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 270,
        height: 45,
        marginTop: 30,
        margin: 10,
        borderRadius: 50,
        backgroundColor: '#B8860B',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    input: {
        width: 200,
        height: 280,
        marginTop: 20,
        margin: 5,
        padding: 20,
        backgroundColor: '#F9E0B8',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
})