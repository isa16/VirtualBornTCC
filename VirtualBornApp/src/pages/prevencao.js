import React, { Component } from 'react';
import {
    Text, TouchableOpacity,
    StyleSheet, View, ImageBackground, Image, Button
} from 'react-native';


export default class Prevencao extends Component {
    render() {
        return (
            <View>
                <ImageBackground source={require('../app/imagens/fundo.jpg')} style={styles.imagemFundo} >

                    <View style={styles.fundo} >
                        <Image source={require('../app/imagens/logo.png')}
                            style={styles.logo}></Image>

                        <Text style={styles.tipo} > Pílula anticoncepcional</Text>
                        <Text style={styles.texto}>Possui hormônios que são semelhantes àqueles produzidos pelos ovários, fazendo com que a ovulação não ocorra e não exista um óvulo pronto para ser fecundado.</Text>

                        <Text style={styles.tipo} > Implante anticoncepcional </Text>
                        <Text style={styles.texto} >É um método que ajuda a prevenir a gravidez através de um pequeno tubo de plástico que é introduzido na parte interna do braço, pelo ginecologista.</Text>

                        <Text style={styles.tipo} > Dispositivo intrauterino (DIU) </Text>
                        <Text style={styles.texto}>Método contraceptivo de plástico em forma de T que é introduzido no útero pelo ginecologista e que pode permanecer durante cerca de 5 anos mantendo a sua eficácia.</Text>

                        <Text style={styles.tipo} > Camisinha </Text>
                        <Text style={styles.texto} >O preservativo é um método anticoncepcional excelente para evitar a gravidez, além de ser o único método que protege do contágio de doenças sexualmente transmissíveis.</Text>

                        <Text style={styles.tipo} > Anticoncepcional injetável </Text>
                        <Text style={styles.texto} >A injeção vai libertando lentamente hormônios que impedem a ovulação, porém o seu uso prolongado pode provocar atraso na fertilidade. Aplicado 1 vez ao mes.</Text>


                        <TouchableOpacity style={styles.botao}>
                            <Button
                                onPress={() => {
                                    this.props.navigation.navigate('Informa')
                                }}
                                title="Voltar"
                                color='#ADD8E6' />
                        </TouchableOpacity>

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
    logo: {
        alignItems: 'center',
        marginTop: 25
    },
    botao: {
        paddingVertical: 10,
        width: 150,
        height: 40,
        alignItems: 'center',
        marginLeft: 90,
        marginTop: 20
    },
    texto: {
        color: '#104E8B',
        fontSize: 12,
        marginTop: 10,
        marginLeft: 5,
        alignItems: 'baseline'
    },
    tipo: {
        color: '#104E8B',
        fontSize: 15,
        marginTop: 20,
        marginLeft: 5
    },
    fundo: {
        backgroundColor: '#BFEFFF',
        height: 640,
        marginTop: 20,
        borderRadius: 30,
        marginLeft: 10,
        marginRight: 10
    },
})