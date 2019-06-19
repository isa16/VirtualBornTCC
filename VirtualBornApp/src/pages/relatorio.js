import React, { Component } from 'react';
import {
    Text, TextInput, TouchableOpacity,
    StyleSheet, View, ImageBackground, Alert
} from 'react-native';
import { AsyncStorage } from 'react-native';
import api from '../services/api'


export default class Relatorio extends Component {
    state = {
        parecer: "",
    }

    handleNextPage() {
        this.props.navigation.navigate('Relatorio')
    }

    handleAlert() {
        Alert.alert(
            'Pronto',
            'Relatório enviado com sucesso',
        )
    }

    handleRelatorio = async () => {
        const token = await AsyncStorage.getItem('token')
        fetch("http://192.168.1.6:3001/auth/relatorio", {
            method: "POST",
            body:
                JSON.stringify({
                    parecer: this.state.parecer
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
            <View>
                <ImageBackground source={require('../app/imagens/fundo.jpg')} style={styles.imagemFundo} >

                    <View style={styles.inner} >
                        <Text style={styles.logo}>VirtualBorn</Text>
                        <View style={styles.bloco}>
                            <Text style={styles.text} >Preencha aqui seu relatório diário sobre os cuidados com o seu bebê,
                                as dificuldades encontradas para cuidar e a experiência adquirida por você.
                        </Text>

                            <TextInput style={styles.input}
                                underlineColorAndroid='transparent'
                                placeholder='Relatorio diário'
                                onChangeText={(parecer) => this.setState({ parecer })}
                                value={this.state.parecer} ></TextInput>

                            <TouchableOpacity style={styles.botao}
                                onPress={() => {
                                    this.handleRelatorio();
                                }}>
                                <Text style={styles.buttonText}>Enviar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.botao}
                                onPress={() => {
                                    this.props.navigation.navigate('ListFeed')
                                }}>
                                <Text style={styles.buttonText}>Ver Feedback</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    imagemFundo: {
        width: '100%',
        height: '100%'
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 50,
        marginTop: 15,
        color: '#B8860B'
    },
    bloco: {
        marginTop: 20,
        alignItems: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 280,
        height: 200,
        borderColor: 'gray',
        borderRadius: 30,
        backgroundColor: '#F9E0B8',
        marginTop: 30,
        margin: 30,
        marginBottom: 10,
        padding: 5
    },
    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 260,
        height: 45,
        margin: 10,
        borderRadius: 50,
        backgroundColor: '#B8860B',
    },
    inner: {
        backgroundColor: '#EDC271',
        marginTop: 50,
        borderRadius: 30,
        marginLeft: 10,
        marginRight: 10,
        height: 600,
        alignItems: 'center'
    },
    text: {
        margin: 10,
        marginTop: 20,
        fontSize: 16,
        alignItems: 'baseline',
        color: '#000'

    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },

})