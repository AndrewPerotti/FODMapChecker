let badFoods = ["apple", "mango", "nashi", "pear", "canned fruit natural juice", "watermelon", "fructose", "high fructose corn syrup", "corn syrup", "honey", "concentrated fruit", "dried fruit", "fruit juice", "cow milk", "goat milk", "sheep milk", "custard", "ice cream", "yogurt", "soft cheese", "unripened cheese", "cottage cheese", "cream cheese", "mascarpone", "ricotta", "asparagus", "beetroot", "broccoli", "brussels sprout", "cabbage", "eggplant", "fennel", "garlic", "leek", "okra", "onion", "shallot", "what cereal", "rye cereal", "wheat bread", "rye bread", "wheat cracker", "rye cracker", "wheat cookie", "rye cookie", "wheat couscous", "rye couscous", "wheat pasta", "rye pasta", "custard apple", "persimmon", "watermelon", "chicory", "dandelion", "inulin", "beans", "baked beans", "chick peas", "kidney beans", "lentils", "apple", "apricot", "avocado", "blackberry", "cherry", "lychee", "nashi", "nectarine", "peach", "pear", "plum", "prune", "watermelon", "green bell pepper", "mushroom", "sweet corn", "sorbitol", "mannitol", "isomalt", "maltitol", "xylitol"]


/* Using edamam api to get ingredient arrays back after typing in a dish name */
let button = document.querySelector("button")
button.addEventListener('click', searchResults)

function searchResults(e){
  /* reset values before each instance of the function running */
  document.querySelector("#result").innerText = "";
  document.querySelector("#detailedResponse").innerText = "";
  /*prevent buttons default behavior and set a variable equal to user input */
  e.preventDefault();
  /* save user input as a variable */
  let userDish = document.querySelector("input").value
  /* api request */
  let url = "https://api.edamam.com/api/recipes/v2?type=public&q=" + `${userDish}` + "&app_id=c43ffafe&app_key=82072d26043fd563e1a68318f7ddbd70&field=ingredientLines";
  fetch(url)
    .then(res=>res.json())
    .then(data=>{
      /* save ingredient list as a vairable */
      let dishIngredients = data.hits[0].recipe.ingredientLines;
    /* Loop through ingredients and check if they contain any bad foods*/
      for(let i = 0; i<dishIngredients.length; i++){
        for(let j = 0; j<badFoods.length; j++){
          /* if they do include bad ingredients then display "bad" after result, and list the suspect ingredient */
          if(dishIngredients[i].includes(badFoods[j])){
            document.querySelector("#result").innerText = "bad";
            document.querySelector("#detailedResponse").innerText += dishIngredients[i]
          }
        }
      }
  })
    .catch(err=>console.log(err))
}