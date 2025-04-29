import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';



export default function RedefinirScreen() {
    return (
      <LinearGradient
        colors={['#2f4f4f' , '#2e8b57', '#3cb371','#3cb371', '#2f4f4f']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
      >
        
        <StatusBar style="light"  backgroundColor="#2f4f4f" />
  
        <Image
          source={require('../assets/IconeApp.png')}
          style={styles.imageTitle}
        />
  
        {/* Conteúdo */}
        <View style={styles.content}>
          <Text style={styles.titleApp}>Redefina sua senha</Text>
        </View>
  
        {/* Botões */}
        <View style={styles.buttonConjunt}>
          <TouchableOpacity style={styles.buttonGoogle}>
            <Text style={styles.textButtonGoogle}>E-mail</Text>
          </TouchableOpacity>
  
          {/* Botão Enviar */}
          <TouchableOpacity style={styles.buttonGoogleEnter}>
            <Text style={styles.textButtonEnter}>CRIAR CONTA</Text>
          </TouchableOpacity>
  
          <Link href={'/ResetPassword'} style={{color: 'white'}}>BOTÃO IMPROVISADO PARA TESTAR A TELA DE NOVA SENHA 'REFEFINIR'</Link>
  
          {/* Mensagem de sucesso */}
          <Text style={styles.message}>Insira o endereço de e-mail vinculado à sua conta do Soft para receber um e-mail de redefinição de senha.
          Caso não encontre na caixa de entrada, confira também sua caixa de spam ou lixeira.</Text>
        </View>
  
        {/* Rodapé */}
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
      marginTop: "10%", // Jogamos todos os itens para cima ou para baixo
      marginBottom: 30, // Controla o espaço entre a imagem e os botões
    },
    imageTitle: {
      width: 130,
      height: 130,
      marginBottom: 30,
    },
    titleApp: {
      color: 'white',
      fontSize: 25,
      fontWeight: "bold",
      top: -20
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
      backgroundColor: 'rgba(0,0,0,0.4)'
    },
    buttonGoogleEnter: {
      backgroundColor: '#262a85',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 20,
      width: "45%",
      textAlign: 'center',
      marginTop: 20,
      backgroundColor: 'rgba(0,0,0,0.7)'
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
      color: 'white',
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
    message:{
      color: "white",
      top: 50,
      textAlign: 'center',
      fontStyle: 'italic',
      width: "95%"
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