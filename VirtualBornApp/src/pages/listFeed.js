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
        fetch("http://172.23.149.134:3001/auth/mostrarFeedback", {
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
            .then(data => {console.log(data) })
            .catch(err => { console.warn(err) })

    }


    render() {
        return (
            <ImageBackground source={require('../app/imagens/fundo.jpg')}
                style={styles.container}>
                <View style={styles.inner}>
                    <TextInput style={styles.input}
                        underlineColorAndroid='transparent'
                        placeholder='Nome completo do Professor'
                        onChangeText={(nome) => this.setState({ nome })}
                        value={this.state.nome} >

                    </TextInput>
                    <TouchableOpacity style={styles.button}
                        onPress={() => {
                            this.handleFeedback()

                        }}>
                        <Text style={styles.buttonText1}>Buscar</Text>

                    </TouchableOpacity>

                    <Text>
                        {this.state.feedback}
                    </Text>


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
    inner: {
        height: 600,
        width: 350,
        backgroundColor: '#EDC271',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        padding: 20,
        backgroundColor: 'transparent',
    },
    Container: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderRadius: 30,
        borderColor: 'rgb(100,149,237)',
        padding: 20,
        marginBottom: 20,
    },
    select: {
        backgroundColor: 'rgb(100,149,237)',
        color: "#333"
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
    buttonText: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
    },
})