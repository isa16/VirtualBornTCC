import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import api from '../services/api';
export default class Feedback extends Component {
    state = {
        feedback: '',
    }

    handleNextPage() {
        this.props.navigation.navigate('MainApp')
    }

    handleAlert() {
        Alert.alert(
            'Pronto',
            'Feedback salvo com sucesso',
        )
    }

    handleCriar = async () => {
        await api.post('/auth/register', {
            feedback: this.state.feedback,
        })
        .then(response => {
            console.warn(this.state);
            console.warn(response);
            this.handleAlert()
            this.handleNextPage();
        })
        .catch(err => {
            console.warn(err.response)
        })
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
                        value={this.state.nome}
                        onChangeText={text => this.setState({ nome: text })} />
                    
                    <TouchableOpacity style={styles.botao}

                        onPress={() => {
                            this.handleCriar()

                        }}>
                        <Text style={styles.buttonText}>Salvar</Text>

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