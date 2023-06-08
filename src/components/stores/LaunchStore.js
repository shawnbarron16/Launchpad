import { writable } from "svelte/store";
import { db } from "../../firebase";

//Access the firestore database, get all the documents from the 'launches' collection,
//then map the resulting objects to an array called loadedLaunches, then set the value of the store to that array.
const LaunchStore = writable([], set => {
    db.collection('launches').get().then((snapshot) => {
        const loadedLaunches = snapshot.docs.map(document => document.data());
        set(loadedLaunches);
    })
})

export default LaunchStore;