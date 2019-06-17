import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

export default class MainProf extends Component {
    render() {
        return (
            <ImageBackground source={require('../app/imagens/fundo.jpg')}
                style={styles.container}>
                <View style={styles.inner}>
                <Text style={styles.logo}>VirtualBorn</Text>
                <View style={styles.bloco}>
                    <TouchableOpacity style={styles.botao}

                        onPress={() => {
                            this.props.navigation.navigate('ListRela')

                        }}>
                        <Text style={styles.buttonText}>Informações</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 65,
        marginTop: 15,
        padding: 10,
        color: '#B8860B'
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
        marginTop: 150,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
})