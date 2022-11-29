import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Checkbox from 'expo-checkbox';


const RegisterScreen = () => {
    const navigation = useNavigation();
    const [isChecked, setChecked] = useState(false);

    return (
        <View style={styles.container}>
        <Image style={styles.image} source={require('../img/Logo1.png')}/>
            <Text style={styles.titulo}>Registrate</Text>
            <TextInput style={styles.input} placeholder='Nombre' id='nombre'></TextInput>
            <TextInput style={styles.inputP} placeholder='Apellido Paterno' id='paterno'></TextInput>
            <TextInput style={styles.inputM} placeholder='Apellido Materno' id='materno'></TextInput>
            <TextInput style={styles.input} placeholder='ejemplo@gmail.com' id='correo'></TextInput>
            <TextInput style={styles.input} placeholder='Contraseña' id='contraseña' secureTextEntry={true}></TextInput>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} /><Text style={styles.texto3}>Acepta Términos y Condiciones</Text>    
            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.texto2}>Registrarse</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.texto1}>¿Ya tienes una cuenta?</Text>
            </TouchableOpacity>
        </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        backgroundColor: '#16191C',
        alignItems: 'center',
        justifyContent: 'center',
      },
      titulo:{
        marginTop: 10,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#A8A8A8'
    
      },
      input:{
        fontSize: 20,
        color: '#EEEEEE',
        borderWidth: 1,
        borderColor: '#292C31',
        borderRadius: 30,
        padding: 10,
        paddingStart: 30,
        width: '80%',
        height: 50,
        marginTop: 20,
        backgroundColor: '#292C31'
      },
      inputP:{
        fontSize: 20,
        color: '#EEEEEE',
        borderWidth: 1,
        borderColor: '#292C31',
        borderRadius: 30,
        padding: 10,
        paddingStart: 19,
        width: '38%',
        height: 50,
        marginTop: 20,
        marginEnd: '43%',
        backgroundColor: '#292C31'
      },
      inputM:{
        fontSize: 20,
        color: '#EEEEEE',
        borderWidth: 1,
        borderColor: '#292C31',
        borderRadius: 30,
        padding: 10,
        paddingStart: 15,
        width: '38%',
        height: 50,
        marginTop: '-12%',
        marginStart: '43%',
        backgroundColor: '#292C31'
      },
      image:{
        marginTop: '0%',
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
        color: '#8F8F8F',
        marginTop: -5,
        marginLeft: 10
      },
      button2:{
        marginTop:20,
        backgroundColor: '#1C9A6D',
        alignItems: 'center',
        justifyContent:'center',
        width: '40%',
        height: '5%',
        borderRadius: 25,
      },
      texto2:{
        fontSize: 20,
        textAlign: 'center',
        color: '#EEEEEE'
      },
      button3:{
        marginTop:30,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 25,
      },
      checkbox:{
        marginTop:10,
        marginRight:70
      },
      texto3:{
        fontSize: 15,
        textAlign: 'center',
        color: '#8F8F8F',
        marginTop: -18,
        marginLeft: 140
      }
})
