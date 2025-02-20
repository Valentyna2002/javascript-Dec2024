// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let area = (a,b) =>{
return a * b;
}
console.log(area(5,8));
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circle = (r)=> {
    return Math.PI*r*r
}
console.log(circle(8))
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinder = (h,r)=> {
    return 2*Math.PI*h*r
}
console.log(cylinder(7,5))
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
let asd = (array) =>{
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
}
asd([12,3,4,5,7])
// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragraph = (text)=>{
    document.write(`<p>${text}</p>`)
return text}
console.log(paragraph('qweasd'))
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let list = (li)=>{
    document.write(`<ul>
     <li>${li}</li>
     <li>${li}</li>
     <li>${li}</li>
     </ul>`)
}

// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let listArr =(text,count)=>{
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
       document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
listArr('Hello',6)

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let myList = (array)=>{
    document.write(`<ul>`)
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`)
    }
    document.write(`</ul>`)
}
myList([3,4,false,true,'hello'])
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let object = (users)=>{
    for (let i = 0; i < users.length; i++) {
        document.write(`<div>
    <h3>${users[i].id} - ${users[i].name} - ${users[i].age}</h3></div>`)}
}
object( [
    { id: 1, name: "Олександр", age: 25 },
    { id: 2, name: "Марія", age: 30 },
    { id: 3, name: "Іван", age: 22 },
    { id: 4, name: "Наталя", age: 27 },
    { id: 5, name: "Андрій", age: 35 }])

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
let minNumbers = (array) =>{
    let min = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i]<min) {
            min = array[i]
        }
    }
    return min
}
console.log(minNumbers([5,3,7,2,9,1]))
// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum=(arr) =>{
    let count = 0
    for (let i = 0; i < arr.length; i++) {
       count +=arr[i]
    }
    return count
}
console.log(sum([1,4,5,6,6,]))
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr,index1,index2) =>{
    for (let i = 0; i < arr.length; i++) {
        let start = arr[index1]
        arr[index1]=arr[index2]
        arr[index2]=start
    }
    return arr
}
console.log(swap([2,5,6,7],0,1))
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH,currencyValues,exchangeCurrency)=>{
    for (const currency of currencyValues) {
        let sum = sumUAH/currency.value
        if (exchangeCurrency===currency.currency){
            console.log(sum)
            return sum
        }
    }
}
currencyValues=[{currency:'USD',value:40},{currency:'EUR',value:42}]