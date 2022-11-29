import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
       <Text style={styles.texto1}>Hola</Text>
    </View>
  )
}

export default HomeScreen

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
        height: '5%',
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
      },

})