/* const admin = require('firebase-admin');

const {
  URL_DB,
  FIREBASE_TYPE,
  FIREBASE_PROJECT_ID,
  FIREBASE_PRIVATE_KEY_ID,
  FIREBASE_PRIVATE_KEY,
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_CLIENT_ID,
  FIREBASE_AUTH_URI,
  FIREBASE_TOKEN_URI,
  FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  FIREBASE_CLIENT_X509_CERT_URL} = require('./variablesConfig');

 serviceAccount = {
  "type": FIREBASE_TYPE,
  "project_id": FIREBASE_PROJECT_ID,
  "private_key_id": FIREBASE_PRIVATE_KEY_ID,
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDKdIvsBEnP19pY\naQZ5hU4o4/tg9lw8NjAo/MaXRd6BMjM48LiVawKdXjNMdj13t2aadgVeH0G7Og/L\nCcid6L9Vln3a/jjCf6Hg0rsFpB2bHs76HHe5hgOjMk6F0EKyrzkTsNb+hX2XB9SG\nHSZhy9xPncLMnuQIqMW8sI0dIJvC4N5sD9DKK3Z8G4qAzIEL5lhKin3Y7NVhiwR+\n86lertmTYLB8aec9eVfBuadlBXMckfh3wBz3kXI225m6jSsOOMbdo9jd504nbgKR\nzisdSEuytOc/h7jczqSCXlaIaH5GU869fRhlH7eukfq48/JhdYyNx6pwKjhSsy5r\nGxZ2UnQ/AgMBAAECggEAAr/WbpwYTIRH6M90UQ4oY5HFBioSUpcBzGyyXbeLMAH4\nhBtwxkavwGdZFv68EvYgpJRZuk9+WwaM1FsLqGlSv9zNVL4DE1EcZ6s08vypkkO2\n19qvHYveXMcAHf0YCskqY0QRh19Ut0pZ7oBS1x0nnsUrsg+uVRfFp6xWHkElHF5f\nNTsavdddN5TCvM4IJT2KswIqifzoS/BDmt5N42s7q8ze+cvg2X2FsTIqg0y0sjjq\n/fFirOkXYS5vceG31X0RwlHYSkgvu7Z7goSki1XRypkGVOSuZkahvuXbjyI1K0QP\n9V2r4mvqivwTuIXOjTIeMnVSweM+5eNsmasou1rB4QKBgQDxZ698cygyAMmMmaLT\nYW5wS4L0++yMu8BJCHj6qPXY8VNndK6sc35KwHGVTNlJ6/kCwM+o3sTJhqh+7NjR\nhOs/GzYItEZMm2OuZUurdkdceiqRD9FhloJrnN/s0ixaB7qZLwzvUHojsgZ5KEyN\nOuEu9QUfHPKUeLc/JFd7DsCcRwKBgQDWsgVxaD2kSCBtDqLKEGIQG4tnc+JJjgtL\niFbMIPpFXpaN3zdN9HHLN2YRrD6SMwJ2VHUqYDOM/xD7pazz8Jf1PRPk1hN7iRoV\nwXav+3ceRhzEFq8Q0KTPLhfhqRIPHE1+yBKa9aOTJu/6M5gg+qpmoq18BPpvLLtc\n1zqTM/D8SQKBgQDKRJZFMDf9rasyo4hKlNh0PtD7dBo/0RDMIM09OVTE8W9wv9Ob\nqymmeJizADEQPyflpqhYVk+Mi8eikdEZvMVfmu0rXeGJTqm29ijxAanJUpNX+Gj3\n26RrhoYZaADBbrhqoYG1AzlTr1a9LYb2zt7e+W3RI/AddwgTX9/su++nAQKBgF4P\n5tSV8BPOye4d8HKJFP2ro7ryiZziT86K8ERE2oGT/HAx8MAFrelz3xM1HMDe+mAv\nhpnHRi6q/ZzTLGA/88OtO88Rf72rBrOrbD2T9c9ctnOu4IqEbwCaWDo04cWfB9DZ\nBVXA8yagc5lyC1+/kvKeqVVhtPsKZRg6793YbueJAoGBAPEFSEKs7RFA+b9mQ7nn\nI7Q4vXsO8v62a86jRrHnNkorGnHMhnG+M++GBQ3w38XHP7Zp+Rb5ja3bRsFlcDZD\nynLtD+nm5h1Nhf1zPvb0+wsaEiDTU1kBuuTYXz14cI68reXR1wSNIBYJk2zGoGnd\nMVJlKjjXxDch1NynaeuaX8fu\n-----END PRIVATE KEY-----\n",
  "client_email": FIREBASE_CLIENT_EMAIL,
  "client_id": FIREBASE_CLIENT_ID,
  "auth_uri": FIREBASE_AUTH_URI,
  "token_uri": FIREBASE_TOKEN_URI,
  "auth_provider_x509_cert_url": FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  "client_x509_cert_url": FIREBASE_CLIENT_X509_CERT_URL
}

const firebaseConfig = {
  apiKey: "AIzaSyBpcIoiSPitNrS-OY3NCstKCeKTtbRMEBs",
  authDomain: "volcan-desarrollo.firebaseapp.com",
  projectId: "volcan-desarrollo",
  storageBucket: "volcan-desarrollo.appspot.com",
  messagingSenderId: "1059874294461",
  appId: "1:1059874294461:web:9fa4c7e07788622df285d4"
};

/* admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: URL_DB
}); */
/*
admin.initializeApp(firebaseConfig)

const db = admin.database();
*/
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('../../volcan-dev-firebase-adminsdk-4ydbs-fa396ca6e9.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

module.exports = { db };