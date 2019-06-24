import React, { Component } from 'react';
import api from '../services/api';
import { AsyncStorage } from 'react-native';
import { View, Text, ImageBackground, StyleSheet, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';

export default class ListRela extends Component {


    state = {
        nome: '',
        relatorios: []
    }

    handleNextPage() {
        this.props.navigation.navigate('ListRela')
    }

    handleRelatorio = async () => {
        const token = await AsyncStorage.getItem('token')
        fetch("http://192.168.42.46:3001/auth/mostrarRelatorio", {
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
            .then(data => { this.setState({ relatorios: data }) })
            .catch(err => { console.warn(err) })
    }

    renderItem = ({ item }) => (
        <View style={styles.Container}>
            <Text style={styles.parecer}>Relatório: {item.parecer}</Text>
        </View>
    )

    render() {
        return (
            <ImageBackground source={require('../app/imagens/fundo.jpg')}
                style={styles.container}>
                <View style={styles.inner}>
                    <Text style={styles.titulo1}>VirtualBorn</Text>

                    <TextInput style={styles.input}
                        underlineColorAndroid='transparent'
                        placeholder='Nome completo do Aluno'
                        onChangeText={(nome) => this.setState({ nome })}
                        value={this.state.nome} >

                    </TextInput>
                    <TouchableOpacity style={styles.button}
                        onPress={() => {
                            this.handleRelatorio()

                        }}>
                        <Text style={styles.buttonText}>Buscar</Text>
                    </TouchableOpacity>
                    <ScrollView>
                        <FlatList
                            contentContainerStyle={styles.list}
                            data={this.state.relatorios}
                            keyExtractor={item => item._id}
                            renderItem={this.renderItem} />
                    </ScrollView>

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
        width: 270,
        height: 250,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#B8860B',
        padding: 10,
        marginBottom: 20,
    },
    parecer: {
        fontSize: 15,
        color: "#000",
        marginTop: 15,
        lineHeight: 24,
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
        marginTop: 15,
        padding: 10,
        color: '#B8860B'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,  
        fontWeight: 'bold',  
    },
})