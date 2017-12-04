const gcs = require('@google-cloud/storage')({keyFilename: 'service-account.json'});
const bucket = gcs.bucket('gs://massahcollection.appspot.com');

const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://massahcollection.firebaseio.com"
});

const file = bucket.file('massah_signature.jpg');
    return file.getSignedUrl({
    action: 'read',
    expires: '03-09-2491'
    }).then(signedUrls => {
        console.log('signed URL', signedUrls[0]); // this will contain the picture's url
});