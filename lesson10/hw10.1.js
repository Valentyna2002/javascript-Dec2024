let time = new Date().toLocaleString()
let session = JSON.parse(localStorage.getItem('session')) || [];
session.push(time)
localStorage.setItem('session', JSON.stringify(session));

let list = document.getElementById('sessionList');


session.forEach(item => {
    let li = document.createElement('li');
    li.innerText = item;
    list.appendChild(li);
});


// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM