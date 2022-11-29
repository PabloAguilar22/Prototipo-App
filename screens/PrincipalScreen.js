import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const PrincipalScreen = () => {
  const navigation = useNavigation();

  return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../img/Logo1.png')}/>
        <Text style={styles.titulo}>Bienvenido</Text>
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("LoginScreen")}>
        <Text style={styles.texto}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("Register")}>
          <Text style={styles.texto}>Crear Cuenta</Text>
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
        marginTop: 50,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#A8A8A8'
      },
      image:{
        marginTop: '-50%',
        width: '34.5%',
        height: '22.5%'
      },
      button1:{
        marginTop:70,
        marginRight: 185,
        backgroundColor: '#1C9A6D',
        alignItems: 'center',
        justifyContent:'center',
        width: '40%',
        height: '6%',
        borderRadius: 25,
      },
      button2:{
        marginTop:-45,
        marginLeft: 185,
        backgroundColor: '#1C9A6D',
        alignItems: 'center',
        justifyContent:'center',
        width: '40%',
        height: '6%',
        borderRadius: 25,
      },
      texto:{
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

export default PrincipalScreen