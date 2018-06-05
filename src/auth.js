// app/auth.js

import { AsyncStorage } from "react-native";

export const USER_KEY = "auth-demo-key";

export const onSignIn = () => AsyncStorage.setItem(USER_KEY, "true");

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};

export const onSignedIn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('sure'), 0);
    //resolve(`It's okay`);

  })
}

export const onSignedOut = () => {
  return new Promise((resolve, reject) => {
    resolve('a')
  })
}
