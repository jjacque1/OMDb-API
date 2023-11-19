//API: https://www.omdbapi.com/?apikey=bef2d4c&s=fast

async function main() {
    const movies = await fetch("https://www.omdbapi.com/?apikey=bef2d4c&s=fast");
    const moviesData = await movies.json();
        moviesData.map(
            (movies) => `
            <div class="movie__wrapper">
                <div class="movie__img--wrapper">
                  <img class="movie__img" src="https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg" alt="">
                  <p class="movie__title">
                    Fast & Furious 6
                  </p>
                  <div class="movie__info">
                    <span class="movie__year">2013</span>
                    <span class="movie__genre">Action</span>
                  </div>
                </div>
              </div>`
        ).join("")
}

main();