![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Mongoose Recipes

## Introduction

![thai_style_chicken_noodle_soup_pieces_recipe_web](https://user-images.githubusercontent.com/23629340/38369283-ac1bda62-38e7-11e8-9c9b-d9df623f1bc3.jpg)

<<<<<<< HEAD
We learned how to use Mongoose to create Schemas and then interact with our MongoDB database. In the following exercise, we will practice how to implement this by creating awesome recipes.
=======
We've learned how to use Mongoose to create Schemas and then interact with our MongoDB database. In the following exercise, we will practice how to implement this by creating awesome recipes.
>>>>>>> 37c210df82e4a56b00727af668b29f623f5e1055

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
<<<<<<< HEAD
  git commit -m "done"
=======
  git commit -m "Completed lab"
>>>>>>> 37c210df82e4a56b00727af668b29f623f5e1055
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

<<<<<<< HEAD

=======
>>>>>>> 37c210df82e4a56b00727af668b29f623f5e1055
## Instructions

### Iteration 1 - Recipe Schema

<<<<<<< HEAD
The `recipes.js` file already connects to the **recipesApp** database. Now we need to create a `Recipe` Schema. The schema should have the following fields:

- **title**. Type `String`. It should be required and unique.
- **level**. Type `String`. Only can be one of the following values: *Easy Peasy* - *Amateur Chef* - *UltraPro Chef* (remember the ENUM :wink:)
- **ingredients**. Type `Array`.
- **cuisine**. Type `String`. Should be required.
- **dishType**. Type `String`. Possible values: *Breakfast* - *Dish* - *Snack* - *Drink* - *Dessert* - *Other*.
- **image**. Type `String`. Default value: *https://images.media-allrecipes.com/images/75131.jpg*.
- **duration**. Type `Number`. Min value should be 0.
- **creator**. Type `String`
- **created**. Type `Date`. By default today.

### Iteration 2 - Create a recipe

Using the `Model.create` method, you should pass the info to create a new recipe. After the creation, you can use MongoDB Shell to check everything goes ok. After inserting the recipe, you should `console.log` the `title` of the recipe.

**To run your code, remember you should use `$ node recipes.js`.**

### Iteration 3 - Insert Many recipes

Form the `data.js` file we are importing an array of recipes. Using the `Model.insertMany` method, you should add the entire array to the database. After inserting the elements, print on the console the title of each recipe.

### Iteration 4 - Update recipe

Now you should have six different recipes in the database, but there was a mistake in one of them. The **Rigatoni alla Genovese** does not take that long. You should update the `duration` field and set it to **100**. After updating it, print a success message!

### Iteration 5 - Remove a recipe

Oh oh! The `Carrot Cake` is no longer available, so we need to remove it from the database. Using the `Model.remove` method, remove that recipe from the database and display a success message after doing it!

### Iteration 6 - Close the Database

After doing all the task you should close the database. Otherwise, the connection will keep open. Be careful about the asynchrony of all process; you should close it after everything is done! :wink:


Happy coding! :heart:
=======
Create a `Recipe` model inside of the file `/models/Recipe.model.js`. The schema should have the following fields:

- **title** - Type `String`. It should be required and unique.
- **level** - Type `String`. Can be one of the following values: _Easy Peasy_ - _Amateur Chef_ - _UltraPro Chef_ (remember the `enum` validator :wink:).
- **ingredients** - Type `Array` of `String`s (represented as `[ String ]`).
- **cuisine** - Type `String`. Should be required.
- **dishType** - Type `String`. Possible values: _breakfast_, _main_course_, _soup_, _snack_, _drink_, _dessert_ or _other_.
- **image** - Type `String`. Default value: _"https://images.media-allrecipes.com/images/75131.jpg"_.
- **duration** - Type `Number`. The minimum value should be 0.
- **creator** - Type `String`.
- **created** - Type `Date`. By default, today.

### Iteration 2 - Create a recipe

In `index.js`, after the connection to the database has been established, you should add a new recipe document to the database by calling the [`Model.create`](https://mongoosejs.com/docs/api.html#model_Model.create) static, passing it the recipe details as an object. After inserting the recipe, you should `console.log` the `title` of the recipe.

You can use MongoDB Compass to double check that everything is working as intended.

**To run your code, remember you should use:**

```shell
$ node index.js
```

Tip: For now, you might want to comment out any `unique` requirement from the schema

### Iteration 3 - Insert multiple recipes

We are importing an array of recipes form the `data.json` file. Using the [`Model.insertMany`](https://mongoosejs.com/docs/api.html#model_Model.insertMany) static, you should add the entire array to the database. After inserting the documents, print the title of each recipe to the console.

### Iteration 4 - Update recipe

Now you should have six different recipes in the database, but there was a mistake in one of them. The **Rigatoni alla Genovese** does not take that long. You should update the `duration` field and set it to **100**. You might want to use the [`Model.findOneAndUpdate`](https://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate) static. After updating it, print a success message!

### Iteration 5 - Remove a recipe

Oh oh! The `Carrot Cake` is no longer available, so we need to remove it from the database. Using the [`Model.deleteOne`](https://mongoosejs.com/docs/api.html#model_Model.deleteOne) static, remove that recipe from the database and display a success message after doing it!

### Iteration 6 - Close the Database

After completing every task, you need to close the database. Otherwise, the connection will stay open until the node.js process dies. Pay attention to the asynchronicity of the operation. You should only close the connection after everything is done! :wink:

Happy coding! 💙
>>>>>>> 37c210df82e4a56b00727af668b29f623f5e1055
