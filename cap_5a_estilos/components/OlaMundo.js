import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import estilos from '../estilos/Estilos';


class OlaMundo extends React.Component {
    render() {
        return (
        <View>
        <Text>Olá</Text>
        <Text style={estilos.texto}>{this.props.nome}</Text>
        </View>
        )
    }
}


export default OlaMundo;