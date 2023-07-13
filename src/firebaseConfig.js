import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCh5aA05nlMLBwIIYLIiJIygkO6E38l4mk",
    authDomain: "clone-be0c2.firebaseapp.com",
    projectId: "clone-be0c2",
    storageBucket: "clone-be0c2.appspot.com",
    messagingSenderId: "248343431865",
    appId: "1:248343431865:web:d47f7fa0746fdfa9832968",
    measurementId: "G-N2J3KLSPNC"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);