//API: https://www.omdbapi.com/?apikey=bef2d4c&s=fast
// DETAILS: https://www.omdbapi.com/?i=${movies.imdbID}&apikey=bef2d4c

const url = "https://www.omdbapi.com/?apikey=bef2d4c&s=two";
const movie__listEl = document.querySelector(".movie__list");
async function main() {
  const movies = await fetch(url);
  const moviesData = await movies.json();
  console.log(moviesData.Search)

  movie__listEl.innerHTML = moviesData.Search.map((movies) =>
    moviesHtml(movies)
  ).join("");
}

main();
 
function moviesHtml(movies) {
  return `<a href="movie.html" target="_blank" class="movie__card">
  <div class="movie__img--wrapper">
    <img
      class="movie__img"
      src=${movies.Poster}
      alt=""
    />
    <p class="movie__title">${movies.Title}</p>
    <div class="movie__info">
      <span class="movie__year">${movies.Year}</span>
      <span class="movie__genre">${movies.Type}</span>
    </div>
  </div>
 </a>`;
}
