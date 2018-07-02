![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# Axios and functional programming

## Introduction

The goal of this exercise is to play with the data given by a fake REST API about actors.

### The API

We will play with a fake API that gives infromation about actors. 

This API has only 3 endpoints:
- [`GET /page-1.json`](https://raw.githubusercontent.com/mc100s/training-labs-react/master/src/lab-axios-functional-programming/page-1.json)
- [`GET /page-2.json`](https://raw.githubusercontent.com/mc100s/training-labs-react/master/src/lab-axios-functional-programming/page-2.json)
- [`GET /page-3.json`](https://raw.githubusercontent.com/mc100s/training-labs-react/master/src/lab-axios-functional-programming/page-3.json)

The base URL of this API is: https://raw.githubusercontent.com/mc100s/training-labs-react/master/src/lab-axios-functional-programming


### The files `api.js` and `dom-manipulation.js`

`api.js` is the file where you will need to code your calls to the API.

`dom-maninpulation.js` is the file that use `api.js` to manipulate the API.  The only thing you can change in this file is the variable `page` at the top.


### Expectations

You will find the example of what you should have in the file [`expectations.html`](starter-code/expectations.html)

![](https://i.imgur.com/qwwac64.png)

## Instructions

### Iteration 1

Let's do this iteration together :) 

The goal is to code the function `getTotalResults` from the file `api.js`. This function is reused in `dom-manipulation.js`.

First, understand what this function is doing.

```js
// From api.js
let service = axios.create({
  baseURL: "https://raw.githubusercontent.com/mc100s/module-3-react/master/labs/lab-axios-functional-programming/" 
})

// From api.js
function getTotalResults(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    // TODO: Iteration 1
    return response.data
  })
}

// From dom-manipulation.js
let page = 1

// From dom-manipulation.js
getTotalResults(page)
.then(updateTheDom("getTotalResults"))

// From dom-manipulation.js
function updateTheDom(elementId) {
  return (result) => {
    document.getElementById(elementId).innerHTML = JSON.stringify(result, null, 2)
  }
}
```

If we replace `updateTheDom` by its return value, this is what we have:
```js
let service = axios.create({
  baseURL: "https://raw.githubusercontent.com/mc100s/module-3-react/master/labs/lab-axios-functional-programming/" 
})

function getTotalResults(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    return response.data
  })
}

let page = 1

getTotalResults(page)
.then(result => {
    document.getElementById("getTotalResults").innerHTML = JSON.stringify(result, null, 2)
  }
})
```

Now, if we replace `getTotalResults` by its return value, this is what we have:
```js
let service = axios.create({
  baseURL: "https://raw.githubusercontent.com/mc100s/module-3-react/master/labs/lab-axios-functional-programming/" 
})

let page = 1

service.get(`page-${page}.json`)
.then(response => {
  return response.data
})
.then(result => {
  document.getElementById("getTotalResults").innerHTML = JSON.stringify(result, null, 2)
})
```

Now it's easier to understand:
1. We use the API by calling `GET page-1.json` (you can do the same with your browser by going [here](https://raw.githubusercontent.com/mc100s/module-3-react/master/labs/lab-axios-functional-programming/page-1.json))
2. We give to the next promise the value `response.data`, that represents the JSON sent by the API
3. We select the DOM element with the ID `getTotalResults` and we set its content to the value we have.

That's why if you haven't modified the code yet, you should see the all JSON on the `index.html` page.

![](https://i.imgur.com/rYsVbVd.png)


Here, the only part that we want to display is the property `total_results` from the JSON.

That's why we can code the `getTotalResults` like this:

```js
function getTotalResults(page) {
  return service.get(`page-${page}.json`)
  .then(response => {
    return response.data.total_results
  })
}
```

### Iteration 2

In `api.js`, modify the code of `getFirstResultName` so it gives a promise with the name of the first actor.

![](https://i.imgur.com/Cx6OeOc.png)



### Iteration 3

In `api.js`, modify the code of `getNames` so it gives a promise with the array of names of the actors. For that we recommand you to use a `map`.

![](https://i.imgur.com/ViCh1e3.png)



### Iteration 4

In `api.js`, modify the code of `getIdsAndNames` so it gives a promise with the array of "ids and names" like in the following example.

![](https://i.imgur.com/jTps66E.png)



### Iteration 5

In `api.js`, modify the code of `getSortedNames` so it gives a promise with the array of names sorted by lexicographical order.

![](https://i.imgur.com/9cjdJL6.png)


### Iteration 6

In `api.js`, modify the code of `getNamesFiltered` so it gives a promise with the array of names that contains a `searchTerm`. Be careful, the search should be case insensitive.

![](https://i.imgur.com/JmodMh6.png)

### Iteration 7 (bonus)

In `api.js`, modify the code of `getActorNamesWithTheirKnownForMovies` so it gives a promise with the array of "actor names and their know_for movies".

![](https://i.imgur.com/ul9TSyq.png)


### Iteration 8 (bonus)

In `api.js`, create from scratch a function `getKnownForMovies` that will get all the `know_for` movies and find a way to display it in your HTML page.