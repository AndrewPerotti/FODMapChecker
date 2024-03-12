## FODMAP Checker App

I wanted to make a simple app that could tell a user if their entered food was <a href="https://www.hopkinsmedicine.org/health/wellness-and-prevention/fodmap-diet-what-you-need-to-know">FODMap</a> friendly. I suffer from a colitis issue myself and thought a simple tool would be beneficial for myself and others.

**Link to project:** https://flourishing-gaufre-b99432.netlify.app/

![Screenshot of the FODMAP Checker APP](https://i.ibb.co/YQ0h6H7/fodmap.png)

## How It's Made:
**Tech used:** HTML, CSS, JavaScript, edmam.com API

This is super simple in regards to HTML and CSS, however, I was learning to use APIs so my focus went mainly into JavaScript. 
Initially, I had an app that would only work when a user entered a single ingredient, for example: "oat", or "egg". I had hard-coded 2 arrays, one of fodmap-friendly foods, and the other of fodmap-unfriendly foods.
I decided it would be perfect to just have users be able to enter a dish name, like "chicken lasagna", and return a list of bad fodmap food ingredients typically used in that dish.

## Optimizations

I could rewrite the app to take in ingredients, like "eggs", again and check against the bad foods array before requesting an object from the edmam.com API. 
I probably use some kind of API for checking the spelling of input words from users and suggest the correct spelling.
I should have the app tell a user if no recipe was found. Edit: done.
Likewise, I should provide a link to the recipe edmam.com is referencing. Edit: I have added the dish name of what the api is returning and using to populate an ingredient list.
I could have the dish name be a specific color depending on if the dish is completely fodmap friendly (maybe green) vs when it is not (maybe red).
I see that the edamam api returns a more advanced api string with a link to the recipe, and with images. I hope to in the future display a link to the recipe chosen as well as...
I hope to add functionality so you can paste a recipe into the search field and the js will return what ingredients from your provided url are bad, hoping that I can use the same api for this ability..



## Lessons Learned

A simple app is never really simple to developers, is it? Just look above at potential ways of improvement I thought of in 5 minutes of typing this README.md. APIs are great, you just need to look over and understand their documentation first because there are so many variables.



