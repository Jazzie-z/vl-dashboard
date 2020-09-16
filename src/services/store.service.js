import { db } from "firebase/setup";

class DatabaseService {
  constructor(uid) {
    this.uid = uid;
  }
  updateUserData = async ({ firstName, lastName, email }) =>
    await db.collection("users").doc(this.uid).set({
      firstName,
      lastName,
      email,
    });

  addStoreItem = async (payload) =>
    await db.collection("users").doc(this.uid).collection("items").add(payload);

  updateStoreInfo = async (payload) =>
    await db.collection("users").doc(this.uid).set(payload);
}

export default DatabaseService;
