import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './componentes/Login';
import RecuperarSenha from './componentes/RecuperarSenha';
import Registro from './componentes/Registro';
import TelaInicial from './componentes/TelaInicial';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="TelaInicial" component={TelaInicial} options={{ title: 'Tela Inicial' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{ title: 'Recuperar Senha' }} />
        <Stack.Screen name="Registro" component={Registro} options={{ title: 'Registro' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
