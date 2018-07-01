![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# React Components & Bulma

## Introduction

Do you know [Bulma](https://bulma.io), a very nice alternative to Bootstrap as a CSS framework? We are going to create a simple website with Bulma and React!


You can find the starter code in the starter code folder of this Github repo.


## Installation 

### Setup a basic project
Commands to launch
```sh
$ npm install -g create-react-app # Install globally the `create-react-app` command
$ create-react-app starter-code # Create a React project folder "starter-code"
$ cd starter-code
$ rm -f src/*
$ touch src/index.js src/index.css # Create 2 files
```

Your `src/index.js` file
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* Your application code */}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

### Bulma installation
```
$ npm install --save bulma
```

```javascript
import 'bulma/css/bulma.css';
```


## Instructions

### Iteration 1 | `Button` Component

The goal is to create a component called `Button` that creates a `<button>` with the nice Bulma classes.

You will find the Bulma buttons documentation here: https://bulma.io/documentation/elements/button/

```html
<!-- JSX version -->
<Button isSmall isDanger className="is-rounded my-class">Button 1</Button>
<Button isSmall isSuccess>Button 2</Button>
```
```html
<!-- What is rendered in the DOM -->
<button class="button is-rounded my-class is-danger is-small">Button 1</button>
<button class="button is-small is-success">Button 2</button>
```

What is visually rendered

![](https://i.imgur.com/qrfQG18.png)

 
Because there are many cases to code, focus on the following classes: `is-primary`, `is-success`, `is-danger`. 

If you need any help, you can have a look how to take the content between an opening tag and a closing tag: [Children in JSX](https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx)

#### Bonus

If you want, you can do all the cases by using the following object:

```javascript
{
  isActive: 'is-active',
  isBlack: 'is-black',
  isCentered: 'is-centered',
  isDanger: 'is-danger',
  isDark: 'is-dark',
  isFocused: 'is-focused',
  isGrouped: 'is-grouped',
  isHovered: 'is-hovered',
  isInfo: 'is-info',
  isInverted: 'is-inverted',
  isLarge: 'is-large',
  isLight: 'is-light',
  isLink: 'is-link',
  isLoading: 'is-loading',
  isMedium: 'is-medium',
  isOutlined: 'is-outlined',
  isPrimary: 'is-primary',
  isRight: 'is-right',
  isRounded: 'is-rounded',
  isSelected: 'is-selected',
  isSmall: 'is-small',
  isStatic: 'is-static',
  isSuccess: 'is-success',
  isText: 'is-text',
  isWarning: 'is-warning',
  isWhite: 'is-white',
}
```


### Iteration 2 | `Navbar` Component

Create a `Navbar` component, very simple, that displays a link to "Home", "Login" and "Signup" like in the following example:

![](https://i.imgur.com/dMaNMeM.png)

For the "Login" and "Signup" button, you will have to reuse your `Button` React component.

To help you, you can use the code from the [Bulma Transparent Navbar](https://bulma.io/documentation/components/navbar/#transparent-navbar).

In the end, you will just need to write `Navbar` in your JSX to display your navbar.


### Iteration 3 | `FormField` Component

Now it's time to create a new component `FormField` we will use multiple times in the future.



```html
<!-- JSX version -->
<FormField label="Name" type="text" placeholder="e.g Alex Smith" />
<FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
```
```html
<!-- What is rendered in the DOM -->
<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="e.g Alex Smith">
  </div>
</div>
<div class="field">
  <label class="label">Email</label>
  <div class="control">
    <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
  </div>
</div>
```

What is visually rendered

![](https://i.imgur.com/8sKyKxI.png)

### Iteration 4 | A Signup Page

<!-- TODO: make a screenshot of that page and overlay the different components -->

Create a Signup page that contains:
- `Navbar`
- A form
  - A name `FormField`
  - An email `FormField`
  - A password `FormField`
  - A signup `Button`


### Iteration 5 | Bonus

Before contunuing, ask for feedback from one of your teachers, he will give you a feedback about what you've done.

Then, you can:
- Refactor your code
- Create a `Container` component (for the class "container")
- Create a `Message` component, like explained just after

####  Message Component

Now, we are going to create `Message` component. You can find the documentation on Bulma's website: https://bulma.io/documentation/components/message/

```html
<!-- JSX version -->
<Message isInfo title="Hello World">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
</Message>
```

What is visually rendered

![](https://i.imgur.com/qmD2Nkb.png)

