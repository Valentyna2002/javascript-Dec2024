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
let coursesAndDurationArray2 = [
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
for (const mainCoursesDivElement of coursesAndDurationArray2) {
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
document.body.appendChild(mainCoursesDiv)

// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
//
//
//


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

for (const coursesArrayElement of coursesArray) {
    let itemBlock = document.createElement('div')
    itemBlock.classList.add('block')
    let title = document.createElement('div')
    title.innerText = `title: ${coursesArrayElement.title}`
    let duration = document.createElement('div')
    duration.classList.add('duration')
    duration.innerHTML = `<p>monthDuration: ${coursesArrayElement.monthDuration}</p><p>hourDuration: ${coursesArrayElement.hourDuration}</p>`
let list = document.createElement('ul')
    for (const module of coursesArrayElement.modules) {
        let listElements = document.createElement('li')
        listElements.innerText = module
        list.appendChild(listElements)
    }
    itemBlock.append(title, duration, list)
    console.log(itemBlock)
    document.body.appendChild(itemBlock)
}

// створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.
let createBlock = document.createElement("div")
createBlock.classList.add('threeBlock')
createBlock.innerText = 'Hello'
let createBlock2 = document.createElement("div")
createBlock2.classList.add('threeBlock')
createBlock2.innerText = 'hello world'
let createBlock3 = document.createElement("div")
createBlock3.classList.add('threeBlock')
createBlock3.innerText = 'hello world my name is Valentyna'
document.body.append(createBlock, createBlock2, createBlock3)

let getBlocks = document.querySelectorAll('.threeBlock')
let maxHeight = [...getBlocks].reduce((acc, el) =>
    Math.max(acc, el.innerText.length), 0);
getBlocks.forEach(block => {
    block.style.height = maxHeight + "px";
});

// mikkit.com task
let musicList = document.querySelectorAll('.item-grid__item')
musicList.forEach(music => {
    let musicTitle = music.querySelector('.item-grid-card__title').innerText
    let musicAuthor = music.querySelector('.item-grid-music-preview__author').innerText
    let musicAudio = music.querySelector('[data-test-id="audio-player"]').getAttribute('data-audio-player-preview-url-value')

    let newMusic = {
        title: musicTitle,
        autor: musicAuthor,
        audio: musicAudio }

    for(key in newMusic){ console.log(`${key}: ${newMusic[key]}`) }
})


