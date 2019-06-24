import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import api from '../services/api';
import { View, Text, TextInput, ImageBackground, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default class Main extends Component {

    state = {
        email: '',
        password: '',
    }

    handleNextPage() {
        this.props.navigation.navigate('MainProf')
    }

    handleNextPageAluno() {
        this.props.navigation.navigate('Cozinha')
    }

    handleLogin = async () => {
        const { email, password } = this.state;

        if (email === '' || password === '')
            return alert("Há campos obrigatórios em branco")
        try {
            const response = await api.post('/auth/authenticate', {
                email: this.state.email,
                password: this.state.password,
            })
            await AsyncStorage.setItem('token', `${response.data.token}`)
            if (response.data.user.tipoU === 'Professor') {

                this.handleNextPage();
            } else {
                this.handleNextPageAluno();
            }

        } catch (err) {
            return Alert.alert('Erro',
                'Verifique seu usuário e senha')
        }
    }
    render() {
        return (
            <ImageBackground source={require('../app/imagens/fundo.jpg')}
                style={styles.container}>

                <View style={styles.inner}>
                    <Text style={styles.logo}>VirtualBorn</Text>
                    <View style={styles.bloco}>
                        <TextInput style={styles.input}
                            underlineColorAndroid='#F9E0B8'
                            placeholderTextColor="#363636"
                            placeholder="E-mail"
                            autoCapitalize="none"
                            onChangeText={this.state.email}
                            email={this.state.email}
                            onChangeText={text => this.setState({ email: text })} />

                        <TextInput secureTextEntry={true}
                            style={styles.input}
                            underlineColorAndroid='#F9E0B8'
                            placeholderTextColor="#363636"
                            placeholder="Senha"

                            autoCapitalize="none"
                            onChangeText={this.state.password}
                            senha={this.state.password}
                            onChangeText={text => this.setState({ password: text })} />

                        <TouchableOpacity style={styles.botao}
                            onPress={this.handleLogin}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('Recuperar')
                        }} >
                            <Text style={styles.buttonText1} > Recuperar Acesso </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Cadastro')

                            }}>
                            <Text style={styles.buttonText1}>Cadastre-se</Text>

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
        justifyContent: 'space-around',
        alignItems: 'center',
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
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 65,
        marginTop: 15,
        padding: 10,
        color: '#B8860B'
    },
    titulo1: {
        padding: 20,
        fontSize: 50,
        color: '#FFF',
        margin: 10,
        marginTop: 20
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
    buttonText1: {
        marginTop: 20,
        color: '#000',
        fontSize: 15,
        opacity: 0.60,
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