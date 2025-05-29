
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

/**
  Registra um novo usuário no Firebase Authentication.
  @param {string} email - O e-mail do usuário.
  @param {string} password - A senha do usuário.
  @param {string} [username] - O nome de usuário a ser salvo no perfil.
  @returns {Promise<Object>} - O objeto userCredential do Firebase em caso de sucesso.
  @throws {Error} - Lança um erro se o registro falhar.
 */
export const registerUser = async (email, password, username = '') => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);

    if (username) {
      await userCredential.user.updateProfile({ displayName: username });
    }
    return userCredential;
  } catch (error) {
    let errorMessage = "Ocorreu um erro desconhecido.";
    if (error.code) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = "Este e-mail já está em uso.";
          break;
        case 'auth/invalid-email':
          errorMessage = "Formato de e-mail inválido.";
          break;
        case 'auth/weak-password':
          errorMessage = "A senha é muito fraca. Deve ter pelo menos 8 caracteres.";
          break;
        case 'auth/operation-not-allowed':
          errorMessage = "A autenticação por e-mail/senha não está ativada.";
          break;
        default:
          errorMessage = `Erro de autenticação: ${error.message}`;
          break;
      }
    }
    // Lança um novo erro
    throw new Error(errorMessage);
  }
};

/**
 * Autentica um usuário existente no Firebase Authentication.
  @param {string} email - O e-mail do usuário.
  @param {string} password - A senha do usuário.
  @returns {Promise<Object>} - O objeto userCredential do Firebase em caso de sucesso.
  @throws {Error} - Lança um erro se o login falhar.
 */
export const signInUser = async (email, password) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    return userCredential;
  } catch (error) {
    let errorMessage = "Ocorreu um erro desconhecido.";
    if (error.code) {
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = "Formato de e-mail inválido.";
          break;
        case 'auth/user-disabled':
          errorMessage = "Esta conta de usuário foi desativada.";
          break;
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          errorMessage = "E-mail ou senha incorretos.";
          break;
        default:
          errorMessage = `Erro de autenticação: ${error.message}`;
          break;
      }
    }
    throw new Error(errorMessage);
  }
};

/**
 * Desloga o usuário atual do Firebase Authentication.
  @returns {Promise<void>}
 */
export const signOutUser = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    Alert.alert("Erro ao Sair", "Não foi possível desconectar. Tente novamente.");
    console.error("Erro ao fazer logout:", error);
  }
};