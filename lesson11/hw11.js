// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
let cartsDiv = document.getElementById('carts')
fetch('https://dummyjson.com/carts?limit=50')
    .then(res => res.json())
    .then(cartsArray =>{
        const {carts} = cartsArray;
        console.log(carts)

        for (const cart of carts) {
           let divForCart= document.createElement('div')
            divForCart.classList.add('item')
            divForCart.innerText=`
            ID: ${cart.id}
            PRODUCTS:`
let list = document.createElement('div')
            list.classList.add('list')
            document.createElement('ul')
            let products = cart.products
            for (const product of products) {
              let productList=  document.createElement('li')
                productList.innerText=`
                    ID: ${product.id}
                    title: ${product.title}
                    price: ${product.price}
                    quantity: ${product.quantity}
                    total: ${product.total}
                    Discount Percentage: ${product.discountPercentage}
                    Discounted Total: ${product.discountedTotal}`
                let image = document.createElement('img')
                image.src = product.thumbnail
                image.style.width = '200px'
                list.append(productList , image)
                divForCart.appendChild(list)

            }

            let divForCart2 = document.createElement('div')
            divForCart2.innerText=`
            total: ${cart.total}
            discountedTotal: ${cart.discountedTotal}
            userId: ${cart.userId}
            totalProducts: ${cart.totalProducts}
            totalQuantity:  ${cart.totalQuantity}`
            let hr = document.createElement('hr')
            divForCart.appendChild(divForCart2)
            cartsDiv.append(divForCart,hr)
        }

    });

//     #whXxOBlYS0H
//--взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
let recipesDiv = document.getElementById('recipes')
fetch('https://dummyjson.com/recipes?limit=50')
    .then(res => res.json())
    .then(recipesArray =>{
        const {recipes} = recipesArray;
        console.log(recipes)

        for (const recipe of recipes) {
            let recipeBlock = document.createElement('div')
            recipeBlock.classList.add('recipeBlock')
            recipeBlock.innerHTML=`<strong> Id: ${recipe.id} <br> Name: ${recipe.name} </strong>`
             let ingredients =document.createElement('ul')
            ingredients.innerHTML ='<strong>Ingredients:</strong>'
            for (const ingredient of recipe.ingredients) {
               let ingredientList =document.createElement('li')
                ingredientList.innerText=ingredient
               ingredients.append(ingredientList)
            }
            recipeBlock.append(ingredients)
            let instructionsBlock = document.createElement('ul')
            instructionsBlock.innerHTML = '<strong>Instructions:</strong>'
            for (const instruction of recipe.instructions) {
                let instructionList = document.createElement('li')
                instructionList.innerText = instruction
                instructionsBlock.appendChild(instructionList)
            }

            let infoRecip = document.createElement('div')
            infoRecip.innerHTML = `<strong>Prep Time Minutes: </strong> ${recipe.prepTimeMinutes} <br>
        <strong>Prep time minutes: </strong> ${recipe.prepTimeMinutes}<br>
        <strong>Cook time minutes: </strong> ${recipe.cookTimeMinutes}<br>
        <strong>Servings: </strong> ${recipe.servings}<br>
        <strong>Difficulty: </strong> ${recipe.difficulty}<br>
        <strong>Cuisine: </strong> ${recipe.cuisine}<br>
        <strong>Calories per serving: </strong> ${recipe.caloriesPerServing}<br>
        <strong>Tags: </strong> ${recipe.tags.join(', ')}  <br>
        <strong>userId: </strong> ${recipe.userId} <br>
        <strong>Rating: </strong> ${recipe.rating}   <br>      
        <strong>Meal type: </strong> ${recipe.mealType.join(', ')} `
            let recipeImg = document.createElement('div')
            let imgRecipes = document.createElement('img')
            imgRecipes.src = recipe.image
            imgRecipes.style.width = '200px'
            imgRecipes.style.height = '200px'
            recipeImg.appendChild(imgRecipes)
            recipeBlock.append(ingredients,instructionsBlock,infoRecip,recipeImg)
            recipesDiv.appendChild(recipeBlock)
        }


    });
for (let i = 0; i < recipesDiv.length; i++) {
    const recipesDivElement = recipesDiv[i];
    
}