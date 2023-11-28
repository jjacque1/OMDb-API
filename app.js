//API: https://www.omdbapi.com/?apikey=bef2d4c&s=fast

async function main() {
  const movies = await fetch("https://www.omdbapi.com/?apikey=bef2d4c&s=fast");
  const moviesData = await movies.json();
  console.log(moviesData)
}

main();
