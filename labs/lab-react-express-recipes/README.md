![ck Logo](https://i.imgur.com/1QgrNNw.png)

# React & Express API | MyRecipeBook

## Introduction

![](https://camo.githubusercontent.com/38e5628f6fa389ad6f84297ec1bfafb2ee2118b8/68747470733a2f2f73332d65752d776573742d312e616d617a6f6e6177732e636f6d2f69682d6d6174657269616c732f75706c6f6164732f75706c6f61645f61653566646634623732303861386130396532346533306536383234383630662e6a7067)

Cooking is hard, but you know what's harder? Remembering recipes. Remember that one time you made that amazing dish and forgot what ingredients go into it? It's a terrible feeling.

In this exercise, we'll make a an application to keep track of your favorite recipes so you never have this disappointing experience again.

This application can apply to food or dishes, so feel free to alter the language accordingly.


## Instructions

You are going to make from scratch a web application recipe book with two parts: the front-end in React.js (Client) and the back-end in Express (Server).

### Client

The users that go on your websites will have access to 4 possible routes:
- `/`: Redirect the user to `/dishes`
- `/dishes`: Display a list of all dishes, with a link 
- `/dishes/:dishId`: Display the recipe of a specific dish, with the descriptions and all it's ingredients
- `/new-dish`: Display a form page to add a new dish

**Example of page seen on "/dishes"**
![/dishes](https://i.imgur.com/qw1ADPz.png)


**Example of page seen on "/dishes/598c147d82ff710a38fd6027"**
![/dishes/:dishId](https://i.imgur.com/SFRNUFe.png)



### Server

You are going to create your own Rest API with Express. For that, 2 models are going to be needed: `Ingredient` and `Dish` 

```javascript
// server/models/ingredient.js
// ...
const IngredientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  unity: String
});
module.exports = mongoose.model('Ingredient', IngredientSchema);
```

```javascript
// server/models/dish.js
// ...
const DishSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required']
  },
  description: {
    type: String,
    required: [true, 'description is required']
  },
  image: String,
  ingredients: [
    {
      ingredient: {
        type: Schema.Types.ObjectId,
        ref: 'Ingredient'
      },
      quantity: Number,
      _id: false
    }
  ]
});
module.exports = mongoose.model('Dish', DishSchema);
```

For your API, you can create the following endpoints:
- `GET  /api/dishes`: Returns all dishes with only their id, names and images
- `GET  /api/dishes/:dishId`: Returns all information on a specific dish
- `PUT  /api/dishes/:dishId`: Updates a specific dish
- `POST /api/dishes`: Creates a new dish

To help you creating the database, there are 2 files with some data: _data/dishes.json_ and _data/ingredients.json_


## Iterations

### Iteration 1 | Creating your first endpoint

To start, you will create an endpoint to list all dishes.

For that, you can:
- Initialize a new Express project inside _starter-code/server/_ folder
- Create your models `Dish` and `Ingredient`
- Populate your database with _data/dishes.json_ and _data/ingredients.json_ 
- Create the endpoint `GET /api/dishes`.

At the end of this iteration, you should see the following result when you go on  `localhost:3000/api/dishes`:

```json5
[
  {
    "_id": "598c147d82ff710a38fd6027",
    "name": "Pizza",
    "image": "https://i.imgur.com/eTmWoAN.png",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "_id": "598c147d82ff710a38fd6029",
    "name": "Sweet Potato",
    "image": "https://i.imgur.com/hGraGyR.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  // ...
]
```


### Iteration 2 | Listing dishes

Having a link to see all dishes in a JSON is a first good step and now we are going to use a React application. That's why we are now creating a dishes page (`/dishes`) that will display all dishes in a list, with their names and images.

In that iteration, we recommand you to:
- Initialize a React application in _starter-code/client/_ folder
- Create a component that will be displayed on the following path `/dishes` 
- Fetch and display the dishes from `GET /api/dishes`
- Redirect the home page (`/`) to `/dishes`


### Iteration 3 | Show one dish details

You now have a list of dishes, it's time to link them to a detail page.

On your list of dishes page, create a link to `/dishes/:dishId` that displays the name, the image and the description of a specific dish. You should also create an "_Edit description_" button just after your description.


### Iteration 4 | Edit the description of a dish

In this iteration, we are going to edit the description without changing the page!

In term of user experience, the scenario should be the following:
- The user clicks on the "_Edit description_" button
- The text description is changed by a textarea with the description inside it add the button is changed by "_Save description_"
- When the user clicks on "_Save description_", it replaces the textarea by a simple paragraph, the "_Edit description_" button comes back and the new description must be saved

For that, you will probably need to create a `PUT /api/dished/:dishId` endpoint.


### Iteration 5 | List all ingredients

A dish detail page is nice, but we're missing one important piece: *ingredients*.

Over the next two iterations, we're going to add functionality to add ingredients to our dishes.

The first step in doing so is going to be displaying a list of possible ingredients on the recipe's page. For that, you will need to:
- Add an API endpoint `GET /api/ingredients` that displays all ingredients 
- Use this endpoint to display all your ingredients in your dish detail page (`/dishes/:dishId`)

In your list of all ingredients, you should display:
- The ingrendient's **name**
- A number input (will be used in the next iteration)
- The **unity**
- A "Add ingredient" button (will be used in the next iteration)


### Iteration 6 | Add ingredient to dish

Create a function in the single dish component. When someone clicks the "Add ingredient" button from the previous iteration, it should add the ingredient to the dish and display it.

Do 

The request should be done inside of your dish service.

The API endpoint is a POST to `'/drinks/:drinkId/ingredients/:id/add'`. It also takes in a parameter for `quantity` in the body, which is a number.

Add a list of a dish's ingredients to the single dish component. Upon successfully adding the ingredient to the dish, display the ingredient in the list.


### Iteration 7 | Bonus | Creating New Ingredients & Dishes

Create a new route for adding new dishes. Add a link in the home page to display a form. This form will make a POST request to `/dishes` with a `name`, `image`, and `description`.

In addition, create a route on the home page to display a form to create a new ingredient. The route is a POST to `/ingredients`, and takes a `name`, `image`, and `description` in the body.

