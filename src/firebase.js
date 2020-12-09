import firebase, { initializeApp } from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCHSobJMZV0eHiTC086zqNPQK_nwjqtspg",
  authDomain: "idobatakaigi-date.firebaseapp.com",
  databaseURL: "https://idobatakaigi-date-default-rtdb.firebaseio.com",
  projectId: "idobatakaigi-date",
  storageBucket: "idobatakaigi-date.appspot.com",
  messagingSenderId: "781302581647",
  appId: "1:781302581647:web:86251720c4de7fdf1c63fa"
};
//ファイアベースの初期化
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const messageRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messageRef.push({ name, text })
}