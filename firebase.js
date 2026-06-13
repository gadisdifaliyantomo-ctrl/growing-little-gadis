import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
doc,
getDoc,
setDoc,
updateDoc,
increment,
collection,
addDoc,
query,
orderBy,
limit,
getDocs
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyCP6vxP62QhybK8pcqN2SVAueqz6AYSm4g",
authDomain: "growing-little-gadis.firebaseapp.com",
projectId: "growing-little-gadis",
storageBucket: "growing-little-gadis.firebasestorage.app",
messagingSenderId: "75460475889",
appId: "1:75460475889:web:738203943f67cfc40fa250"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
db,
doc,
getDoc,
setDoc,
updateDoc,
increment,
collection,
addDoc,
query,
orderBy,
limit,
getDocs
};
