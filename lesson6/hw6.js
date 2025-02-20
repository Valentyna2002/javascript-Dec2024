// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strLength = (string) =>{
    console.log(string.length);
}
strLength('hello world');
strLength ('lorem ipsum')
strLength ('javascript is cool')
// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let upper = (string) => {
    console.log(string.toUpperCase())
}
upper('hello world')
upper('lorem ipsum')
upper('javascript is cool')



// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let lower = (string) => {
    console.log(string.toLowerCase())
}
lower('HELLO WORLD')
lower('LOREM IPSUM')
lower('JAVASCRIPT IS COOL')
// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str.trim())
//
//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
let stringToarray = (str) => {
    console.log(str.split(' '))
}
stringToarray('Ревуть воли як ясла повні')
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10,8,-7,55,987,-1011,0,1050,0]
numbers.map(number => {
    console.log(number + '')
})
// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
let nums = [11,21,3];
let sortNums = (array,direction)=>{
    if (direction === 'ascending') {
        return array.sort((num1,num2)=>(num1 - num2))
    }
    if (direction === 'descending'){
        return array.sort((num1,num2)=>(num2 - num1))
    }
}
console.log(sortNums(nums,'ascending'))
console.log(sortNums(nums,'descending'))
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================
// #yo06d74c1C
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortcourser = coursesAndDurationArray.sort((a,b) =>{ return b.monthDuration - a.monthDuration})
console.log(sortcourser)
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filtercourses =coursesAndDurationArray.filter(value => {return value.monthDuration > 5})
console.log(filtercourses)
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mapCourses =  coursesAndDurationArray.map((value , index) => {
    let newCourses = {
        id: index +  1,
        title: value.title,
        monthDuration: value.monthDuration
    }; return newCourses
})
console.log(mapCourses)

// =========================
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
let  cardSuit = ['spade', 'diamond','heart', 'clubs']
let values= [ '6', '7', '8', '9','10', 'ace','jack','queen','king']

const cards = []
for (const suit of cardSuit) {
    for (const value of values) {
        const card = {cardSuit:suit, value:value}
        if (suit === 'heart' ||  suit === 'diamond'){card.color = 'red'}
        else {card.color = 'black'}
        cards.push(card)
    }
}
console.log(cards)
// - знайти піковий туз
let aceOfSpides = cards.find(card => card.cardSuit === 'spade' && card.value === 'ace')
console.log(aceOfSpides)
// - всі шістки
let sixes = cards.filter(card => card.value === '6' )
console.log(sixes)
// - всі червоні карти
let redCard = cards.filter(card => card.color === 'red')
console.log(redCard)
// - всі буби
let diamond = cards.filter(card => card.cardSuit === 'diamond')
console.log(diamond)
// - всі трефи від 9 та більше
let clubsCard = cards.filter(card => card.cardSuit === 'clubs' &&  (parseInt(card.value) >= 9 || card.value >= 'a'))
console.log(clubsCard);

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
cards.reduce((acc,card)=>{
    if (cards.cardSuit === 'spade'){acc.spades.push(card)}
    else if ( card.cardSuit === 'diamond'){
        acc.diamonds.push(card);}
    else if ( card.cardSuit === 'heart'){
        acc.hearts.push(card);}
    else if ( card.cardSuit === 'clubs'){
        acc.clubs.push(card)}
    return acc
},{ spades:[], diamonds:[], hearts:[], clubs:[]})
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в яких в modules є sass
let findCourses = coursesArray.filter(course => course.modules.includes('sass'));
console.log(findCourses)
// --написати пошук всіх об'єктів, в яких в modules є docker
let findCourses2 = coursesArray.filter(course => course.modules.includes('docker'));
console.log(findCourses2)
