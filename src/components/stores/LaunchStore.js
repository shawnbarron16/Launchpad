import { writable } from "svelte/store";
import { db } from "../../firebase";

const LaunchStore = writable([], set => {
    db.collection('launches').get().then((snapshot) => {
        const loadedLaunches = snapshot.docs.map(document => document.data());
        set(loadedLaunches);
    })
})

export default LaunchStore;