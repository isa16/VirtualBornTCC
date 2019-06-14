import React, { Component } from 'react';
import {
    StyleSheet, View, Image, Text, TouchableOpacity, Alert
} from 'react-native';
import Sound from 'react-native-sound';

class Cozinha extends Component {

    constructor(props) {
        super(props);

        Sound.setCategory("Playback", true);

        this.state = {
            tests: {},
        };
    }

    setTestState = (testInfo, status) => {
        this.setState({ tests: { ...this.state.tests, [testInfo.title]: status } });
    }

    //tocar o primeiro choro
    playSound1 = (testInfo) => {
        this.setTestState(testInfo, 'pending');

        const callback = (error) => {
            if (error) {
                Alert.alert('error', error.message);
                this.setTestState(testInfo, 'fail');
                return;
            }
            this.setTestState(testInfo, 'playing');


            testInfo.onPrepared && testInfo.onPrepared(this.sound);
            this.sound.play(() => {

                this.setTestState(testInfo, 'win');

                this.sound.release();
            });
        };

        if (testInfo.isRequire) {
            this.sound = new Sound(testInfo.url, error => callback(error));
        } else {
            this.sound = new Sound(testInfo.url, testInfo.basePath, error => callback(error));
        }

    }

    //tocar segundo choro
    playSound2 = (testInfo) => {
        this.setTestState(testInfo, 'pending');

        const callback = (error) => {
            if (error) {
                Alert.alert('error', error.message);
                this.setTestState(testInfo, 'fail');
                return;
            }
            this.setTestState(testInfo, 'playing');

            testInfo.onPrepared && testInfo.onPrepared(this.sound);
            this.sound.play(() => {

                this.setTestState(testInfo, 'win');

                this.sound.release();
            });
        };

        if (testInfo.isRequire) {
            this.sound = new Sound(testInfo.url2, error => callback(error));
        } else {
            this.sound = new Sound(testInfo.url2, testInfo.basePath, error => callback(error));
        }

    }

    //tocar terceiro choro
    playSound3 = (testInfo) => {
        this.setTestState(testInfo, 'pending');

        const callback = (error) => {
            if (error) {
                Alert.alert('error', error.message);
                this.setTestState(testInfo, 'fail');
                return;
            }
            this.setTestState(testInfo, 'playing');

            testInfo.onPrepared && testInfo.onPrepared(this.sound);

            this.sound.play(() => {
                this.setTestState(testInfo, 'win');

                this.sound.release();
            });
        };

        if (testInfo.isRequire) {
            this.sound = new Sound(testInfo.url3, error => callback(error));
        } else {
            this.sound = new Sound(testInfo.url3, testInfo.basePath, error => callback(error));
        }

    }

    //parar qualquer choro
    handleStopSound = () => {

        this.sound.stop();
    }

    GetSoundFile = () => {
        return this.sound._filename.split("?")[0].split("/").slice(-1)[0];
    }

    //função randomica para gerar choros aleatorios
    randomSound = () => {
        const random = Math.floor((Math.random() * 3) + 1)

        if (random == 0) {
            random++
        } else if (random == 1) {
            this.playSound1({
                isRequire: true,
                url: require('./choro.mp3'),
            });
        } else
            if (random == 2) {
                this.playSound2({
                    isRequire: true,
                    url2: require('./choro2.mp3'),
                });
            } else
                if (random == 3) {
                    this.playSound3({
                        isRequire: true,
                        url3: require('./choro3.mp3'),
                    });
                } else {
                    console.log(error)
                }

        console.warn(random)
    }

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

                        <Text
                            style={styles.nome}
                            onPress={() => {
                                return this.randomSound();
                            }}>Josué</Text>


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

                            <TouchableOpacity onPress={() => {
                                if (this.GetSoundFile() == "choro.mp3") {

                                    return this.handleStopSound()
                                }
                            }}>
                                <Image
                                    style={styles.icon}
                                    source={require('../app/imagens/mamadeira.png')}
                                ></Image>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                if (this.GetSoundFile() == "choro2.mp3") {

                                    return this.handleStopSound()
                                }
                            }} >
                                <Image
                                    style={styles.icon}
                                    source={require('../app/imagens/agua.png')}

                                ></Image>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                if (this.GetSoundFile() == "choro3.mp3") {

                                    return this.handleStopSound()
                                }
                            }} >
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
        height: 300,
        marginLeft: 75,
        marginTop: 100
    },
    nome: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 8,
        marginLeft: 40,
        color: '#000'
    },
    stop: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 25,
        marginLeft: 35
    },
    icon: {
        width: 50,
        height: 62,
        margin: 20,
        marginTop: 110
    },
    icons: {
        margin: 3,
        width: 30,
        height: 30,
        marginLeft: 70
    },
    row: {
        flexDirection: 'row',
        marginTop: 20
    },
    container: {
        flex: 1,
    },

})