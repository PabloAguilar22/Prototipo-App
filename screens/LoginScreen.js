import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const LoginScreen = () => {
  const navigation = useNavigation();

  return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../img/Logo1.png')}/>
        <Text style={styles.titulo}>Iniciar Sesión</Text>
        <TextInput style={styles.input} placeholder='ejemplo@ejemplo.com'></TextInput>
        <TextInput style={styles.input} placeholder='Contraseña' secureTextEntry={true}></TextInput>
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("Forgot")}>
          <Text style={styles.texto1}>¿Olvidaste Tu Contraseña?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.texto2}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate("Register")}>
          <Text style={styles.texto1}>¿Todavía no tienes una cuenta? Crea una ahora</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        backgroundColor: '#16191C',
        alignItems: 'center',
        justifyContent: 'center',
      },
      titulo:{
        marginTop: 15,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#A8A8A8'
    
      },
      input:{
        fontSize: 20,
        color: '#EEEEEE',
        borderWidth: 1,
        borderColor: '#292C31',
        placeholder: '#FFFFFF',
        borderRadius: 30,
        padding: 10,
        paddingStart: 30,
        width: '80%',
        height: 50,
        marginTop: 20,
        backgroundColor: '#292C31'
      },
      image:{
        marginTop: '-10%',
        width: '34.5%',
        height: '22.5%'
      },
      button1:{
        marginTop:10,
        marginStart: 150,
        alignItems: 'center',
        justifyContent:'center',
      },
      texto1:{
        fontSize: 15,
        textAlign: 'center',
        color: '#8F8F8F'
      },
      button2:{
        marginTop:20,
        backgroundColor: '#1C9A6D',
        alignItems: 'center',
        justifyContent:'center',
        width: '40%',
        height: '6%',
        borderRadius: 25,
      },
      texto2:{
        fontSize: 20,
        textAlign: 'center',
        color: '#EEEEEE'
      },
      button3:{
        marginTop:90,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 25,
        width: '45%',
      },
})

export default LoginScreen