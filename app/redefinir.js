import { StyleSheet, Text, View, Alert, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';


export default function Cadastro() {
  return (
    <LinearGradient
          colors={["black", "#00032b", "#010970", "#040fd4"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.container}
        >
          <StatusBar style="light" backgroundColor="black" />
    
          {/* Conteúdo */}
          <View style={styles.content}>
            {/* Imagem e título fixos */}
            {/* Teria uma imagem ao invés deste comentario */}
            <Text style={styles.titleApp}>REDEFINIÇÃO DE SENHA</Text>
          </View>
    
          {/* Botões */}
          <View style={styles.buttonConjunt}>
            <TouchableOpacity style={styles.buttonGoogle}>
              <Text style={styles.textButtonGoogle}>Nova Senha</Text>
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.buttonGoogle}>
              <Text style={styles.textButtonUser}>Confirme sua Nova Senha</Text>
            </TouchableOpacity>
    
            {/* Botão Entrar */}
            <TouchableOpacity style={[styles.buttonGoogleEnter, { backgroundColor: "#05d8f0" }]}>
              <Text style={styles.textButtonEnter}>ENVIAR</Text>
            </TouchableOpacity>
            </View>
    
            {/* Footer Página Cadastro*/}
            <View style={styles.footer}>
              <Text style={styles.footerText}>@Todos os direitos reservados.</Text>
          </View>
        </LinearGradient>
      );
    }
      
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      },
      content: {
        alignItems: "center",
        marginTop: "20%", // Jogamos todos os itens para cima ou para baixo
        marginBottom: 30, // Controla o espaço entre a imagem e os botões
      },
      imageTitle: {
        width: 130,
        height: 130,
        marginBottom: 30,
      },
      titleApp: {
        color: "#05d8f0",
        fontSize: 30,
        fontWeight: "bold",
        top: -70
      },
      buttonConjunt: {
        width: '100%',
        alignItems: 'center',
      },
      buttonGoogle: {
        flexDirection: "row",
        alignItems: 'center',    
        backgroundColor: '#262a85',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 20,
        width: "80%",
        textAlign: 'center',
        margin: 10,
      },
      buttonGoogleEnter: {
        backgroundColor: '#262a85',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 20,
        width: "80%",
        textAlign: 'center',
        marginTop: 20,
      },
      textButtonGoogle: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
      },
      textButtonUser: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'left',
      },
      textButtonPassword: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'left',
      },
      textButtonEnter: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      textButtonRestauPass: {
        color: "#05d8f0",
        marginTop: 10,
        textAlign: 'center', 
        fontSize: 16
      },
      googleIcon:{
        width: 24,
        height: 24,
        marginRight: 10
      },
      footer: {
        position: 'absolute', // Mantém fixo no rodapé
        bottom: 0, // Sempre no final da tela
        width: '100%', // Ocupa toda a largura
        padding: 13,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Opcional: melhora a visibilidade
      },
      footerText: {
        fontSize: 14,
        color: 'white',
      },
    });      





        
