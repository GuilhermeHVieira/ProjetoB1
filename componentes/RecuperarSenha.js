import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const imageUrl = 'https://cdn.cgn.inf.br/fotos-cgn/2022/05/06175305/e66b3c89463e8e2d0c41471d2a50d105.png';

class RecuperarSenha extends Component {
  state = {
    email: '',
  };

  handleRecuperarSenha = () => {
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(email) => this.setState({ email })}
        />
        <Button
          title="Recuperar Senha"
          color="red" // Cor do texto dentro do botão
          onPress={this.handleRecuperarSenha}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Fundo preto
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, // Largura da imagem
    height: 200, // Altura da imagem
    marginBottom: 20, // Espaçamento inferior
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default RecuperarSenha;
