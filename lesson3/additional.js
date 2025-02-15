// #WpkK0ZH1
// --створити масив з:
//   - з 5 числових значень
let numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
    console.log(number)
}
// - з 5 стічкових значень
let string = ["apple", "banana", "cherry", "date", "elderberry"];
for (const string1 of string) {
    console.log(string1)
}
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let mixArray = ["apple", 123, true, "banana", 456, false, "cherry", 789, true, false];
for (const mixArrayElement of mixArray) {
    console.log(mixArrayElement)
}
// #4aDbSgh
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let empty=[ ]
empty[0]= 'water'
empty[1]= 'tea'
empty[2]= 'coffe'
empty[3]= 'milk'
empty[4]= 'pepsi'
console.log(empty)
//
//
//
// #qLQLJSeN7i
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let array=[2,17,13,6,22,31,45,66,100,-18]
// 1. перебрати його циклом while
let a = 0
while (a<array.length){
    console.log(array[a])
    a++
}
//     2. перебрати його циклом for
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
b=1
while (b<array.length){
    console.log(array[b])
    b +=2
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 1; j < array.length; j+=2) {
    console.log(array[j])

}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
k=0
while (k<array.length){
    console.log(array[k])
    k +=2
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let j = 0; j < array.length; j+=2) {
    console.log(array[j])
}
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let y = 0; y < array.length; y++) {
//     if (array[y] % 3 === 0) {array[y] = 'okten'}
//     console.log(array[y])
// }
// 8. вивести масив в зворотньому порядку.
let numbersArray=[2,17,13,6,22,31,45,66,100,-18]
for (let i = numbersArray.length-1; i>=0 ; i--) {
    console.log(numbersArray[i])

}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let q = array.length-1
while (q>=0){
    console.log(array[q])
    q--
}
for (let i = array.length-1; i>=0; i--) {
    console.log(array[i])
}

//
// #yHAwJOyiC
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let numbers2=[1,2,3,4,5,6,7,8,9,0]
for (let i = 0; i < numbers2.length; i++) {
    console.log(numbers2[i])

}
//     #GamKju89ob
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//     #Bm76xmg
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//     #u3vmD0YJXh
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let mixedArray = [42, "hello", true, false, "world", 99, true, "JavaScript", 0, false];
for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === "boolean") {
        console.log(mixedArray[i])
    }
}
// #9stMq2ou
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === 'number') {
        console.log(mixedArray[i])
    }
}
// #mK4pmM4
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === 'string') {
        console.log(mixedArray[i])
    }
}
// #0pm3EyTKy9
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//     #mDMWMW5a
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// #4sXhaa5YMM
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
let arrayAdd=[]
for (let i = 1; i <=100; i++) {
    console.log(arrayAdd[i])
    document.write(`<p>${i}</p>`)

}
// #s24slNyz7
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i <=100; i+=2) {
    console.log(i)
    document.write(`<p>${i}</p>`)

}
// #zananT5FR1
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 1; i <=100; i++) {
    if (arrayAdd % 2 === 0) {
        console.log(i)
        document.write(`<p>${i}</p>`)

    }
}
// #Tfrwls7FM

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 1; i <=100; i++) {
    if (arrayAdd % 2 === 0) {
        console.log(i)
        document.write(`<p>${i}</p>`)

    }
}
//
// #reLkOkTB29Q
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
const books = [
    {
        title: "Гаррі Поттер і філософський камінь",
        pages: 320,
        authors: ["Дж. К. Ролінг"],
        genres: ["Фентезі", "Пригоди"]
    },
    {
        title: "1984",
        pages: 328,
        authors: ["Джордж Орвелл"],
        genres: ["Антиутопія", "Політична фантастика"]
    },
    {
        title: "Майстер і Маргарита",
        pages: 480,
        authors: ["Михайло Булгаков"],
        genres: ["Містика", "Сатиричний роман"]
    },
    {
        title: "Преступление и наказание",
        pages: 527,
        authors: ["Федір Достоєвський"],
        genres: ["Класика", "Філософський роман"]
    },
    {
        title: "Кобзар",
        pages: 312,
        authors: ["Тарас Шевченко"],
        genres: ["Поезія"]
    },
    {
        title: "Хроніки Нарнії: Лев, чаклунка і стара шафа",
        pages: 206,
        authors: ["Клайв Льюїс"],
        genres: ["Фентезі", "Пригоди"]
    },
    {
        title: "Під куполом",
        pages: 1074,
        authors: ["Стівен Кінг"],
        genres: ["Трилер", "Фантастика"]
    },
    {
        title: "Шерлок Холмс: Етюд у багряних тонах",
        pages: 187,
        authors: ["Артур Конан Дойл"],
        genres: ["Детектив"]
    },
    {
        title: "Цікава математика",
        pages: 256,
        authors: ["Яків Перельман"],
        genres: ["Науково-популярна література"]
    },
    {
        title: "Маленький принц",
        pages: 96,
        authors: ["Антуан де Сент-Екзюпері"],
        genres: ["Філософія", "Дитяча література"]
    }
];


// - знайти наібльшу книжку.
let largeBook =books[0]
for (let i = 0; i < books.length; i++) {
    if (books[i].pages > largeBook.pages){
        largeBook=books[i]
    }
   }
console.log(largeBook)


// - знайти книжку/ки з найбільшою кількістю жанрів
let genresBook =books[0]
for (let i = 0; i < books.length; i++) {
    if (books[i].genres.length >=genresBook.genres.length){
        genresBook.genres.length=books[i].genres.length
        console.log(genresBook)
    }
}

// - знайти книжку/ки з найдовшою назвою
let titleLenght =books [0]
for (let i = 0; i < books.length; i++) {
    if (books[i].title.length > titleLenght.title.length){
        titleLenght.title.length=books[i].title.length
    }
    console.log(titleLenght[i])

}
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор