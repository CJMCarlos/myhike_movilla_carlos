// saved.js
import { onAuthReady } from "./authentication.js";
import { db } from "./firebaseConfig.js";
import { doc, getDoc } from "firebase/firestore";

function initSavedPage() {
  onAuthReady(async (user) => {
    if (!user) {
      // Not logged in redirect to login
      location.href = "/login.html";
      return;
    }

    const userId = user.uid;
    await insertNameFromFirestore(userId);
    await renderSavedHikes(userId);
  });
}

initSavedPage();

// Show the user's name on this page
async function insertNameFromFirestore(userId) {
  try {
    const userRef = doc(db, "users", userId);
    const userDocSnap = await getDoc(userRef);

    if (userDocSnap.exists()) {
      const data = userDocSnap.data();
      const userName = data.name || "Hiker";
      document.getElementById("name-goes-here").innerText = userName;
    }
  } catch (e) {
    console.error("Error reading user document:", e);
  }
}

// Read bookmarks and display saved hikes
async function renderSavedHikes(userId) {
  const userRef = doc(db, "users", userId);
  const userDocSnap = await getDoc(userRef);
  const userData = userDocSnap.exists() ? userDocSnap.data() : {};
  const bookmarks = userData.bookmarks || [];

  const newcardTemplate = document.getElementById("savedCardTemplate");
  const hikeCardGroup = document.getElementById("hikeCardGroup");

  // NEW IDEA: Loop through bookmarked hike IDs and render each
  // a new card using the template
  for (const hikeId of bookmarks) {
    const hikeRef = doc(db, "hikes", hikeId);
    const hikeDocSnap = await getDoc(hikeRef);

    if (!hikeDocSnap.exists()) {
      console.log("No hike document for ID", hikeId);
      continue;
    }

    const hikeData = hikeDocSnap.data();
    const newcard = newcardTemplate.content.cloneNode(true);
    newcard.querySelector(".card-title").innerText = hikeData.name;
    newcard.querySelector(".card-text").textContent =
      hikeData.details || `Located in ${hikeData.city}.`;
    newcard.querySelector(".card-length").innerText = hikeData.length;
    newcard.querySelector(".card-image").src = `./images/${hikeData.code}.jpg`;
    newcard.querySelector("a").href = "eachHike.html?docID=" + hikeId;
    hikeCardGroup.appendChild(newcard);
  }
}
