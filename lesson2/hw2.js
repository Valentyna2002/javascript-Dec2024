// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array =['Hello', 'World','Okten','javascript','Valentyna' ,2,4,6, true,false];
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[5])
console.log(array[6])
console.log(array[7])
console.log(array[8])
console.log(array[9])
// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1={
    title: "The Hobbit",
    pageCount:310,
    genre:"Fantasy"
}
let book2={
    title:  "To Kill a Mockingbird",
    pageCount:281,
    genre:"Fiction"
}
let book3={
    title: "Pride and Prejudice",
    pageCount:279,
    genre:"Romance"
}
//
//     #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4={
    title: "1984",
    pageCount:328,
    genre:"Dystopian",
    author: {
        name: "George Orwell",
        age: 46}
}
let book5={
    title:  "Brave New World",
    pageCount:288,
    genre:"Dystopian",
    author: {
        name: "Aldous Huxley",
        age: 69 }
}
let book6={
    title: "Moby-Dick",
    pageCount:635,
    genre:"Adventure",
    author: {
        name: "Herman Melville",
        age: 72 }
}
//     #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {id:1,
        name:'Vasyl',
        username:'Vasyl',
        password:1111111
    },
    {id:2,
        name:'Kate',
        username:'Ekateryna',
        password:2222222
    },
    {id:3,
        name:'Valentyna',
        username:'Valia',
        password:3333333
    },
    {id:4,
        name:'Valentyn',
        username:'Valik',
        password:4444444
    },
    {id:5,
        name:'Vitaliy',
        username:'Vetal',
        password:55555555
    },
    {id:6,
        name:'Maria',
        username:'Mary',
        password:1111111
    },
    {id:7,
        name:'Veronika',
        username:'Vera',
        password:7777777
    },
    {
        id: 8,
        name: 'Vladyslav,',
        username: 'Vlad',
        password: 88888888
    },
    {id:9,
        name:'Anna',
        username:'Ania',
        password:99999999
    },
    {id:10,
        name:'Mykola',
        username:'Kolia',
        password:101010
    }
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let weather=[
    {day:'Monday',
        morning:'+5С',
        daytime:'+15С',
        evening:'+8С'
    },
    {day:'Tuesday',
        morning:'+2С',
        daytime:'+10С',
        evening:'+5С'
    },
    {day:'Wednesday',
        morning:'+8С',
        daytime:'+15С',
        evening:'+10С'
    },
    {day:'Thursday',
        morning:'+10С',
        daytime:'+25С',
        evening:'+15С'
    },
    {day:'Friday',
        morning:'+8С',
        daytime:'+18С',
        evening:'+10С'
    },
    {day:'Suturday',
        morning:'+9С',
        daytime:'+16С',
        evening:'+10С'
    },
    {day:'Sunday',
        morning:'+4С',
        daytime:'+9С',
        evening:'+5С'
    }
]
// Логічні розгалуження:
//
//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 0
if (x!==0){
    console.log('Вірно')
}else {
    console.log('Невірно')
}
// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 5
if (time >=0 && time <= 15){
    console.log('перша частина')
}else if(time>15 && time <= 30){
    console.log('друга частина')
}else if(time>30 && time <= 45){
    console.log('третя частина')
}else if(time>45 && time <= 59){
    console.log('четверта частина')
} else {
    console.log('невідомо')
}
//
// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day=3
if (day >=1 && day <= 10){
    console.log('Перша половина')
}else if(day>10 && day<=20){
    console.log('Друга половина')
} else if (day>20 && day<=31){
    console.log('Третя половина')
} else {
    console.log('невірна дата')
}
//
// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let shedule = 7
switch (shedule){
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday');
        break
    case 3:
        console.log('Wednesday');
        break
    case 4:
        console.log('Thursday');
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    case 7:
        console.log('Sunday')
        break
    default:
        console.log('not found')
}
//
//     #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let number1= 6
let number2= 6
if (number1>number2){
    console.log('number1')
} else if (number1 === number2){
    console.log('same numbers')
} else if (number2>number1){
    console.log('number2')
}
//
//         #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let x2 = 5
if ( x2 === 0 || x2===undefined || x2 === null || x2 === false || x2===NaN || x2 === ''){console.log('default')}

if (!x){
    x='default'
}

//
//     #awLXL6TBzg
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration>5){
    console.log('super')
}
if (coursesAndDurationArray[1].monthDuration>5){
    console.log('super')
}
if (coursesAndDurationArray[2].monthDuration>5){
    console.log('super')
}
if (coursesAndDurationArray[3].monthDuration>5){
    console.log('super')
}
if (coursesAndDurationArray[4].monthDuration>5){
    console.log('super')
}
if (coursesAndDurationArray[5].monthDuration>5){
    console.log('super')
}