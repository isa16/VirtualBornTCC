import React, { Component } from 'react';
import {
    StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';


// computarErro(){
//     if(pressMamadeira){
//         //faz nada
//     } else {
//         //computaerro
//     } 
// }

export default class Cozinha extends Component {
    render() {
        return (
            <View>
                <View style={styles.fundo} >

                    <View style={styles.row} >

                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Informa')
                            }}>
                            <Image
                                style={styles.info}
                                source={require('../app/imagens/info.png')}
                            ></Image>
                        </TouchableOpacity>

                        <TouchableOpacity  onPress={() => {
                        this.props.navigation.navigate('Prevencao')
                    }}>
                            <Image
                                style={styles.remedio}
                                source={require('../app/imagens/remedio.png')}
                            ></Image>
                        </TouchableOpacity>


                    </View>

                    <Text onPress={() => {this.props.navigation.navigate('Teste')}} style={styles.nome}>Josué</Text>

                    <Image style={styles.imagem}
                        source={require('../app/imagens/bebe.png')} ></Image>

                    <View style={styles.row} >

                        <TouchableOpacity>
                            <Image
                                style={styles.icon}
                                source={require('../app/imagens/mamadeira.png')}
                                // onPress={() => {
                                //     this.sound.stop()
                                // }}
                            ></Image>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Banheiro')
                                
                            }}>
                            <Image
                                style={styles.icon}
                                source={require('../app/imagens/agua.png')}
                                //computa erro
                            ></Image>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Quarto')
                            }}>
                            <Image
                                style={styles.icon}
                                source={require('../app/imagens/lampada.png')}
                                //computa erro
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
        backgroundColor: '#EEDC82',
        width: '100%',
        height: '100%'
    },
    imagem: {
        width: 210,
        height: 250,
        marginLeft: 75,
        marginTop: 120
    },
    nome: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 20
    },
    remedio: {
        left: 295,
        width: 30,
        height: 30
    },
    icon: {
        width: 80,
        height: 100,
        margin: 5,
        marginTop: 110
    },
    row: {
        flexDirection: 'row'
    },
    info: {
        width: 30,
        height: 30
    }
})