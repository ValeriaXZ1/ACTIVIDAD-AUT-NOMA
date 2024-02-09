// Importar las bibliotecas necesarias
import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Crear el navegador
const Stack = createStackNavigator();

// Componente principal de la aplicación
const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Screen1">
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{ title: 'Bienvenido', headerShown: false }}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={{ title: 'División', headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

// Pantalla 1
const Screen1 = ({ navigation }) => (
  <View style={[styles.container, { backgroundColor: '#235DD1' }]}>
    <Text style={styles.titulo}>Bienvenido</Text>
    <Image
      source={require('./assets/2.jpg')}
      style={styles.imagen}
    />
    <Button title="Acceder" onPress={() => navigation.navigate('Screen2')} color ="#606368"/>
  </View>
);

// Pantalla 2
const Screen2 = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  const handleDividir = () => {
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    if (isNaN(numero1) || isNaN(numero2)) {
      setResultado('Por favor, ingrese números válidos');
    } else if (numero2 === 0) {
      setResultado('No existe división para cero');
    } else {
      setResultado(`Resultado: ${numero1 / numero2}`);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: '#F5C5FF' }]}>
      <TextInput
        style={styles.input}
        placeholder="Número 1"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        placeholder="Número 2"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />
      <Button title="Dividir" onPress={handleDividir} />
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  imagen: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  resultado: {
    fontSize: 18,
    marginTop: 16,
  },
});

export default App;