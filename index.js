console.log(movies);
// написати функцію яка повертає всі фільми певного жанру
function getMoviesByGenre(genre, movies) {
  return movies.filter((movie) => movie.genre === genre);
}
const moviesByGenre = getMoviesByGenre("Драма", movies);
console.log(moviesByGenre);

function getMoviesByDirector(movies, director) {
  return movies.filter((movie) => movie.director === director);
}
const moviesByDirector = getMoviesByDirector(movies, "Крістофер Нолан");
console.log(moviesByDirector);

// написати функцію яка повертає всі фільми які були випущені з 1990 по 2000 рік
function getMoviesByYears(movies, fromYear = 1990, toYear = 2000) {
  return movies.filter(
    (movie) => movie.year >= fromYear && movie.year < toYear
  );
}

const moviesByYears = getMoviesByYears(movies);
console.log(moviesByYears);

function getTitleByDirector(movies, director) {
  return movies
    .filter((movie) => movie.director === director)
    .map((movie) => movie.title);
}
const titleByDirector = getTitleByDirector(movies, "Девід Фінчер");
console.log(titleByDirector);

function getDirectorByYear(movies, year = 1999) {
  return movies
    .filter((movie) => movie.year === year)
    .map((movie) => movie.director);
}
const directorByYear = getDirectorByYear(movies);
console.log(directorByYear);

function getMovieByTitlePart(movies, word) {
  return movies.filter((movie) => movie.title.toLowerCase().includes(word));
}
const movieByTitlePart = getMovieByTitlePart(movies, "ар");
console.log(movieByTitlePart);

function sortMoviesByDuration(movies) {
  return movies.toSorted((movie1, movie2) => movie1.duration - movie2.duration);
}
const moviesByDuration = sortMoviesByDuration(movies);
console.log(moviesByDuration);

function getOldestMovie(movies) {
  return movies.toSorted((movie1, movie2) => movie1.year - movie2.year)[0]
}
const oldestMovie = getOldestMovie(movies);
console.log(oldestMovie);

function getlatestMovie(movies) {
  return movies.toSorted((movie1, movie2) => movie2.year - movie1.year)[0]
}
const latestMovie = getlatestMovie(movies);
console.log(latestMovie);