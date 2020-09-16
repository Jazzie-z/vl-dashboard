import firebase, { auth } from "firebase/setup";
import DatabaseService from "./store.service";

class AuthService {
  registerWithEmailPass = async ({
    email,
    password,
    firstName,
    lastName,
    contact,
  }) => {
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      const user = result.user;
      //create new document for the registered user
      console.error(user);
      await new DatabaseService(user.uid).updateUserData({
        firstName,
        lastName,
        email,
      });
      return user;
    } catch (e) {
      console.error(e);
      return null;
    }
  };
  signIn = async ({ email, password }) => {
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const user = result.user;
      return user;
    } catch (e) {
      console.error(e);
      return null;
    }
  };
  signOut = async () => {
    try {
      return await auth.signOut();
    } catch (e) {
      console.error(e);
      return null;
    }
  };
}

export default AuthService;
