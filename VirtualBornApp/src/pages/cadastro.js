import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import api from '../services/api';
import { View, Text, TextInput, Picker, ScrollView, ImageBackground, StyleSheet, Alert, TouchableOpacity } from 'react-native';

export default class Cadastro extends Component {

    state = {
        nome: '',
        nomeB: '',
        email: '',
        senha: '',
        tipoU: '',
        sexo: '',
        turma: '',
        turmaP: '',
        etniaM: '',
        etniaP: '',
        corOlhoM: '',
        corOlhoP: '',
        corCabeloM: '',
        corCabeloP: '',
    }

    handleNextPage() {
        this.props.navigation.navigate('MainProf')
    }

    handleNextPageAluno() {
        this.props.navigation.navigate('Cozinha')
    }

    handleAlert() {
        Alert.alert(
            'Pronto',
            'Cadastro realizado com sucesso',
        )
    }

    handleCriar = async () => {
        const { email, password, tipoU, nome } = this.state;

        if (email === '' || password === '' || tipoU === '' || nome === '')
            return alert("Há campos obrigatórios em branco")
        try {
            const response = await api.post('/auth/register', {
                nome: this.state.nome,
                email: this.state.email,
                password: this.state.password,
                tipoU: this.state.tipoU,
                turmaP: this.state.turmaP,
                sexo: this.state.sexo,
                turma: this.state.turma,
                nomeB: this.state.nomeB,
                etniaM: this.state.etniaM,
                etniaP: this.state.etniaP,
                corOlhoM: this.state.corOlhoM,
                corOlhoP: this.state.corOlhoP,
                corCabeloM: this.state.corCabeloM,
                corCabeloP: this.state.corCabeloP,
            })
            await AsyncStorage.setItem('nomeB', `${this.state.nomeB}`)
            this.handleAlert()
            await AsyncStorage.setItem('token', `${response.data.token}`)
            if (response.data.user.tipoU === 'Professor') {

                this.handleNextPage();
            } else {
                this.handleNextPageAluno();
            }

        } catch (err) {
            return Alert.alert('Erro',
                'Ocorreu um erro no cadastro')
        }

    }
    renderTipo() {
        if (this.state.tipoU == "Aluno")
            return (

                <ScrollView>

                    <Text style={styles.titulo}>Cadastro do Aluno</Text>
                    <Picker
                        selectedValue={this.state.tipoU}
                        style={styles.select}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ tipoU: itemValue })
                        }>
                        <Picker.Item label="Professor" value=" " />
                        <Picker.Item label="Professor" value="Professor" />
                        <Picker.Item label="Aluno" value="Aluno" />
                    </Picker>

                    <TextInput style={styles.input}
                        placeholder="Nome Completo"
                        underlineColorAndroid='#F9E0B8'
                        placeholderTextColor="#363636"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={this.state.nome}
                        onChangeText={text => this.setState({ nome: text })} />
                    <TextInput style={styles.input}
                        underlineColorAndroid='#F9E0B8'
                        placeholderTextColor="#363636"
                        placeholder="E-mail"
                        value={this.state.email}
                        onChangeText={text => this.setState({ email: text })} />
                    <TextInput secureTextEntry={true}
                        style={styles.input}
                        underlineColorAndroid='#F9E0B8'
                        placeholderTextColor="#363636"
                        placeholder="Senha"
                        autoCapitalize="none"
                        value={this.state.password}
                        onChangeText={text => this.setState({ password: text })} />
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid='#F9E0B8'
                        placeholderTextColor="#363636"
                        placeholder="Sexo"
                        autoCapitalize="none"
                        value={this.state.sexo}
                        onChangeText={text => this.setState({ sexo: text })} />

                    <Picker
                        selectedValue={this.state.turma}
                        style={styles.select}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ turma: itemValue })
                        }>
                        <Picker.Item label="Turma:" value="" />
                        <Picker.Item label="8º ano" value="8º ano" />
                        <Picker.Item label="9º ano" value="9º ano" />
                    </Picker>
                    {this.renderBebe()}
                    <TouchableOpacity style={styles.botao}

                        onPress={() => {
                            this.handleCriar()
                            this.handleAlert()
                            this.handleNextPage()

                        }}>
                        <Text style={styles.buttonText}>Cadastrar</Text>

                    </TouchableOpacity>

                </ScrollView>
            )
        return (
            <ScrollView>
                <Text style={styles.titulo}>Cadastro do Professor</Text>
                <Picker
                    selectedValue={this.state.tipoU}
                    style={styles.select}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ tipoU: itemValue })
                    }>
                    <Picker.Item label="Selecione:" value=" " />
                    <Picker.Item label="Professor" value="Professor" />
                    <Picker.Item label="Aluno" value="Aluno" />
                </Picker>
                <TextInput style={styles.input}
                    placeholder="Nome Completo"
                    underlineColorAndroid='#F9E0B8'
                    placeholderTextColor="#363636"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={this.state.nome}
                    onChangeText={text => this.setState({ nome: text })} />
                <TextInput style={styles.input}
                    underlineColorAndroid='#F9E0B8'
                    placeholderTextColor="#363636"
                    placeholder="E-mail"
                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })} />
                <TextInput secureTextEntry={true}
                    style={styles.input}
                    underlineColorAndroid='#F9E0B8'
                    placeholderTextColor="#363636"
                    placeholder="Senha"
                    autoCapitalize="none"
                    value={this.state.password}
                    onChangeText={text => this.setState({ password: text })} />
                <TextInput
                    style={styles.input}
                    underlineColorAndroid='#F9E0B8'
                    placeholderTextColor="#363636"
                    placeholder="Turma"
                    autoCapitalize="none"
                    value={this.state.turmaP}
                    onChangeText={text => this.setState({ turmaP: text })} />

                <TouchableOpacity style={styles.botao}

                    onPress={() => {
                        this.handleCriar()


                    }}>
                    <Text style={styles.buttonText}>Cadastrar</Text>

                </TouchableOpacity>
            </ScrollView>

        )


    }

    renderBebe() {
        if (this.state.turma == "8º ano" || this.state.turma == "9º ano") {
            return (
                <ScrollView>
                    <Text style={styles.titulo}>Cadastro do Bebê</Text>
                    <TextInput style={styles.input}
                        placeholder="Nome do Bebê"
                        underlineColorAndroid='#F9E0B8'
                        placeholderTextColor="#363636"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={this.state.nomeB}
                        onChangeText={text => this.setState({ nomeB: text })}
                        
                    />
                    <Text style={styles.titulo}>Características da Mãe</Text>
                    <TextInput style={styles.input}
                        underlineColorAndroid='#F9E0B8'
                        placeholderTextColor="#363636"
                        placeholder="Etnia"
                        value={this.state.etniaM}
                        onChangeText={text => this.setState({ etniaM: text })} />
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid='#F9E0B8'
                        placeholderTextColor="#363636"
                        placeholder="Cor dos Olhos"
                        autoCapitalize="none"
                        value={this.state.corOlhoM}
                        onChangeText={text => this.setState({ corOlhoM: text })} />
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid='#F9E0B8'
                        placeholderTextColor="#363636"
                        placeholder="Cor do Cabelo"
                        autoCapitalize="none"
                        value={this.state.corCabeloM}
                        onChangeText={text => this.setState({ corCabeloM: text })} />

                    <Text style={styles.titulo}>Características da Pai</Text>
                    <TextInput style={styles.input}
                        underlineColorAndroid='#F9E0B8'
                        placeholderTextColor="#363636"
                        placeholder="Etnia"
                        value={this.state.etniaP}
                        onChangeText={text => this.setState({ etniaP: text })} />
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid='#F9E0B8'
                        placeholderTextColor="#363636"
                        placeholder="Cor dos Olhos"
                        autoCapitalize="none"
                        value={this.state.corOlhoP}
                        onChangeText={text => this.setState({ corOlhoP: text })} />
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid='#F9E0B8'
                        placeholderTextColor="#363636"
                        placeholder="Cor do Cabelo"
                        autoCapitalize="none"
                        value={this.state.corCabeloP}
                        onChangeText={text => this.setState({ corCabeloP: text })} />
                </ScrollView>
            )
        }
    }
    render() {
        return (
            <ImageBackground source={require('../app/imagens/fundo.jpg')}
                style={styles.container}>

                <View style={styles.inner}>
                    <ScrollView>
                        <Text style={styles.titulo1}>VirtualBorn</Text>
                        {this.renderTipo(this.state.tipoU)}
                    </ScrollView>
                </View>
            </ImageBackground>
        )
    }

}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        padding: 0,
        margin: 10,
        fontSize: 20,
    },
    titulo1: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 45,
        marginTop: 15,
        padding: 10,
        color: '#B8860B'
    },

    inner: {
        height: 650,
        width: 300,
        backgroundColor: '#EDC271',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',

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
        marginTop: 20,
        color: '#000',
        fontSize: 15,
        opacity: 0.60,
        fontWeight: 'bold',
    },
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
    select: {
        width: 270,
        height: 55,
        marginTop: 20,
        margin: 5,
        padding: 20,
        backgroundColor: '#FAD195',
        justifyContent: 'center',
        alignItems: 'center',
    },
})