let goodFoods = ['banana', "blueberry", "boysenberry", "canteloupe", "cranberry", "durian", "grape", "grapefruit", "honeydew", "kiwi", "lemon", "lime", "mandarin", "orange", "passionfruit", "pawpaw", "raspberry", "rhubarb", "rockmelon", "star anise", "strawberry", "tangelo", "sucrose", "glucose", "sugar", "maple syrup", "molasse", "treacle", "alfalfa", "artichoke", "bamboo shoot", "beat shoot", "bok choy", "carrot", "celery", "choko", "choy sum", "endive", "ginger", "green bean", "lettuce", "olive","parsnip", "potato", "pumpkin", "red bell pepper", "silver beet", "spinach", "summer squash", "yellow summer squash", "swede", "sweet potato", "taro", "tomato", "turnip", "yam", "zucchini", "gluten free bread", "gluten free cereal", "spelt bread", "rice", "oat", "polenta", "arrowroot", "millet", "psyliium", "quinoa", "sorgum", "tapioca", "oat milk", "rice milk", "soy milk", "lactose free milk", "hard cheese", "brie", "camembert", "lactose free yogurt", "gelati", "sorbet", "olive oil", "egg"]

let badFoods = ["apple", "mango", "nashi", "pear", "canned fruit natural juice", "watermelon", "fructose", "high fructose corn syrup", "corn syrup", "honey", "concentrated fruit", "dried fruit", "fruit juice", "cow milk", "goat milk", "sheep milk", "custard", "ice cream", "yogurt", "soft cheese", "unripened cheese", "cottage cheese", "cream cheese", "mascarpone", "ricotta", "asparagus", "beetroot", "broccoli", "brussels sprout", "cabbage", "eggplant", "fennel", "garlic", "leek", "okra", "onion", "shallot", "what cereal", "rye cereal", "wheat bread", "rye bread", "wheat cracker", "rye cracker", "wheat cookie", "rye cookie", "wheat couscous", "rye couscous", "wheat pasta", "rye pasta", "custard apple", "persimmon", "watermelon", "chicory", "dandelion", "inulin", "beans", "baked beans", "chick peas", "kidney beans", "lentils", "apple", "apricot", "avocado", "blackberry", "cherry", "lychee", "nashi", "nectarine", "peach", "pear", "plum", "prune", "watermelon", "green bell pepper", "mushroom", "sweet corn", "sorbitol", "mannitol", "isomalt", "maltitol", "xylitol"]

const foodInput = document.querySelector("#entry");
const result = document.querySelector("#result");
const form = document.querySelector("form")

form.addEventListener("submit", e=>{
  e.preventDefault();
  if(goodFoods.includes(foodInput.value.toLowerCase())){
    result.innerText = "Good";
    result.style.color = "lightgreen"
  }else if(badFoods.includes(foodInput.value.toLowerCase())){
    result.innerText = "Bad";
    result.style.color = "orange";
  }else{
    result.innerText = "Uncertain";
    result.style.color = "white";
  }
})

//Initial work on functionality of dishes which uses allrecipes.com to get ingredients and then checks against those.
// form.addEventListener("submit", e=>{
//   e.preventDefault();
//   //take in input
//   //search allrecipes.com for a page for the dish that was input'ed
//   const ingredients =  document.querySelectorAll('span[data-ingredient-name]:not([data-ingredient-name=""||data-ingredient-name="false"])').value
//   for(let i = 0; i < ingredients.length; i++){
//     if(goodFoods.includes(ingredients[i])){

//     }else if(badFoods.includes(ingredients[i])){

//     }
//   }
// })