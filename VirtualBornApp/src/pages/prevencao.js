import React, { Component } from 'react';
import {
    Text, TouchableOpacity,
    StyleSheet, View, ImageBackground, Button, ScrollView
} from 'react-native';


export default class Prevencao extends Component {
    render() {
        return (
            <View>
                <ImageBackground source={require('../app/imagens/fundo.jpg')} style={styles.imagemFundo} >

                    <View style={styles.inner} >
                        <Text style={styles.logo}>VirtualBorn</Text>
                        <ScrollView >
                            <View style={styles.view}>
                                <Text style={styles.titulo} > Pílula anticoncepcional</Text>
                                <Text style={styles.texto}>Possui hormônios que são semelhantes aos produzidos pelos ovários, fazendo com que a ovulação não ocorra e não exista um óvulo pronto para ser fecundado.</Text>

                                <Text style={styles.titulo} > Implante anticoncepcional </Text>
                                <Text style={styles.texto} >É um método que ajuda a prevenir a gravidez através de um pequeno tubo de plástico que é introduzido na parte interna do braço, pelo ginecologista.</Text>

                                <Text style={styles.titulo} > Dispositivo intrauterino (DIU) </Text>
                                <Text style={styles.texto}>Método contraceptivo de plástico em forma de T que é introduzido no útero pelo ginecologista e que pode permanecer durante cerca de 5 anos mantendo a sua eficácia.</Text>

                                <Text style={styles.titulo} > Camisinha </Text>
                                <Text style={styles.texto} >O preservativo é um método anticoncepcional excelente para evitar a gravidez, além de ser o único método que protege do contágio de doenças sexualmente transmissíveis.</Text>

                                <Text style={styles.titulo} > Anticoncepcional injetável </Text>
                                <Text style={styles.texto} >A injeção vai libertando lentamente hormônios que impedem a ovulação, porém o seu uso prolongado pode provocar atraso na fertilidade. Aplicado 1 vez ao mes.</Text>


                                <TouchableOpacity style={styles.botao}

                                    onPress={() => {
                                        this.props.navigation.navigate('Cozinha')
                                    }} >
                                    <Text style={styles.buttonText}>Voltar</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>

                </ImageBackground>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    imagemFundo: {
        width: '100%',
        height: '100%'
    },
    view: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 50,
        marginLeft: 25,
        marginTop: 15,
        padding: 10,
        color: '#B8860B'
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
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    texto: {
        color: '#000',
        fontSize: 15,
        marginTop: 5,
        padding: 5,
        marginLeft: 5,
        alignItems: 'baseline'
    },
    titulo: {
        padding: 0,
        margin: 10,
        fontSize: 20,
        color: '#B8860B',
        alignItems: 'stretch',
    },
    inner: {
        backgroundColor: '#EDC271',
        height: 640,
        marginTop: 20,
        borderRadius: 30,
        marginLeft: 10,
        marginRight: 10
    },
})