const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');

require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
module.exports = { app, auth };
