const mongoose = require('mongoose');
const data = require('./data.js'); 
//I create the variable to recibe the model's data
const Recipe = require('./models/Recipe');

//connection to the DB:
mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

//Iteration 2 - Create a recipe
Recipe.create({
    title: 'Pizza Hawaiana',
    level: 'Easy Peasy',
    ingredients: ['pasta', '3 tomatoes', 'pinapple', '1/3 cup olive oil', 'cheese'],
    cuisine: 'Italian',
    dishType: ['Dish'],
    duration: 35,
    creator: 'Chef Paola'
  })
  .then(recipe => console.log(` Recipe added to the Data Base: ${ recipe.title }`))
  .catch(err => console.log(` An error ocurred: ${err}`));

//Iteration 3 - Insert multiple recipes
//Insert the data to the Model

Recipe.insertMany(data)
  .then(food => console.log(` this is: ${food}`)) 
  .catch(error => console.log(` An error ocurred: ${error}`));


//Iteration 4 - Update recipe

Recipe.findOneAndUpdate({title: 'Rigatoni alla Genovese'}, {duration: 100}, {new: true})
  .then (recipe => console.log(`${recipe} has been updated`))
  .catch(err => console.log(` An error ocurred: ${err}`));


//Iteration 5 - Remove a recipe
/* According to stackOverflow: Remove() is deprecated 
and you can use deleteOne(), deleteMany(), 
or bulkWrite() instead.  */
Recipe.deleteOne({ title: 'Carrot Cake'})
  .then(recipe => console.log('The recipe is no longer available'))
  .catch(err => {console.log(` An error happened: ${err}`)});
 