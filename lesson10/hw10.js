// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let button=document.getElementsByTagName('button')[0];
button.onclick = function(){
    document.getElementById('text').remove()
    // let divText=document.getElementById('text');
    // divText.style.display='none';
}

//         #j693ca8
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
document.getElementById('btnInput').onclick = function( event){
    event.preventDefault()
    let age = document.getElementById('age').value;
    let checkAge =document.getElementById('message')

    if (age<18){
        checkAge.innerText = 'Вам ще немає 18 років!'
        checkAge.style.color = "red";
    }
    if (age>=18){
        checkAge.innerText = "Ви повнолітній!";
        checkAge.style.color = "green";
    }
}
//
// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let btnForm=document.getElementById('formBtn');
btnForm.onclick = function(event){
    event.preventDefault()
    let name=document.getElementById('name').value;
    let surname=document.getElementById('surname').value;
    let age2=document.getElementById('age2').value;

    let formDiv = document.getElementById('formDiv');
    let nameBlock = document.createElement('p');
    nameBlock.innerText=`Імʼя: ${name}`;
    let surnameBlock = document.createElement('p');
    surnameBlock.innerText=`Прізвище: ${surname}`;
    let age2Block = document.createElement('p');
    age2Block.innerText=`Вік: ${age2}`;
    formDiv.append(nameBlock, surnameBlock, age2Block);
}
//
// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
window.onload = function(){
    let getNumber = +localStorage.getItem('number');
    getNumber += 1
    localStorage.setItem('number', getNumber);
    document.getElementById('number').innerText = getNumber;
}
//
// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

//
//
// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
let kilogram = document.getElementById('kg');
kilogram.oninput = function(){
   let lb = document.getElementById('lb');
   lb.value = +kilogram.value * 2.2.toFixed(2);
}
//
// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
function addToLocalStorage(arrayName,objToAdd){
   let lsItem =  localStorage.getItem(arrayName)
    if (!lsItem) {
        throw new Error('there is no such array');
    }
    const array = JSON.parse(lsItem)
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));
}

//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
let buttonCreate = document.getElementById('buttonCreate');
buttonCreate.onclick = function(ev){
    ev.preventDefault();
   let lines =  document.getElementById('lines').value;
   let column = document.getElementById('column').value;
   let textContent = document.getElementById('textContent').value;

let table = document.getElementById('table');
table.innerHTML =''
    table.style.border = '1px solid red ';
    table.style.borderCollapse = 'collapse'


    for (let i = 0; i < lines; i++) {
       let tr =document.createElement(`tr`)
        for (let j = 0; j < column; j++) {
            let td = document.createElement(`td`);
            td.innerText = textContent
            tr.append(td)
        }
        table.appendChild(tr)
    }
}



//
//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

window.onload = function(){
    let price = document.getElementById('hrn')
    let getPrice =JSON.parse(localStorage.getItem('price')) || 100
    let update =JSON.parse(localStorage.getItem('time')) || 0
    let time = Date.now()
    if(time - update > 10000){
        getPrice +=10
        localStorage.setItem('price',getPrice)
        localStorage.setItem('lastUpdated', time)
    }
price.innerText = `${getPrice} грн`


}
//
//
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єкті
let arr = []
for (let i = 1; i <= 100; i++) {
arr.push({id:i, name:'item' + i});
}
let  list=document.getElementById('list')
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next')
let arrPerPage = 10
let pageNumber = 0

function pagination  (){
    list.innerHTML = ''
    let start = arrPerPage * pageNumber
    let end = start + arrPerPage
    let current = arr.slice(start, end)

current.forEach(element => {
let divForElement =document.createElement('div')
    divForElement.innerText = `${element.id}: ${element.name}`
    list.appendChild(divForElement)
})
}
window.addEventListener('load',function (){
    pagination()})
prevButton.onclick = function (){
if (pageNumber>0){
    pageNumber--
    pagination()
}
}
nextButton.onclick=function (){
   if( pageNumber<arr.length/arrPerPage-1){
       pageNumber++
       pagination()
   }
}