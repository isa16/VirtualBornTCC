import React, { Component } from 'react';
import {
    StyleSheet, View, Image, Text, TouchableOpacity, Alert
} from 'react-native';
import Sound from 'react-native-sound';

const audioTests = [
    {
        isRequire: true,
        url: require('./choro.mp3'),
    },

];

function setTestState(testInfo, component, status) {
    component.setState({ tests: { ...component.state.tests, [testInfo.title]: status } });
}

//tocar o som
function playSound(testInfo, component) {
    setTestState(testInfo, component, 'pending');

    const callback = (error, sound) => {
        if (error) {
            Alert.alert('error', error.message);
            setTestState(testInfo, component, 'fail');
            return;
        }
        setTestState(testInfo, component, 'playing');
        testInfo.onPrepared && testInfo.onPrepared(sound, component);
        sound.play(() => {
            setTestState(testInfo, component, 'win');
            sound.release();
        });
    };

    if (testInfo.isRequire) {
        const sound = new Sound(testInfo.url, error => callback(error, sound));
    } else {
        const sound = new Sound(testInfo.url, testInfo.basePath, error => callback(error, sound));
    }
}




class Cozinha extends Component {

    //trabalhar em cima disso
    // constructor() {
    //     super();

    //     GenerateRandomSong = () => {

    //         var RandomSong = sound(Math.random() * otherSounds); //vetor de sons

    //         this.setState({

    //             NumberHolder: RandomSong

    //         })
    //     }
    //     this.state = {
    //         songHolder: 'choro.mp3'
    //     }
    // }

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
                                style={styles.icons}
                                source={require('../app/imagens/info.png')}
                            ></Image>
                        </TouchableOpacity>

                        {audioTests.map(testInfo => {
                            return (
                                <Text
                                    style={styles.nome}
                                    onPress={() => {
                                        return playSound(testInfo, this);
                                    }} >Josué</Text>

                            );
                        })}



                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('Prevencao')
                        }}>
                            <Image
                                style={styles.icons}
                                source={require('../app/imagens/remedio.png')}
                            ></Image>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.container}>

                        <Image style={styles.imagem}
                            source={require('../app/imagens/bebe.png')} ></Image>

                        <View style={styles.row} >

                            <TouchableOpacity>
                                <Image
                                    style={styles.icon}
                                    source={require('../app/imagens/mamadeira.png')}
                                    onPress={() => {
                                        this.sound.stop();
                                    }}
                                ></Image>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image
                                    style={styles.icon}
                                    source={require('../app/imagens/agua.png')}
                                //computa erro
                                ></Image>
                            </TouchableOpacity>

                            <TouchableOpacity>
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
            </View>
        )
    }
}

export default Cozinha;

const styles = StyleSheet.create({
    fundo: {
        backgroundColor: '#EEDC82',
        width: '100%',
        height: '100%'
    },
    imagem: {
        width: 210,
        height: 290,
        marginLeft: 75,
        marginTop: 80
    },
    nome: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 8,
        marginLeft: 35
    },
    icon: {
        width: 80,
        height: 100,
        margin: 5,
        marginTop: 110
    },
    icons: {
        margin: 5,
        width: 30,
        height: 30,
        marginLeft: 75
    },
    row: {
        flexDirection: 'row'
    },
    container: {
        flex: 1,
    },

})