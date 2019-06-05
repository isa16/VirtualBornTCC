import React, { Component } from 'react';
import api from '../services/api';

import { View, Text, ImageBackground, StyleSheet, Picker, Alert, TouchableOpacity, FlatList } from 'react-native';

export default class ListProfs extends Component {


    state = {
        docs: [],
        turma: ''
    }

    componentDidMount() {
        this.loadProfessores();
    }

    loadProfessores = async () => {
        const response = await api.get('/auth/listar');
        this.setState({ docs: response.data });

    }



    renderItem = ({ item }) => (
        <View style={styles.profContainer}>
            <Text style={styles.profTitle}>{item.nome}</Text>
            <Text style={styles.profEmail}>E-mail: {item.email}</Text>
            <Text style={styles.profSenha}>Turma: {item.turma}</Text>

            {/* <TouchableOpacity style={styles.button} onPress={() => {
                Alert.alert(
                    'Deletar',
                    `Deseja realmente deletar ${item.nome} da sua lista de professores?`,
                    [
                        {
                            text: 'Não', onPress: () =>
                                console.log('Cancel Pressed'),
                            style: 'cancel',
                        },
                        {
                            text: 'Sim', onPress: () => {
                                api.delete(`/professor/${item._id}`)
                                    .then(res => {
                                        this.loadProfessores();
                                        Alert.alert(
                                            'Pronto',
                                            'Intem deletado com sucesso'
                                        )
                                    })
                                    .catch(err => {
                                        Alert.alert(
                                            'Erro',
                                            'Não foi possível efetuar a exclusão'
                                        )
                                    })
                            }
                        }
                    ],
                    { cancelable: false }
                )

            }}>
                <Text style={styles.buttonText}>Deletar</Text>
            </TouchableOpacity> */}
        </View>
    )


    render() {
        return (
            <ImageBackground source={require('../app/imagens/fundo.jpg')}
                style={styles.container}>
                <View style={styles.inner}>
                    <Picker
                        selectedValue={this.state.turma}
                        style={styles.select}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ turma: itemValue })
                        }>
                        <Picker.Item label="Turma:" value=" " />
                        <Picker.Item label="8º ano" value="8º ano" />
                        <Picker.Item label="9º ano" value="9º ano" />
                    </Picker>

                    <FlatList
                        contentContainerStyle={styles.list}
                        data={this.state.docs}
                        keyExtractor={item => item._id}
                        renderItem={this.renderItem} />

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
    profContainer: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderRadius: 30,
        borderColor: 'rgb(100,149,237)',
        padding: 20,
        marginBottom: 20,
    },
    select: {
        backgroundColor: 'rgb(100,149,237)',
        color: "#333"
    },
    profTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
    },
    profEmail: {
        fontSize: 13,
        color: "#999",
        marginTop: 15,
        lineHeight: 24,
    },
    profSenha: {
        fontSize: 12,
        color: "#999",
        marginTop: 5,
        lineHeight: 24,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 170,
        height: 42,
        marginTop: 10,
        borderRadius: 50,
        backgroundColor: '#2089DA',
    },
    buttonText: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
    },
})