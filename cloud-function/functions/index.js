
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// eslint-disable-next-line max-len
const SENDGRID_API_KEY= "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";
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(SENDGRID_API_KEY);

exports.firestoreEmail= functions.firestore
    .document("customizedModels/{customizedId}")
    .onCreate((_, event)=>{
      const customizedId = event.params.customizedId;
      console.log(customizedId);
      const db=admin.firestore();
      return db.collection("customizedModels").doc(customizedId)
          .get()
          .then((doc)=>{
            const customized = doc.data();
            console.log(customized);
            const msg={
              to: "ahmedtricker@gmail.com",
              from: "ahmedtricker@gmail.com",
              subject: "done here",
              html: `<p>${JSON.stringify(customized)||"pk"}</p>`,
            };
            return sgMail.send(msg);
          }).then(()=>console.log("mail sent"))
          .catch((err) => console.log(err));
    });
