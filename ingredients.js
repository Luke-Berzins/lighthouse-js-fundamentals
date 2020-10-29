const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

console.log("While loop:");
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}
// Write a for loop that prints out the contents of ingredients:
console.log("For loop:");
  for (i = 0; i < ingredients.length; i++) {
    console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

ingredients.reverse();
let j = 0;
console.log("While loop backwards:");
  while (j < ingredients.length) {
    console.log(ingredients[j]);
    j++;
}

console.log("For loop backwards:");
  for (j = 0; j < ingredients.length; j++) {
    console.log(ingredients[j]);
}