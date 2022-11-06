const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

//const serviceAccount = require('../../volcan-dev-firebase-adminsdk-4ydbs-fa396ca6e9.json');
//const admin = require('firebase-admin');

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
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDZkZCc2IBZhQfj\nP1kFk3RIAuswkUSn5oJA4MFIyR3Zg6FR2blUM/GDJKLjPAeRkfXWAKZX0EaowNmp\nZXbjiYnf4eKBAVPK7k+ZfvsoXCh0qd88uMpxcyWQz1i0xKm1HVdvDgAfBHhrtEws\ne7blAhDHAukVW4AD7myVclA+RKdEleeBXv/AhhzNaNcRMIUHEReca00hZTIlcTOg\nmHWcCAO73feLRDufkLystNrA+ZRRiiLsMj8hpnxisagpipEp7AFqfLotlVorej10\n21XKznJt7fxJENjRdXuX1XECiJXS1yx+o8DKUVfjM95Uzez80nSvRkKSBinMmsGi\nfx/aVUGhAgMBAAECggEAG9JJ8EydKRViW1Rj8VsYQQcihRzmbyQCXwJ+pOyW5RQ4\ngkt5sANObGs4ax9nhl1oVtvRaaRIDNdQXiGL8O/LEjaD7OQ7D1WnFyVOP6x9PeHl\nGpI0zQog8SIaoU8OtorQffKH4G+FaJxvKzcMvb8kXxaHsMP5HEeWWgv6p+PGkfXu\n2hW6k+GnsjhHGIE/4mgURQjbubl8vjbvHQR3XVk7T8Mc+o5/lTOtneKCiTBHcd5L\nmvUcsEzZ6L3IPp92GFiaqqOw2rCgwid0wkxySmd+FinZTAAUKAHJui93TeCar7Xh\nXTmANryg6yonDRUo2/W2n/85GRGANFuKQzN1XChkewKBgQD8/miGZCjkwDzpD8zI\n5TlO8Jist+UlpAbyWlxycd5Tpo4PdKQYZHDvvtSr8zpdJwk8J8i2ib05k30TsvZ9\nf73gwkJ4omBAj84ZSQcFlfLkGT9HfhSHZ8/5Y1tTuJgcaVYpRPM0tnc+Vl9E0z05\nTXgtNKxB0NXE57jWKwaoIb8UkwKBgQDcJ2U3tjIw5FigMX2gf2EWdLY9izujvPIq\nD16Qkqlaw+/b8NL+iasKLJmuupl8Wch5Xs5Ru8Wyn85DSYPhVDrVs88sYNbRZsIf\nYf+UnwvGXVwbqjZeNZSnnFi2ItOa9WCJ62qz/s9P2pnpfIyQhYgNLGAFiqjRVzKT\nZFtLFpKFewKBgQCFPC4r6H+oyJzLWKjOe/mMWyTsgQRKqHGIHJJnKxSdFS/nb9Qj\njHH1sJgr3jI0cKRqa8FGcI+YzNWoFC2/thB3V5bOFSV/mrw9kLoD9Q4vliQ/MGT7\nUm6yteKY2rQw8kCQB2HVtuphh/cwNdceYHATzpORLbwGsMok8A/XZ75LxQKBgCDW\n/5I/61y/sziyKTs3xRPEdSrZChxyou0DPefy+LBBahY05kRx5MGvxXz6+MpD2lPA\ngKZQjD0I+Yuv+6wxFFWsbMsB5wl1ep+TzrwsvWTpqEO4MEP9Wh9mgxUoPMhwseXg\n6BnReLtAsJTTr2Qfhxvv8qLg/C2+BB1YawXYaCLhAoGBAKsKeLtyf3GkGyBo7fHg\nguspB1Jr27MnaP3LyvQFgUDCvNPIQYn/H3HR6P4EzfGpR1iQGkakqsnmLDwJ6XVH\njE8xv8uZkbl/tR1U8fAh5piapXOUFcIAfIi359R99isp6lmKwQiAAr1GL+pkxSgN\nE5283HtvzRKo9BI3le9RNH7c\n-----END PRIVATE KEY-----\n",
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




initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

module.exports = { db };