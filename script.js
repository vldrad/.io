'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        const countSmall = alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count <= 30) {
        const countMedium = alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        const countLarge = alert('Вы киноман');
    } else {
        const countError = alert('Произошла ошибка');
    }
    
}
detectPersonalLevel();

function rememberMyFilms() {
    for (let i = 0; i < 2 ; i++) {
        const a = prompt('Один из последних просмотренных фильмов?','');
        const b = prompt('На сколько оцените его?','');
        if (a == null || b == null || a == '' || b == '' || a.length > 50) {
            i--;
            console.log('error');
        } else {
            personalMovieDB.movies[a] = b;
        }
    }
}
rememberMyFilms();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        const genreQuestion = prompt(`Ваш любимый жанр под номером ${i + 1}`,'');
        personalMovieDB.genres[i] = genreQuestion;
    }
}
writeYourGenres();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        console.log('Is private');
    }
}
showMyDB();