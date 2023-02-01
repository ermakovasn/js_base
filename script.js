"use strict";
// когда прописываем эту фразу, говорим браузеру, что работаем в новом стандарте js

// let number = 5;
// создали переменную с название намбер и внутри число 5, переменная никогда не должна начинаться с цифр
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// alert(5);
// [].push('a');

// let number = 4.6;

// console.log(4/0);
// получаем infinity - числовой тип
// console.log('string' * 4);
// получаем NaN not a number

// const persone = "Alex";
// не имеет значения какие кавычки ставить, если ставим число в кавычки, то это будет являться строкой

// const bool = true;

// console.log(something);
// undefined

// обьект 

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name);
// console.log(obj['name']);
// можем обратиться к обьекту через точку или квадратную скобку, лучше через точку

// Массив - это частный случай обьекта6 для хранения данных которые идут строго по порядку

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []]

// в js нумерация начинается с 0, то есть если хотим обратиться к orange, ставим 1!

// console.log(arr[1]);

// alert('Hello!');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("вам есть 18?", "18");
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers);

// интерполяция
// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// https://someurl.com/toys/5
// прием работает только с косыми кавычками

// const user = 'Ivan';
// alert(`Привет, ${user}`);

// операторы

// console.log('arr' + ' - object');
// console.log(4 + '5');

// let incr = 10,
//     decr = 10;
// операторор инкримента (увеличение на 1) 
// incr++;
// оператор декримента (уменьшение на 1)
// decr--;
// префиксная форма - когда знаки идут перед incr/decr, постфиксная - когда после
// console.log(incr);
// console.log(decr);

// постфиксная форма, если мы ее используем сразу в консоле, берет значение переменных

// console.log(5%2);
// делит 5 на 2 и выводит остаток

// console.log(2*4 == 8);
// если хотим проверить значение то ставим ==,  1 знак = это присваивание. === строгое равенство

// && и работает только тогда, когда 2 и более подопытных явл правдивыми
// || или

// const isChecked = true,
//       isClose = true;

// console.log(isChecked && isClose);

// const isChecked = true,
//       isClose = false;

// console.log(isChecked || isClose);

// оператор отрицания !

// console.log(isChecked || !isClose);

// у оператора умножения приоритет больше, чем у сложения

// ставим унарный + перед prompt так как наша программа хочет работать с цифрами, после запятой оставляем пустой ответ в кавычках
const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');
// создаем обьект
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// задать пользователю по 2 раза вопросы: 'один из последних просмотренных фильмов?' 'На сколько оцените его?' , ответы поместить в отдельные переменные, записать ответы в обьект movies в формате
// movies: {
//     'logan': '8.1'
// }

const a = prompt('один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

    //   здесь нужно прописывать квадратные скобки
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

// условия

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('too much');
// } else {
//     console.log('Ok!');
// }

// тернарный оператор
// сначала идет условие, которое нужно проверить, если это условие верно то ок, если неверно, то ошибка. тернарный потому что участвует 3 аргумента
// (num === 50) ? console.log('Ok!') : console.log('Error');

// switch - модификация if. здесь идет строгое сравнение

const num = 50;

switch (num) {
    case 49:
        console.log('false');
        break;
    case 100:
        console.log('false');
        break;
    case 50:
        console.log('ok');
        break;
    default:
        console.log('not now');
        break;
}

// со строками все работает точно также


