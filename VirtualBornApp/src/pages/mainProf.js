import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default class MainProf extends Component {
    render() {
        return (
            <ImageBackground source={require('../app/imagens/fundo.jpg')}
                style={styles.container}>
                <View style={styles.inner}>
                <ImageBackground source={require('../app/imagens/logo.png')}
                        style={styles.logo}></ImageBackground>
                <View style={styles.bloco}>
                    <TouchableOpacity style={styles.botao}

                        onPress={() => {
                            this.props.navigation.navigate('Rendimento')

                        }}>
                        <Text style={styles.buttonText}>Informações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao}

                        onPress={() => {
                            this.props.navigation.navigate('Listagem')

                        }}>
                        <Text style={styles.buttonText}>Alunos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao}

                        onPress={() => {
                            this.props.navigation.navigate('Feedback')

                        }}>
                        <Text style={styles.buttonText}>Feedback</Text>
                    </TouchableOpacity>
                    </View>
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
    logo: {
        width: 300,
        height: 120
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
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 270,
        height: 45,
        marginTop: 10,
        margin: 30,
        borderRadius: 50,
        backgroundColor: '#B8860B',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    bloco:{
        marginTop: 80,
        alignItems: 'center',
    },
})