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

        fetch("http://192.168.42.46:3001/auth/feedback", {
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
                    <View style={styles.bloco}>
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
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 45,
        marginTop: 15,
        padding: 10,
        color: '#B8860B'
    },
    bloco: {
        marginTop: 50,
        alignItems: 'center',
    },
    inner: {
        height: 600,
        width: 350,
        backgroundColor: '#EDC271',
        borderRadius: 15,
        justifyContent: 'flex-start',
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
        color: '#FFF',
        fontSize: 20,  
        fontWeight: 'bold',
    },
    input: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 200,
        borderColor: 'gray',
        borderRadius: 30,
        backgroundColor: '#F9E0B8',
        marginTop: 30,
        margin: 30,
        marginBottom: 10,
        padding: 5
    }
})