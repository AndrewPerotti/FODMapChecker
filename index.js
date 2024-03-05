let badFoods = ["apple", "mango", "nashi", "pear", "canned fruit natural juice", "watermelon", "fructose", "high fructose corn syrup", "corn syrup", "honey", "concentrated fruit", "dried fruit", "fruit juice", "cow milk", "goat milk", "sheep milk", "custard", "ice cream", "yogurt", "soft cheese", "unripened cheese", "cottage cheese", "cream cheese", "mascarpone", "ricotta", "asparagus", "beetroot", "broccoli", "brussels sprout", "cabbage", "eggplant", "fennel", "garlic", "leek", "okra", "onion", "shallot", "what cereal", "rye cereal", "wheat bread", "rye bread", "wheat cracker", "rye cracker", "wheat cookie", "rye cookie", "wheat couscous", "rye couscous", "wheat pasta", "rye pasta", "custard apple", "persimmon", "watermelon", "chicory", "dandelion", "inulin", "beans", "baked beans", "chick peas", "kidney beans", "lentils", "apple", "apricot", "avocado", "blackberry", "cherry", "lychee", "nashi", "nectarine", "peach", "pear", "plum", "prune", "watermelon", "green bell pepper", "mushroom", "sweet corn", "sorbitol", "mannitol", "isomalt", "maltitol", "xylitol"]


//Using edamam api to get ingredient arrays back after typing in a dish name 
let button = document.querySelector("button")
button.addEventListener('click', searchResults)//When 'search' button is clicked invoke function which uses user input value

//function declaration of function that runs when button is clicked by user
function searchResults(e){
  // reset values before each instance of the function running 
  document.querySelector("#result").innerText = "";
  document.querySelector("#detailedResponse").innerText = "";
  //prevent buttons default behavior and set a variable equal to user input 
  e.preventDefault();
  // save user input as a variable 
  let userDish = document.querySelector("input").value
  // api request 
  let url = "https://api.edamam.com/api/recipes/v2?type=public&q=" + `${userDish}` + "&app_id=c43ffafe&app_key=82072d26043fd563e1a68318f7ddbd70&field=ingredientLines";
  fetch(url)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.count==0){ //if no recipe returned
        document.querySelector("#result").innerText = "no recipe found"
      }else{//populate ul with bad ingredient li's
        //list the dish's name in the <h3>
        fetch(data.hits[0]["_links"]["self"]["href"])
          .then(res=>res.json())
          .then(data=>document.querySelector('h3').innerText = data.recipe.label)
          .catch(err=>console.log(err))

        // save first recipe's ingredient list as a variable
        let dishIngredients = data.hits[0].recipe.ingredientLines;
        // Loop through ingredients and check if they contain any bad foods
        for(let i = 0; i<dishIngredients.length; i++){//loop over dish ingredients
          for(let j = 0; j<badFoods.length; j++){ //loop over bad fodmap food array and check current dish ingredient
            // if they do include bad ingredients then display "bad" after result, and list the suspect ingredients in list items in the ul classed with 'detailedResponse' 
            if(dishIngredients[i].includes(badFoods[j])){
              document.querySelector("#result").innerText = "bad";

              let li = document.createElement('li')
              li.appendChild(document.createTextNode(`${dishIngredients[i]}`))
              document.querySelector('#detailedResponse').appendChild(li)
            }
          }
        }
        //check if there are any list items, if not then tell user their input might be a good dish, aka no ingredients found to be bad according to logic
        if(document.querySelector('ul').childElementCount == 0){
          document.querySelector('#result').innerText = "Possible Safe"
        }
      }
  })
    .catch(err=>console.log(err))
}
