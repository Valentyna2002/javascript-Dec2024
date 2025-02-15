// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle(a,b) {
    return a*b
}
console.log(rectangle(2,5))
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(r) {
return Math.PI*r*r
}
console.log(circle(8))
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(h,r) {
return 2*Math.PI*h*r
}

console.log(cylinder(7,5))
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
function asd(array){
for (const arrayElement of array) {
    console.log(arrayElement)
}}
let myArray = [1,2,3,4,5];
asd(myArray)
// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function createText(text) {
    document.write(`<p>${text}</p>`)
    console.log(text)
}
createText('hello world')
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function list(text) {
    document.write(`<ul>
 <li>${text}</li>
 <li>${text}</li>
 <li>${text}</li>
 </ul>`)
    return text
}

console.log(list('hello world'))
// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function createList(text,count) {
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
createList('hello',5)
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
function arrayFunction(array){
    document.write(`<ul>`)
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`)
    }
    document.write(`</ul>`)
}
arrayFunction([1,2,3,4,true,false,'Valentyna','Okten'])

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function usersFunction(users){
    for (let i = 0; i < users.length; i++) {
        document.write(`<div><h3>${users[i].id}-${users[i].name}-${users[i].age}</h3></div>`)
    }
}
usersFunction( [
    { id: 1, name: "Олександр", age: 25 },
    { id: 2, name: "Марія", age: 30 },
    { id: 3, name: "Іван", age: 22 },
    { id: 4, name: "Наталя", age: 27 },
    { id: 5, name: "Андрій", age: 35 }])
//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
function numbersArray(numbers) {
    let min = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]<min) {
            min = numbers[i]
        }
    }
    return min
}

console.log(numbersArray([4,6,8,-4,90,6]))
// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let start =  0
    for (let i = 0; i < arr.length; i++) {
      start += arr[i]
    }
    return start
}
console.log(sum([1,2,3,4,5]))
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2){
    for (let i = 0; i < arr.length; i++) {
        let element = arr[index1]
        arr[index1]=arr[index2]
        arr[index2]=element
    }
    return arr
}
console.log(swap([1,2,3,4,5],0,1))
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (const currency of currencyValues) {
        let sumExchange= sumUAH/currency.value
        if (exchangeCurrency===currency.currency){
            console.log(sumExchange)
            return sumExchange
        }
    }
}
let myExchange = exchange(1000,[{currency:'USD',value:25}],'USD')