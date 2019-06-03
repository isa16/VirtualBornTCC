import React, { Component } from 'react';
import {
    Text, TouchableOpacity,
    StyleSheet, View, ImageBackground, Image
} from 'react-native';


export default class Informa extends Component {
    render() {
        return (
            <ImageBackground source={require('../app/imagens/fundo.jpg')}
                style={styles.container} >

                <View style={styles.inner} >
                    <Image source={require('../app/imagens/logo.png')}
                        style={styles.logo}></Image>

                    <Text style={styles.titulo} >Tipo 1: </Text>
                    <Text style={styles.texto} >Quando o bebê chora emitindo o som "nhê", é o reflexo que o bebê faz para sugar.</Text>

                    <Text style={styles.titulo} >Tipo 2: </Text>
                    <Text style={styles.texto} >Quando o bebê chora emitindo o som "aa", é reflexo que o bebê tem para bocejo.</Text>

                    <Text style={styles.titulo} >Tipo 3: </Text>
                    <Text style={styles.texto} >Quando o bebê chora emitindo o som "heh", é o reflexo de desconforto</Text>

                    <Text style={styles.titulo} >Tipo 4: </Text>
                    <Text style={styles.texto} >Quando o bebê chora emitindo o som "éar", é para emitir dor.</Text>


                    <TouchableOpacity style={styles.botao}
                        onPress={() => {
                            this.props.navigation.navigate('Cozinha')
                        }}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
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
    logo: {
        alignItems: 'center',
        marginTop: 25
    },
    titulo: {
        padding: 0,
        margin: 10,
        fontSize: 20,
        color: '#000',
        alignItems: 'stretch'
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
    },
    texto: {
        color: '#000',
        fontSize: 15,
        marginTop: 10,
        marginLeft: 5,
        alignItems: 'center',
        padding: 10
    },
    inner: {
        height: 600,
        width: 350,
        backgroundColor: '#EDC271',
        borderRadius: 15,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
})