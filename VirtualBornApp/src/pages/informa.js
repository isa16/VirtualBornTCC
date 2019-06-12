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
                    <Text style={styles.logo}>VirtualBorn</Text>

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
        justifyContent: 'center',
        fontSize: 50,
        marginTop: 15,
        color: '#B8860B'
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
        width: 260,
        height: 45,
        margin: 10,
        borderRadius: 50,
        backgroundColor: '#B8860B',
    },
    buttonText: {
        marginTop: 4,
        color: '#FFF',
        fontSize: 20,
        opacity: 0.60
    },
    texto: {
        color: '#000',
        fontSize: 15,
        marginTop: 5,
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