import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TelaInicial = () => {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const goToRecuperarSenha = () => {
    navigation.navigate('RecuperarSenha');
  };

  const goToRegistro = () => {
    navigation.navigate('Registro');
  };

  const imageUrl = 'https://cdn.cgn.inf.br/fotos-cgn/2022/05/06175305/e66b3c89463e8e2d0c41471d2a50d105.png';

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.text}>
        Seja bem vindo a tela inicial, aproveite as novidades sobre o seu time!
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={goToLogin} color="red" />
        <View style={styles.buttonSpacing}></View>
        <Button title="Registro" onPress={goToRegistro} color="red" />
        <View style={styles.buttonSpacing}></View>
        <Button title="Recuperar Senha" onPress={goToRecuperarSenha} color="red" />
      </View>
    </View>
  );
};

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
  text: {
    fontSize: 20,
    color: 'white', // Letras brancas
    textAlign: 'center', // Centraliza o texto
    marginTop: 20, // Espaçamento superior
    marginBottom: 20, // Espaçamento inferior
  },
  buttonContainer: {
    marginTop: 10, // Espaçamento entre os botões
    borderRadius: 10, // Arredondamento dos botões
  },
  buttonSpacing: {
    height: 10, // Espaçamento entre os botões
  },
});

export default TelaInicial;
