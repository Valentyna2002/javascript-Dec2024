// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let addBlock = document.createElement('div')
addBlock.innerText='Hello'
addBlock.classList.add('wrap', 'collapse', 'alpha', 'beta')
addBlock.style.backgroundColor = 'blue'
addBlock.style.color = 'red'
addBlock.style.fontSize = '40px'
document.body.appendChild(addBlock)
let cloneBlock = addBlock.cloneNode(true)
document.body.appendChild(cloneBlock)


//
//     #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let createList = document.createElement('ul')
let array = ['Main','Products','About us','Contacts']
for (const string of array) {
   let list = document.createElement('li')
    list.innerText=string
    createList.appendChild(list)
}
document.body.appendChild(createList)

//
// #jeBqHV525U5
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let mainBlock = document.createElement('div')
for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let coursesBlock = document.createElement('div')
    coursesBlock.innerHTML = `<h2>Title: ${coursesAndDurationArrayElement.title}</h2> <p>monthDuration: ${coursesAndDurationArrayElement.monthDuration}</p>`
    mainBlock.appendChild(coursesBlock)
}
document.body.appendChild(mainBlock)

//
// =========================
//     #Kx1xgoKy8
//     - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
let mainCoursesDiv = document.createElement('div')
for (const mainCoursesDivElement of mainCoursesDiv) {
    let itemDiv = document.createElement('div')
    itemDiv.classList.add('item')
    let title = document.createElement('h1')
    title.classList.add('heading')
    title.innerText=mainCoursesDivElement.title
    let description = document.createElement('p')
    description.classList.add('description')
    description.innerText=mainCoursesDivElement.monthDuration
    itemDiv.append(title, description)
    mainCoursesDiv.appendChild(itemDiv)
}
document.body.appendChild(mainBlock)

