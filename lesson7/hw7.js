// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User  ( id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = []
users.push(new User(1, 'John', 'Doe', 'john.doe@example.com', '+12345678901'));
users.push(new User(2, 'Jane', 'Smith', 'jane.smith@example.com', '+12345678902'));
users.push(new User(3, 'Michael', 'Johnson', 'michael.johnson@example.com', '+12345678903'));
users.push(new User(4, 'Emily', 'Davis', 'emily.davis@example.com', '+12345678904'));
users.push(new User(5, 'William', 'Brown', 'william.brown@example.com', '+12345678905'));
users.push(new User(6, 'Jessica', 'Jones', 'jessica.jones@example.com', '+12345678906'));
users.push(new User(7, 'Daniel', 'Garcia', 'daniel.garcia@example.com', '+12345678907'));
users.push(new User(8, 'Laura', 'Martinez', 'laura.martinez@example.com', '+12345678908'));
users.push(new User(9, 'Robert', 'Rodriguez', 'robert.rodriguez@example.com', '+12345678909'));
users.push(new User(10, 'Sophia', 'Hernandez', 'sophia.hernandez@example.com', '+12345678910'));
console.log(users)
//
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(user => user.id % 2 === 0));
//
// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((a, b) => a.id - b.id));;
//
// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client{
   constructor(id, name, surname , email, phone,order){
       this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order=order}
}

let clients= []
clients.push(new Client(1, 'Olivia', 'Wilson', 'olivia.wilson@example.com', '+12345678911', ['item1', 'item2']));
clients.push(new Client(2, 'Lucas', 'Anderson', 'lucas.anderson@example.com', '+12345678912', ['item3']));
clients.push(new Client(3, 'Emma', 'Thomas', 'emma.thomas@example.com', '+12345678913', ['item4', 'item5','item6']));
clients.push(new Client(4, 'James', 'Taylor', 'james.taylor@example.com', '+12345678914', ['item7']));
clients.push(new Client(5, 'Ava', 'Moore', 'ava.moore@example.com', '+12345678915', ['item8', 'item9','item10','item11']));
clients.push(new Client(6, 'Liam', 'Jackson', 'liam.jackson@example.com', '+12345678916', ['item12','item13']));
clients.push(new Client(7, 'Isabella', 'White', 'isabella.white@example.com', '+12345678917', ['item14']));
clients.push(new Client(8, 'Mason', 'Harris', 'mason.harris@example.com', '+12345678918', ['item15', 'item16']));
clients.push(new Client(9, 'Sophia', 'Martin', 'sophia.martin@example.com', '+12345678919', ['item17']));
clients.push(new Client(10, 'Ethan', 'Thompson', 'ethan.thompson@example.com', '+12345678920', ['item18', 'item19']));
console.log(clients)

//
//
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((a, b) => a.order.length - b.order.length));
//

// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car2 (model,producer, year, maxSpeed, engineVolume){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log((`їдемо зі швидкістю ${this.maxSpeed} на годину`));
    }
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} - ${this[key]}`);
            }
        }
    };
    // this.info = function () {
    //
    // };
    this.increaseMaxSpeed=function (newSpeed){
        console.log(`new sped ${ this.maxSpeed + newSpeed} km`);
    }
    this.changeYear= function(newValue){
        console.log(`new year  is ${this.year = newValue}`)
    }
    this.addDriver = function (driver){
        if (driver) {this.driver = driver
            console.log(myCar2)};
    }
}
let myCar2 =  new Car2("Elantra", "Hyundai", 2019, 185, 1.8)
myCar2.drive();
myCar2.info();
myCar2.increaseMaxSpeed(100);
myCar2.changeYear(2000);
myCar2.addDriver({
    name: 'John Doe',
        age: 30,
        licenseNumber: 'ABC123456'});

//
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Cars {
    constructor(model,producer, year, maxSpeed, engineVolume)
    {this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;}

    drive(){console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)}
    info(){
        for (const key in this ) {
            console.log(`${key} - ${this[key]}`)
        }}
    increaseMaxSpeed (newSpeed){
        console.log(`new sped ${ this.maxSpeed + newSpeed} km`);
    }
    changeYear (newValue){
        console.log(`new year  is ${this.year = newValue}`)
    }
    addDriver (driver){
        if (driver){
            this.driver = driver
            console.log(myCar)}
    }
}
const myCar = new Cars("Mustang", "Ford", 2021, 300, 5.0);
myCar.drive()
myCar.info()
myCar.increaseMaxSpeed(20)
myCar.changeYear(2025)
myCar.addDriver({
    name: 'John Doe',
    age: 30,
    licenseNumber: 'ABC123456'})
//
//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas  = [
    new Cinderella('Anna', 19, 36),
    new Cinderella('Bella', 21, 37),
    new Cinderella('Clara', 22, 38),
    new Cinderella('Diana', 20, 35),
    new Cinderella('Ella', 23, 39),
    new Cinderella('Fiona', 18, 34),
    new Cinderella('Gina', 24, 33),
    new Cinderella('Hana', 19, 32),
    new Cinderella('Ivy', 22, 40),
    new Cinderella('Julia', 20, 41)
];
console.log(cinderellas)
class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}
let myPrince = new Prince('Charming', 30, 36);
console.log(myPrince)
findCinderella = null
for (const cinderella of cinderellas) {
    if (cinderella.footSize === myPrince.foundShoe) {
findCinderella = cinderella;
    }
}
console.log(findCinderella)

console.log(cinderellas.find(cinderella => cinderella.footSize === myPrince.foundShoe
));
//
//
//
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
Array.prototype.myForEach = function(callback) {
    const myArray = this;
    for (const item of myArray) {
        callback(item);
    }
};
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.myForEach(function(element) {
    console.log(element + 5); // Додаємо 5 до кожного елемента
});
Array.prototype.myFilter = function(callback) {}