import { db } from "./firebaseConfig.js";
import { doc, getDoc } from "firebase/firestore";

// Get the document ID from the URL
function getDocIdFromUrl() {
  const params = new URL(window.location.href).searchParams;
  return params.get("docID");
}

// Fetch the hike and display its name and image
async function displayHikeInfo() {
  const id = getDocIdFromUrl();

  try {
    const hikeRef = doc(db, "hikes", id);
    const hikeSnap = await getDoc(hikeRef);

    const hike = hikeSnap.data();
    const name = hike.name;
    const code = hike.code;

    // Update the page
    document.getElementById("hikeName").textContent = name;
    const img = document.getElementById("hikeImage");
    img.src = `./images/${code}.jpg`;
    img.alt = `${name} image`;
  } catch (error) {
    console.error("Error loading hike:", error);
    document.getElementById("hikeName").textContent = "Error loading hike.";
  }
}

displayHikeInfo();
