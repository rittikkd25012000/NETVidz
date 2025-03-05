// Module that builds and displays movie cards using Bootstrap

export function displayMovies(data) {
  const moviesContainer = document.getElementById("movies");
  moviesContainer.innerHTML = ""; // Clear the container before adding new items
  
  // Check if any movie data exists
  if (!data) {
    moviesContainer.innerHTML = "<p class='text-center'>No movies available at the moment.</p>";
    return;
  }
  
  // Loop through each movie and create a card for it
  for (let id in data) {
    const movie = data[id];

    // Create a responsive column
    const col = document.createElement("div");
    col.className = "col-sm-6 col-md-4 col-lg-3";

    // Create the card element
    const card = document.createElement("div");
    card.className = "card mb-4";

    // Create an image element and set its source
    const img = document.createElement("img");
    img.className = "card-img-top";
    // If movie.posterUrl exists, use that; otherwise, use the placeholder image
    img.src = movie.posterUrl ? movie.posterUrl : "images/placeholder.png";
    img.alt = movie.title;
    card.appendChild(img);

    // Create the card body for title and genre
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = movie.title;
    cardBody.appendChild(title);

    const genre = document.createElement("p");
    genre.className = "card-text";
    genre.textContent = movie.genre;
    cardBody.appendChild(genre);

    // Assemble the card structure
    card.appendChild(cardBody);
    col.appendChild(card);
    moviesContainer.appendChild(col);
  }
}
