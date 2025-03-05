// Import Firebase modules (using Firebase v9 modular SDK)
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseConfig } from "./firebase-config.js";
import { displayMovies } from "./components/movie-list.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Function to fetch and display movies
function fetchMovies() {
  const moviesRef = ref(db, "movies");
  onValue(moviesRef, (snapshot) => {
    const data = snapshot.val();
    displayMovies(data);
  });
}

// Start fetching movies on app load
fetchMovies();
