import React, { Component } from 'react';
import {
    Text, TextInput, TouchableOpacity,
    StyleSheet, View, ImageBackground,
} from 'react-native';
import api from '../services/api'


export default class Relatorio extends Component {
    state = {
        relatorio: "",
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
        await api.post('/auth/relatorio', {
            relatorio: this.state.relatorio
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
            <View>
                <ImageBackground source={require('../app/imagens/fundo.jpg')} style={styles.imagemFundo} >

                    <View style={styles.inner} >
                        <Text style={styles.logo}>VirtualBorn</Text>

                        <Text style={styles.text} >Preencha aqui seu relatório diário sobre os cuidados com o seu bebe,
                            as dificuldades encontradas para cuidar e a experiencia adquirida por voce.
                        </Text>

                        <TextInput style={styles.input}
                            underlineColorAndroid='transparent'
                            placeholder='Relatorio diário'
                            onChangeText={(relatorio) => this.setState({ relatorio })}
                            value={this.state.relatorio} ></TextInput>

                        <TouchableOpacity style={styles.botao}
                            onPress={() => {
                                this.handleRelatorio();
                            }}>
                            <Text style={styles.buttonText}>Enviar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botao}
                            onPress={() => {
                                this.props.navigation.navigate('Cozinha')
                            }}>
                            <Text style={styles.buttonText}>Voltar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botao}
                            onPress={() => {
                                this.props.navigation.navigate('ListFeed')
                            }}>
                            <Text style={styles.buttonText}>Ver Feedback</Text>
                        </TouchableOpacity>



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
    input: {
        width: 280,
        height: 200,
        borderColor: 'gray',
        borderWidth: 0,
        borderRadius: 30,
        backgroundColor: '#F0F8FF',
        marginTop: 30,
        margin: 30,
        marginBottom: 10
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
        alignItems: 'flex-end',
        color: '#000'

    },
    buttonText: {
        marginTop: 4,
        color: '#FFF',
        fontSize: 20,
        opacity: 0.60
    },

})