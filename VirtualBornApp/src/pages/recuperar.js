import React, { Component } from 'react';
import {
    Text, TextInput, TouchableOpacity,
    StyleSheet, View, ImageBackground, Image
} from 'react-native';


export default class Recuperar extends Component {
    state = {
        email: '',
        senha: ''
    }
    render() {
        return (
            <ImageBackground source={require('../app/imagens/fundo.jpg')} style={styles.container} >

                <View style={styles.inner} >
                    <Text style={styles.logo}>VirtualBorn</Text>
                    <View style={styles.bloco}>
                        <Text style={styles.titulo}>Recuperação de Acesso</Text>

                        <TextInput style={styles.input}
                            underlineColorAndroid='#F9E0B8'
                            placeholderTextColor="#363636"
                            placeholder="E-mail"
                            value={this.state.email}
                            onChangeText={text => this.setState({ email: text })} />
                        <TextInput secureTextEntry={true}
                            style={styles.input}
                            underlineColorAndroid='#F9E0B8'
                            placeholderTextColor="#363636"
                            placeholder="Senha"
                            autoCapitalize="none"
                            value={this.state.senha}
                            onChangeText={text => this.setState({ senha: text })} />
                        <TouchableOpacity style={styles.botao}
                            onPress={() => {
                                //alteraçao bd
                            }}>
                            <Text style={styles.buttonText}>Recuperar</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 65,
        marginTop: 15,
        padding: 10,
        color: '#B8860B'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        padding: 0,
        margin: 10,
        fontSize: 20,
    },
    titulo1: {
        padding: 20,
        fontSize: 30,
        color: '#FFF',
        margin: 10,
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
})