//API: https://www.omdbapi.com/?apikey=bef2d4c&s=fast
const url = 'https://www.omdbapi.com/?apikey=bef2d4c&s=boy';
const movieSearchBox = document.getElementById('#movie-search-box');

async function main() {
 const movies = await fetch(url);
  const moviesData = await movies.json();
  const movie__listEl = document.querySelector('.movie__list');
console.log(moviesData.Search)
  movie__listEl.innerHTML = moviesData.Search.map((movies) => `<div class="movie__card">
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
</div>`).join("")
}

main();

// function findMovies() {
//   let searchTerm = (movieSearchBox.value);
//   console.log(searchTerm)
// }


//  const userListEl = document.querySelector(".user-list");
// async function main() {
//   const users = await fetch("https://jsonplaceholder.typicode.com/users");
//   const usersData = await users.json();
//   userListEl.innerHTML = usersData.map((user) => userHTML(user)).join("");
// }

// main();

// function showUserPosts(id) {
//   localStorage.setItem("id100", id);
//   window.location.href = `${window.location.origin}/user.html`
// }

// function userHTML(user) {
//   return `<div class="user-card" onclick="showUserPosts(${user.id})">
//   <div class="user-card__container">
//     <h3>${user.name}</h3>
//       <p><b>Email:</b> ${user.email}</p>
//       <p><b>Phone:</b> ${user.phone}</p>
//       <p><b>Website:</b> <a href="https://${user.website}" target="_blank">
//       ${user.website}
//       </a></p>
//   </div>
// </div>`
// }

