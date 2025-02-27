// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
function deepCopy (obj) {
if (obj === undefined) return undefined;
if (obj === null) return null;
if (Number.isNaN(obj)) return NaN;
if (obj){
    let addFunction = []
    for (const key in obj) {
        if (typeof obj[key] === 'function') {
            let newFunction = obj[key].bind({});
            addFunction.push({newFunction,key});
        }
    }
   let  copyObj = JSON.parse(JSON.stringify(obj))
    for (const func of addFunction) {
        copyObj[func.key] = func.newFunction;
    }
    console.log(copyObj);
    return copyObj;

}
    throw new Error('!!!!!');
}

const clone = deepCopy({ name: "Олександр",
    age: 28,
    email: "alex@example.com",
    isAdmin: false,
    address: {
        city: "Київ",
        zip: "01001"
    },
    greeting(){
        console.log('hello world')},
   foo(){
            console.log('bar')}})
console.log(clone)
//
// #iz6emEsP2BA
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let newCoursesArray = coursesAndDurationArray.map((courses, index)=>({...courses, id: index+1}))
console.log(newCoursesArray)
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції