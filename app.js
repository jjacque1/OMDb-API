//API: https://www.omdbapi.com/?apikey=bef2d4c&s=fast


const movieListEl = document.querySelector(".movie__list");
async function main() {
  const movies = await fetch("https://www.omdbapi.com/?apikey=bef2d4c&s=more");
  const moviesData = await movies.json();
  
}

main();

