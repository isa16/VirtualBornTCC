import React, { Component } from 'react';
import api from '../services/api';

import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

export default class ListFeed extends Component {


    state = {
        nome: '',
        feedback: ''
    }

    handleNextPage() {
        this.props.navigation.navigate('Relatorio')
    }


    handleFeedback = async () => {
        const response = await api.get('/auth/mostrarFeedback', {
            nome: this.state.nome
        })
            .then(response => {
                console.warn(this.state);
                console.warn(response);
                this.handleNextPage();
            })
            .catch(err => {
                console.warn(err.response)
            })

        this.setState({ feedback: response })
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
                    <TouchableOpacity
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
    profTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
    },
    profEmail: {
        fontSize: 13,
        color: "#999",
        marginTop: 15,
        lineHeight: 24,
    },
    profSenha: {
        fontSize: 12,
        color: "#999",
        marginTop: 5,
        lineHeight: 24,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 170,
        height: 42,
        marginTop: 10,
        borderRadius: 50,
        backgroundColor: '#2089DA',
    },
    buttonText: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
    },
})