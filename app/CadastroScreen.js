import { StyleSheet, Text, View, Alert, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';


export default function CadastroScreen() {
    return (
      <LinearGradient
            colors={['#2f4f4f' , '#2e8b57', '#3cb371','#3cb371', '#2f4f4f']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
          >
            <StatusBar style="light" backgroundColor="#2f4f4f"/>
      
            {/* Conteúdo */}
            <View style={styles.content}>
              {/* Imagem e título fixos */}
              <Image
                source={require('../assets/IconeApp.png')}
                style={styles.imageTitle}
              />
              <Text style={styles.titleApp}>Cadastre-se e curta suas músicas favoritas</Text>
            </View>
      
            {/* Botões */}
            <View style={styles.buttonConjunt}>
              <TouchableOpacity style={styles.buttonGoogle}>
                <Text style={styles.textButtonGoogle}>E-mail</Text>
              </TouchableOpacity>
      
              <TouchableOpacity style={styles.buttonGoogle}>
                <Text style={styles.textButtonUser}>Nome de usuário</Text>
              </TouchableOpacity>
      
              <TouchableOpacity style={styles.buttonGoogle}>
                <Text style={styles.textButtonPassword}>Senha</Text>
              </TouchableOpacity>
      
              {/* Botão Entrar */}
              <TouchableOpacity style={styles.buttonGoogleEnter}>
                <Text style={styles.textButtonEnter}>CRIAR CONTA</Text>
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
          marginTop: "0%", // Jogamos todos os itens para cima ou para baixo
          marginBottom: 30, // Controla o espaço entre a imagem e os botões
        },
        imageTitle: {
          width: 130,
          height: 130,
          marginBottom: 30,
          top: -20
        },
        titleApp: {
          color: 'white',
          fontSize: 17.6,
          fontWeight: "bold",
          top: -15
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
          backgroundColor: 'rgba(0,0,0,0.7)',
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 20,
          width: "45%",
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