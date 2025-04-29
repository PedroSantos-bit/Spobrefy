import { StyleSheet, Text, View, Alert, TouchableOpacity, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';


export default function ResetPassword() {
    return (
      <LinearGradient
            colors={['#2f4f4f' , '#2e8b57', '#3cb371','#3cb371', '#2f4f4f']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
          >
            <StatusBar style="light" backgroundColor="#2f4f4f" />
      
            {/* Conteúdo */}
            <View style={styles.content}>
              {/* Imagem e título fixos */}
              {/* Teria uma imagem ao invés deste comentario */}
              <Text style={styles.titleApp}>Redefina sua senha</Text>
            </View>
      
            {/* Botões */}
            <View style={styles.buttonConjunt}>
              <TouchableOpacity style={styles.buttonGoogle}>
                  <Text style={styles.textButtonGoogle}>Nova Senha</Text>
              </TouchableOpacity>
      
              <TouchableOpacity style={styles.buttonGoogle}>
                <Text style={styles.textButtonUser}>Confirmar Nova Senha</Text>
              </TouchableOpacity>
      
              {/* Botão Entrar */}
              <TouchableOpacity style={styles.buttonGoogleEnter}>
                <Text style={styles.textButtonEnter}>ALTERAR SENHA</Text>
              </TouchableOpacity>
              </View>
      
              {/* Footer Página CadastroScreen*/}
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
          color: 'white',
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
          backgroundColor: 'rgba(0,0,0,0.4)'
        },
        buttonGoogleEnter: {
          backgroundColor: 'rgba(0,0,0,0.7)',
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 20,
          width: "50%",
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