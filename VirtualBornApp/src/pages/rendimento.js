import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class Acertos extends Component {
    render() {
        return (
            <ImageBackground source={require('../app/imagens/fundo.jpg')}
                style={styles.container}>
                <View style={styles.inner}>
                    <TextInput style={styles.input}
                        underlineColorAndroid='#F9E0B8'
                        placeholderTextColor="#363636"
                        placeholder="Nome Completo do Aluno"

                        autoCapitalize="none" />
                    <TouchableOpacity style={styles.botao}

                        onPress={() => {
                            this.props.navigation.navigate('MainProf')

                        }}>
                        <Text style={styles.buttonText}>Buscar</Text>
                    </TouchableOpacity>
                    <View styles={styles.bloco}>
                        <Text style={styles.titulo}>Acertos:</Text>
                        <TextInput style={styles.bolinha}
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={this.handleNome} />
                        <Text style={styles.text}>Texto de acordo com os acertos.</Text>
                        <Text style={styles.titulo}>Erros:</Text>
                        <TextInput style={styles.bolinha}
                            placeholderTextColor="#363636"
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={this.handleNome} />
                        <Text style={styles.text}>Texto de acordo com os erros.</Text>
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
    titulo: {
        fontSize: 20,
        margin: 10
    },
    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 270,
        height: 45,
        marginTop: 20,
        margin: 5,
        borderRadius: 50,
        backgroundColor: '#B8860B',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
    },
    buttonText1: {
        marginTop: 20,
        color: '#000',
        fontSize: 15,
        opacity: 0.60
    },
    bloco: {
        marginTop: 80,
        alignItems: 'center',
    },
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
    bolinha: {
        margin: 5,
        padding: 20,
        borderRadius: 80,
        backgroundColor: '#F9E0B8',
    },
    inner: {
        height: 600,
        width: 350,
        backgroundColor: '#EDC271',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        margin: 5
    },
})