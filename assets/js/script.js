'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов', ''),
                b = prompt('На сколько оценити его?', '');

            if (a != '' && b != '' && a != null && b != null && a.length < 50 && b.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка!');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyMD: function () {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: function () {
        for (let a = 1; a < 2; a++) {
            let genres = prompt(`Ваш любимый жанр под номером через запятую`);

            if (genres == '' || genres == null) {
                console.log('Вы ввели некорректные данные или вообще ничего!!!');
                a--;
            } else {
                personalMovieDB.genres = genres.split(', ');
            }
            /*
            if (genre == '' || genre == null) {
                console.log('Вы ввели некорректные данные или вообще ничего!!!');
                a--;
            } else {
                personalMovieDB.genres[a - 1] = genre;
            }*/
        }
        personalMovieDB.genres.forEach((item, a) => {
            console.log(`Любимый жанр ${a + 1} - это ${item}`);
        });
    }
};