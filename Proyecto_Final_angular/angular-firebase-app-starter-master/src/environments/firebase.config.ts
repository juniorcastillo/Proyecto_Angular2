
import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
  apiKey: "AIzaSyDlrsfGzNm0wnPBwNf89yvoRtO_fqEr694",
  authDomain: "db-project-a161c.firebaseapp.com",
  databaseURL: "https://db-project-a161c.firebaseio.com",
  storageBucket: "db-project-a161c.appspot.com",
  messagingSenderId: "763891568139"
};



export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};
