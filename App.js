import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

 function App() {
    const [request, response, promptAsync] = Google.useAuthRequest({
      clientId: '996272040634-o3cghkog6r8fpcpc3rqg67do8rsgpss1.apps.googleusercontent.com',
    });
  
    // Verifica a resposta da autenticação
    useEffect(() => {
      if (response?.type === 'success') {
        const { authentication } = response;
        Alert.alert('Login realizado!', `Token: ${authentication.accessToken}`);
        console.log(authentication);
      }
    }, [response]);
  
  return (
      <LinearGradient
        colors={["#000114", "#00032b", "#010970", "#040fd4"]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.container}
      >
        <StatusBar style='light'/>
        <Text style={styles.titleApp}>SPOBRE-FY</Text>
        

        
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
    
    titleApp: {
      position: "absolute",
      top: "35%",
      color: "white",
      fontSize: 32,
      fontWeight: "bold",
      color: "#05d8f0",
    },
    Image: {
      width: 200,
      height: 200,
      position: "absolute",
      top: "40%",
    },
  });
  



