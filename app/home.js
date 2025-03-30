import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TouchableOpacity, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useEffect } from 'react';
import { Link } from 'expo-router';

WebBrowser.maybeCompleteAuthSession();

function cadastro(){
  <Link href={'/cadastro'}></Link>
}
function Senha(){
  <Link href={'/redefinirSenha'}></Link>
}


function App() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '862395055773-lboub4kqa74ashkmi2tjnioi43d5n58b.apps.googleusercontent.com',
    redirectUri: 'https://auth.expo.io/@pedro223/appmusica' 
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      Alert.alert('Login realizado!', `Token: ${authentication.accessToken}`);
      console.log(authentication);
    }
  }, [response]);
  
  return (
    <LinearGradient
      colors={["#000114", "#00032b", "#010970", "#040fd4"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <StatusBar style="light" />

      {/* Conteúdo */}
      <View style={styles.content}>
        {/* Imagem e título fixos */}
        <Image
          source={require('../assets/logoSpotfy.svg')}
          style={styles.imageTitle}
        />
        <Text style={styles.titleApp}>Spobrefy</Text>
      </View>

      {/* Botões */}
      <View style={styles.buttonConjunt}>
        <TouchableOpacity style={styles.buttonGoogle} onPress={() => promptAsync()}>
          <Image source={require('../assets/google-icon.png')} style={[styles.googleIcon,{marginRight: 0}]} />
          <Text style={styles.textButtonGoogle}>Login com o Google</Text>
        </TouchableOpacity>

        <View style={styles.containerSeparator}> 
          <View style={styles.separator} />
          <Text style={styles.containerSeparatorText}>ou</Text>
          <View style={styles.separator} />
        </View>

        <TouchableOpacity style={styles.buttonGoogle}>
          <TextInput placeholder="Email ou nome de usuário" style={styles.textButtonUser} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonGoogle}>
          <TextInput placeholder="Senha" style={styles.textButtonPassword} />
        </TouchableOpacity>

        {/* Botão Entrar */}
        <TouchableOpacity style={[styles.buttonGoogleEnter, { backgroundColor: "#05d8f0" }]}>
          <Text style={styles.textButtonEnter}>ENTRAR</Text>
        </TouchableOpacity>

        {/* Links adicionais */}
        <View style={{ marginTop: 40 }}>
          <TouchableOpacity style={{alignItems: "center"}}>
            <Link href={'/redefinirSenha'}>
            <Text style={styles.textButtonRestauPass}>Esqueci minha senha.</Text>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginTop: 20, alignItems: "center" }}>
            <Link href={'/cadastro'}>
              <Text style={styles.textButtonRestauPass}>Cadastre-se!</Text>
            </Link>
          </TouchableOpacity>

          <Text style={{color: "#F7F7F7", marginTop: 100, fontWeight: 400,}} >@Todos os direitos reservados.</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    marginTop: "30%", // Jogamos todos os itens para cima ou para baixo
    marginBottom: 30, // Controla o espaço entre a imagem e os botões
  },
  imageTitle: {
    width: 230,
    height: 130,
    marginBottom: 30,
  },
  titleApp: {
    color: "#05d8f0",
    fontSize: 32,
    fontWeight: "bold",
  },
  buttonConjunt: {
    width: '100%',
    alignItems: 'center',
  },
  buttonGoogle: {
    width: "80%",
    flexDirection: "row",
    alignItems: 'center',   
    justifyContent: "center",
    backgroundColor: '#262a85',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,    
    margin: 10,
    borderWidth: 0,

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
    flex: 1,
    borderWidth: 0,
    backgroundColor: 'transparent',
    paddingVertical: 5,
    outlineStyle: 'none',
  },
  textButtonPassword: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'left',
    flex: 1,  borderWidth: 0,
    backgroundColor: 'transparent',
    paddingVertical: 5,
    outlineStyle: 'none',    
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
    fontSize: 16,
  },
  googleIcon:{
    width: 24,
    height: 24,
    marginRight: 10
  },
  containerSeparator: {
    width: "78%",
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  separator: {
    height: 3,
    backgroundColor: "#F7F7F7",
    flex: 1,
  },
  containerSeparatorText: {
    color: "#F7F7F7",
    fontSize: 20,
    fontWeight: "400",
  },
});
