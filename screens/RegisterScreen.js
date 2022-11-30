import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, Modal, Pressable, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Checkbox from 'expo-checkbox';

const RegisterScreen = () => {
    const navigation = useNavigation();
    const [isChecked, setChecked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
        <Image style={styles.image} source={require('../img/Logo1.png')}/>
            <Text style={styles.titulo}>Registrate</Text>
            <TextInput style={styles.input} placeholder='Nombre' id='nombre'></TextInput>
            <TextInput style={styles.inputP} placeholder='Apellido Paterno' id='paterno'></TextInput>
            <TextInput style={styles.inputM} placeholder='Apellido Materno' id='materno'></TextInput>
            <TextInput style={styles.input} placeholder='ejemplo@gmail.com' id='correo'></TextInput>
            <TextInput style={styles.input} placeholder='Contraseña' id='contraseña' secureTextEntry={true}></TextInput>
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Se cerró el alert");
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.subtitulo}>Políticas de Privacidad</Text>
                    <ScrollView>
                      <Text style={styles.texto4}>
                        El presente Política de Privacidad establece los términos en que SoftQuimic usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. 
                        Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado,
                        lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento.
                      </Text>
                      <Text style={styles.texto4}>
                        Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.
                      </Text>
                      <Text style={styles.texto4}>
                        Información que es recogida
                        Nuestro sitio web podrá recoger información personal por ejemplo: Nombre,  información de contacto como  su dirección de correo electrónica e información demográfica. 
                        Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.
                      </Text>
                      <Text style={styles.texto4}>             
                        Uso de la información recogida
                        Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, 
                        de pedidos en caso que aplique, y mejorar nuestros productos y servicios.  Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, 
                        nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione 
                        y podrán ser cancelados en cualquier momento.
                        SoftQuimic está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.
                      </Text>
                      <Text style={styles.texto4}>
                        Cookies
                        Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador, 
                        al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web, 
                        y también facilita las futuras visitas a una web recurrente. Otra función que tienen las cookies es que con ellas las web pueden reconocerte individualmente 
                        y por tanto brindarte el mejor servicio personalizado de su web.
                      </Text>
                      <Text style={styles.texto4}>
                        Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia. 
                        Esta información es empleada únicamente para análisis estadístico y después la información se elimina de forma permanente. 
                        Usted puede eliminar las cookies en cualquier momento desde su ordenador. Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web, 
                        estás no dan acceso a información de su ordenador ni de usted, 
                        a menos de que usted así lo quiera y la proporcione directamente. Usted puede aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores aceptan cookies 
                        automáticamente pues sirve para tener un mejor servicio web. 
                        También usted puede cambiar la configuración de su ordenador para declinar las cookies. Si se declinan es posible que no pueda utilizar algunos de nuestros servicios.
                      </Text>
                      <Text style={styles.texto4}>
                        Enlaces a Terceros
                        Este sitio web pudiera contener en laces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y 
                        por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros. 
                        Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.
                      </Text>
                      <Text style={styles.texto4}>
                        Control de su información personal
                        En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web.  Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, 
                        puede marcar o desmarcar la opción de recibir información por correo electrónico.  En caso de que haya marcado la opción de recibir nuestro boletín o publicidad usted puede cancelarla en cualquier momento.
                        Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.
                      </Text>
                      <Text style={styles.texto4}>
                        SoftQuimic Se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.
                      </Text>
                    </ScrollView>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={styles.texto2}>Cerrar</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
              <Pressable onPress={() => setModalVisible(true)}>
                <Text style={styles.texto3}>Acepta Políticas de Privacidad</Text>
              </Pressable>
            </View>          
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
      subtitulo:{
        marginTop: 10,
        fontSize: 30,
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
      
      button2:{
        marginTop:20,
        backgroundColor: '#1C9A6D',
        alignItems: 'center',
        justifyContent:'center',
        width: '40%',
        height: '5%',
        borderRadius: 25,
      },
      
      button3:{
        marginTop:30,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 25,
      },
      checkbox:{
        marginTop:-10,
        marginRight:70
      },
      //Textos
      texto1:{
        fontSize: 15,
        textAlign: 'center',
        color: '#8F8F8F',
        marginTop: -5,
        marginLeft: 10
      },
      texto2:{
        fontSize: 20,
        textAlign: 'center',
        color: '#EEEEEE'
      },
      texto3:{
        fontSize: 15,
        textAlign: 'center',
        color: '#8F8F8F',
        marginTop: -17,
        marginLeft: 140
      },
      texto4:{
        padding: 5,
        fontSize: 17,
        textAlign: 'justify',
        color: '#8F8F8F',
        marginTop: 10
      },
      //Modal
      centeredView: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
      },
      modalView: {
        margin: 20,
        backgroundColor: '#16191C',
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})