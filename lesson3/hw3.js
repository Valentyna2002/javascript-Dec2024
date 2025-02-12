// #y7crMeFwHcS
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let array =['Ukraine','USA','Canada','Poland','Germany','United Kingdom','Portugal','Ireland','Latvia','Italy'];
for (let i = 0; i < array.length; i++) {
    document.write(`<div> ${array[i]}</div>`);
}
document.write(`<hr>`);
// #TYj7ncx
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let text = ['tea','milk','fish','apple','meat','eggs','banana','cereal','bread','butter']
for (let i = 0; i < text.length; i++) {
document.write(`<div>${i}${': '}${text[i]}</div>`);

}
document.write(`<hr>`);
// #uzkt71dp
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//     #OeT7t3uUMFi

let books = [
    'Whispers of the Forgotten',
    'Echoes of Eternity',
    'Shadows of the Crescent Moon',
    'The Starlight Chronicles',
    'Lost in the Labyrinth',
    'Beyond the Veil',
    'Wanderers of the Wildwood',
    'Sands of Time',
    'The Last Ember',
    'Voices from the Abyss',
    'The Enchanted Codex',
    'Tales of the Twilight Realm',
    'The Frozen Odyssey',
    'Echoes of Destiny',
    'Secrets of the Celestial Realm',
    'Chronicles of the Everlasting',
    'Whispers from the Deep',
    'Legends of the Hidden Temple',
    'Songs of the Starlit Sky',
    'The Forgotten Kingdom']
let i=0
while(i<books.length){
    document.write(`<h1>${books[i]}</h1>`);
    i++
}
document.write(`<hr>`);
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
const films = [
    "Втеча з Шоушенка",
    "Хрещений батько",
    "Темний лицар",
    "Форрест Гамп",
    "Список Шиндлера",
    "Володар перснів: Повернення короля",
    "Початок",
    "Матриця",
    "Інтерстеллар",
    "Кримінальне чтиво",
    "Бійцівський клуб",
    "Гладіатор",
    "Пірати Карибського моря: Прокляття Чорної перлини",
    "Володар перснів: Братство Персня",
    "Сімпсони у кіно",
    "Аватар",
    "Титанік",
    "Джанго вільний",
    "Зоряні війни: Імперія завдає удару у відповідь",
    "Гаррі Поттер і філософський камінь"
];
let b = 0;
while(b<films.length){
    document.write(`<h1>${b}${':'}${films[b]}</h1>`);
    b++
}
document.write(`<hr>`);
//     #vLSZKMlO
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
for (const listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li>`);
}
document.write(`</ul>`);
document.write(`<hr>`);
// -----------------------------------------------
//     #Hdjws7E
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: '\'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png\''
    }
];
for (const product of products) {
    console.log(product);
    document.write(`<div class="product-card">
      <h3 class="product-title">${product.title}Price: ${product.price}</h3>
      <img src="${product.image}" alt="" class="product-image">
      </div>`);
}
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//
//
// --------------------
// #4WrHwFTEop0
// є масив
document.write(`<hr>`);
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
]
// за допомоги циклу вивести:
//    - користувачів зі статусом true
for (const user of users) {
  if(user.status === true){
      document.write(`<div>Name:${user.name} Age: ${user.age}  Status: ${user.status}</div>`)
  }
}
document.write(`<hr>`);
for (const user of users) {
    if(user.status === false){
        document.write(`<div>Name:${user.name}  Age:    ${user.age}  Status: ${user.status}</div>`)}}
// - користувачів зі статусом false
document.write(`<hr>`)
// - користувачів які старші за 30 років
for (const user of users) {
    if(user.age >=  30){
        document.write(`<div>Name:${user.name}  Age:    ${user.age}  Status: ${user.status}</div>`)}}