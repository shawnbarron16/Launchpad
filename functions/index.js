// import {db} from "../src/firebase";

// const functions = require("firebase-functions");
// const axios = require("axios");

// exports.getLaunches = functions.https.onRequest(async (req, res) => {
//   try {
//     const launchURL = "https://ll.thespacedevs.com/2.2.0/launch/upcoming";
//     const response = await axios.get(launchURL);
//     const data = response.data.results;

//     // Clear existing documents in the collection before saving new data
//     await db.collection("launches").get().then((snapshot) => {
//       snapshot.forEach((doc) => {
//         doc.ref.delete();
//       });
//     });

//     // Save each launch document to the collection
//     data.forEach((launch) => {
//       db.collection("launches").add(launch);
//     });
//     res.status(200).send("Launch data was successfully retrieved!");
//   } catch (error) {
//     console.error("Error fetching or saving data:", error);
//     res.status(500).send("Error fetching or saving the data");
//   }
// });

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios");

admin.initializeApp();

exports.fetchUpcomingLaunches = functions.https.onRequest(async (req, res) => {
  try {
    const apiUrl = "https://lldev.thespacedevs.com/2.2.0/launch/upcoming";
    const response = await axios.get(apiUrl);
    const data = response.data.results;

    const firestore = admin.firestore();
    const launchesCollection = firestore.collection("launches");

    // Clear existing documents in the collection before saving new data
    await launchesCollection.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        doc.ref.delete();
      });
    });

    // Save each launch document to the collection
    data.forEach((launch) => {
      launchesCollection.add(launch);
    });

    res.status(200).send("Data fetched and saved successfully!");
  } catch (error) {
    console.error("Error fetching or saving data:", error);
    res.status(500).send("Error fetching or saving data");
  }
});
