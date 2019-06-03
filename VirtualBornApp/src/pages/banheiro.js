import React, { Component } from 'react';
import {
    StyleSheet, View, Image, Text, TouchableOpacity, Alert
} from 'react-native';

export default class Banheiro extends Component {
    render() {
        return (
            <View>
                <View style={styles.fundo} >

                    <Text style={styles.nome}>Josué</Text>


                    <Image style={styles.chuveiro}
                        source={require('../app/imagens/chuveiro.png')} ></Image>


                    <Image style={styles.imagem}
                        source={require('../app/imagens/bebe.png')} ></Image>


                    <View style={styles.row} >

                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Cozinha')
                            }}>
                            <Image
                                style={styles.icon}
                                source={require('../app/imagens/mamadeira.png')}
                            ></Image>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                                style={styles.icon}
                                source={require('../app/imagens/agua.png')}
                            ></Image>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Quarto')
                            }}>
                            <Image
                                style={styles.icon}
                                source={require('../app/imagens/lampada.png')}
                            ></Image>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Relatorio')
                            }}>
                            <Image
                                style={styles.icon}
                                source={require('../app/imagens/clipboard.png')}
                            ></Image>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    fundo: {
        backgroundColor: '#4682B4',
        width: '100%',
        height: '100%'
    },
    imagem: {
        width: 210,
        height: 270,
        marginLeft: 75,
        marginTop: 20
    },
    nome: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20,
        color: 'white'
    },
    icon: {
        width: 80,
        height: 100,
        margin: 5,
        marginTop: 75
    },
    row: {
        flexDirection: 'row'
    },
    chuveiro: {
        marginTop: 30,
        width: 150,
        height: 150
    }
})