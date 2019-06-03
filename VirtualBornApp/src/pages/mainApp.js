import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

export default class MainApp extends Component {

    render() {
        return (
            <ImageBackground source={require('../app/imagens/fundo.jpg')} opacity={0.70}
                style={styles.container}>
                    <ImageBackground source={require('../app/imagens/logo.png')}
                        style={styles.logo}></ImageBackground>
                <View style={styles.inner}>
                <View style={styles.block}>
                    <ImageBackground source={require('../app/imagens/teacher.png')}
                        style={styles.icons}></ImageBackground>
                    <TouchableOpacity style={styles.botao}

                        onPress={() => {
                            this.props.navigation.navigate('MainProf')

                        }}>
                        <Text style={styles.buttonText}>Professor</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.block}>
                    <ImageBackground source={require('../app/imagens/reading.png')}
                        style={styles.icons}></ImageBackground>
                    <TouchableOpacity style={styles.botao}

                        onPress={() => {
                            this.props.navigation.navigate('Cozinha')

                        }}>
                        <Text style={styles.buttonText}>Aluno</Text>
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
    block:{
        alignItems: 'center',
        justifyContent: 'center',
    },  
    logo: {
        width: 300,
        height: 100
    },
    icons: {
        padding: 0,
        margin: 10,
        flexDirection: 'column',
        width: 120,
        height: 120,
        textAlign: 'center',
        backgroundColor: '#D2B48C',
        borderRadius: 10,
    },
    inner: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 100,
    },
    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 170,
        height: 42,
        marginTop: 10,
        borderRadius: 50,
        backgroundColor: '#B8860B',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
    },
})