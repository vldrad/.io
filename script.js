'use strict';

const personalMovieDB = {
    count: prompt('Сколько фильмов вы уже посмотрели?',''),
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?','');
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            const countSmall = alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count <= 30) {
            const countMedium = alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            const countLarge = alert('Вы киноман');
        } else {
            const countError = alert('Произошла ошибка');
        }
    },
    rememberMyFilms: function() {
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
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            const genreQuestion = prompt(`Ваш любимый жанр под номером ${i + 1}`,'');
            if (genreQuestion == null || genreQuestion == '') {
                console.log('Wrong data , or missing data')
                i--;
            } else {
                personalMovieDB.genres[i] = genreQuestion;
            }
        }
        const {genres} = personalMovieDB;
        genres.forEach((genre, i ) => {
            console.log(`Любимый жанр #${i + 1} - это ${genre}`)
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat == true) {
            personalMovieDB.privat = false;
        } else if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log('Is private');
        }
    }
};
personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
