//API: https://www.omdbapi.com/?apikey=bef2d4c&s=fast
// DETAILS: https://www.omdbapi.com/?i=${movies.imdbID}&apikey=bef2d4c

let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("movie__search-btn");
let result = document.getElementById("result")





// const movie__listEl = document.querySelector(".movie__list");
async function main() {
  let movieName = movieNameRef.value;
  
  let url = `http://www.omdbapi.com/?t=${movieName}&apikey=bef2d4c`;
  const movies = await fetch(url);
  const moviesData = await movies.json();
  console.log(moviesData)
  
  if(moviesData.Response === "True"){
    result.innerHTML = `<div class="result_grid" id="result_grid">
    <div class="movie_poster">
      <img
        class="img"
        src="${moviesData.Poster}"
        alt="movie poster"
      />
    </div>
    <div class="movie_info">
      <h2 class="movie_title">${moviesData.Title}</h2>
      <ul class="movie_misc_info">
        <li class="year"><b>Year: </b> ${moviesData.Year}</li>
        <li class="rated"><b>Rated:</b> ${moviesData.Rated}</li>
        <li class="released"><b>Realeased:</b> ${moviesData.Released}</li>
      </ul>
      <p class="genre"><b>Genre:</b> ${moviesData.Genre}</p>
      <p class="type"><b>Type:</b> ${moviesData.Type}</p>
      <p class="writer">
        <b>Writers:</b> ${moviesData.Writer}
      </p>
      <p class="actiors">
        <b>Actors:</b> ${moviesData.Actors}
      </p>
      <p class="plot">
        <b>Plot:</b> ${moviesData.Plot}
      </p>
      <p class="language"><b>Language:</b> ${moviesData.Language}</p>
      <p class="awards"><b>Award:</b> ${moviesData.Awards}</p>
      <p class="boxoffice"><b>Box Office:</b> ${moviesData.BoxOffice}</p>
      <p class="ratings"><b>Ratings:</b> ${moviesData.Ratings[0].Value}</p>
      <p class="runtime"><b>Runtime:</b> ${moviesData.Runtime}</p>
      <p class="director"><b>Director:</b> ${moviesData.Director}</p>
    </div>
  </div>`
  } 

  else if(movieName.length === 0) {
    result.innerHTML = `<h3 class="msg"> Please Enter a Movie Name </h3>`;
  }
  
  else {
    result.innerHTML = `<h3 class="msg"> Sorry, something went wrong. </h3>`;
  }


  // movie__listEl.innerHTML = moviesData.Search.map((movies) =>
  //   moviesHtml(movies)
  // ).join("");
}

searchBtn.addEventListener("click", main)


main();
 
// function moviesHtml(movies) {
//   return `<a href="movie.html" target="_blank" class="movie__card">
//   <div class="movie__img--wrapper">
//     <img
//       class="movie__img"
//       src=${movies.Poster}
//       alt=""
//     />
//     <p class="movie__title">${movies.Title}</p>
//     <div class="movie__info">
//       <span class="movie__year">${movies.Year}</span>
//       <span class="movie__genre">${movies.Type}</span>
//     </div>
//   </div>
//  </a>`;
// }
