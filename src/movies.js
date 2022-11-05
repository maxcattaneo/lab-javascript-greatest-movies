// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   const AllDirectors = moviesArray.map (directors => directors.director)
   return AllDirectors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
   const spielbergMovies = moviesArray.filter (film => film.director == 'Steven Spielberg'&& film.genre.includes ('Drama'));
   return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
   const scores = moviesArray.reduce(function (sum, score) {
      return sum + score.score/moviesArray.length;
    }, 0);
    return Number(scores.toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
   const dramaMovies = moviesArray.filter (drama => drama.genre.includes ('Drama'));
   const scores = dramaMovies.reduce(function (sum, score) {
      return sum + score.score/dramaMovies.length;
    }, 0);
    return Number(scores.toFixed(2))
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newMoviesArry = [...moviesArray]
    newMoviesArry.sort((a, b) => a.year - b.year);
    return newMoviesArry
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const byTitle = moviesArray.map (titles => titles.title);
   return byTitle.sort().slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
