import React, { Component } from 'react';
import api from '../services/api';
import { AsyncStorage } from 'react-native';
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class ListFeed extends Component {


    state = {
        nome: '',
        feedback: ''
    }

    handleNextPage() {
        this.props.navigation.navigate('ListFeed')
    }


    handleFeedback = async () => {
        const token = await AsyncStorage.getItem('token')
        fetch("http://192.168.42.46:3001/auth/mostrarFeedback", {
            method: "POST",
            body:
                JSON.stringify({
                    nome: this.state.nome
                }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })
            .then(response => response.json())
            .then(data => { this.setState({ feedback: data.feedback }) })
            .catch(err => { console.warn(err) })
        this.handleNextPage()
    }


    render() {
        return (
            <ImageBackground source={require('../app/imagens/fundo.jpg')}
                style={styles.container}>
                <View style={styles.inner}>
                    <Text style={styles.titulo1}>VirtualBorn</Text>
                    <View style={styles.bloco}>
                        <TextInput style={styles.input}
                            underlineColorAndroid='transparent'
                            placeholder='Nome completo do Professor'
                            onChangeText={(nome) => this.setState({ nome })}
                            value={this.state.nome} >

                        </TextInput>
                        <TouchableOpacity style={styles.button}
                            onPress={() => { this.handleFeedback() }}>
                            <Text style={styles.buttonText}>Buscar</Text>

                        </TouchableOpacity>
                        <View style={styles.blocoFeed}>
                            <Text style={styles.feed}>
                              {"Feedback: " + this.state.feedback}
                            </Text>
                        </View>
                    </View>

                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        width: 270,
        height: 55,
        marginTop: 20,
        margin: 5,
        padding: 20,
        backgroundColor: '#F9E0B8',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bloco: {
        marginTop: 40,
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
    feed: {
        fontSize: 15,
        color: "#000",
        marginTop: 15,
        lineHeight: 24,
        backgroundColor: 'transparent',
        borderWidth: 1,
        width: 270,
        height: 200,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#B8860B',
        padding: 20,
        marginBottom: 20,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 270,
        height: 45,
        marginTop: 30,
        margin: 10,
        borderRadius: 50,
        backgroundColor: '#B8860B',
    },
    titulo1: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 45,
        padding: 10,
        color: '#B8860B'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
})