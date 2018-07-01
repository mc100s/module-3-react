![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# IronContacts

## Introduction

After Ironhack, you have decided to work in the movie industry and you've found a job where you need to manage the contacts of a famous producer.

We are going to create contact management app with React for this producer.

You can find the starter code in the starter code folder of this Github repo.

## Installation 

### Setup a basic project
Commands to launch
```sh
$ npm install -g create-react-app # Install globally the `create-react-app` command
$ create-react-app my-app # Create a React project folder "my-app"
$ cd my-app
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


## Instructions

### Iteration 1 | Display 5 Contacts

Let's take a look at the starter code.

There is a JSON file with the producer contacts, named `contacts.json`. Import it and display only the 5 first contacts in a `<table>` and display the `picture`, `name`, and `popularity` of each contact.

To import it, in the `src/index.js`, you can simply write:
```js
import contacts from './contacts.json'
```

At the end of this iteration, your application should look like this:

![Screenshot](https://i.imgur.com/fPuwZXv.png)


### Iteration 2 | Add New Random Contacts

In your application, create a "*Add Random Contact*, so that every time you click on this button, it adds a new random actor. 

At the end of this iteration, your website will probably look like this:

![Screenshot](https://i.imgur.com/GuNyYiU.png)


### Iteration 3 | Sort Contacts By Name And Popularity

The producer asked you to add two new buttons to help him sorting his contacts. Create them so that when you click on it, it sorts the table on the `name` or `popularity` field.

This is what you may have at the end of this iteration:

![Screenshot](https://i.imgur.com/vUDGZ7Y.png)


### Iteration 4 | Remove Contacts

The producer also would like to have the opportunity to remove some of its contacts. Implement a "*Delete*" button on each row of your `<table>` that will let the user remove some contacts.

At the end of this iteration, your web page may look like this after playing a little bit with the "*Delete*" buttons.

![Screenshot](https://i.imgur.com/N3K1K1k.png)


### Iteration 5 | Bonus | Styling

Unfortunately, this contacts list isn't really production ready. So make it fancy!



## Hints

Have a look at hints only if you are stuck for several minutes. All the code is encoded in Base64 and can be decoded here: https://www.base64decode.org/

### Iteration 1 | Display 5 Contacts

To display the first 5 contacts, first you can set a `contacts` state that will contain the list of all displayed contacts. Then you will need to loop on the variable `this.state.contacts` with a specific function

```
Y2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHsNCiAgY29uc3RydWN0b3IocHJvcHMpIHsNCiAgICBzdXBlcihwcm9wcyk7DQogICAgdGhpcy5zdGF0ZSA9IHsNCiAgICAgIGNvbnRhY3RzOiBjb250YWN0cy5zbGljZSgwLDUpDQogICAgfQ0KICB9DQogIA0KICBkaXNwbGF5Q29udGFjdHMoKSB7DQogICAgbGV0IHJlc3VsdCA9IFtdOw0KICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5jb250YWN0cy5sZW5ndGg7IGkrKykgew0KICAgICAgcmVzdWx0LnB1c2goDQogICAgICAgIDxDb250YWN0Um93DQogICAgICAgICAga2V5PXtpfSANCiAgICAgICAgICBjb250YWN0PXt0aGlzLnN0YXRlLmNvbnRhY3RzW2ldfSANCiAgICAgICAgLz4NCiAgICAgICkNCiAgICB9DQogICAgcmV0dXJuIHJlc3VsdDsNCiAgfQ0KDQogIHJlbmRlcigpIHsNCiAgICByZXR1cm4gKA0KICAgICAgPGRpdj4NCiAgICAgICAgPCEtLSAuLi4gLS0+DQogICAgICAgICAge3RoaXMuZGlzcGxheUNvbnRhY3RzKCl9DQogICAgICAgIDwhLS0gLi4uIC0tPg0KICAgICAgPC9kaXY+DQogICAgKTsNCiAgfQ0KfQ0KDQovLyBEb24ndCBmb3JnZXQgdG8gY3JlYXRlIGEgIkNvbnRhY3RSb3ciIGNvbXBvbmVudA==
```

### Iteration 2 | Add New Random Contacts

For this iteration, you will need to create a function `addRandomContact` that will update the state (with the method `this.setState`). In the following example, we decided to create a `AddRandomContactButton` component.

```js
Y2xhc3MgQWRkUmFuZG9tQ29udGFjdEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7DQogIHJlbmRlcigpIHsNCiAgICByZXR1cm4gKA0KICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9PkFkZCBSYW5kb20gQ29udGFjdDwvYnV0dG9uPg0KICAgICk7DQogIH0NCn0NCg0KY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHsNCiAgLy8gLi4uDQoNCiAgYWRkUmFuZG9tQ29udGFjdCgpIHsNCiAgICBsZXQgbmV3Q29udGFjdHMgPSB0aGlzLnN0YXRlLmNvbnRhY3RzLnNsaWNlKCk7DQogICAgbmV3Q29udGFjdHMucHVzaChjb250YWN0c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqY29udGFjdHMubGVuZ3RoKV0pDQogICAgdGhpcy5zZXRTdGF0ZSh7DQogICAgICBjb250YWN0czogbmV3Q29udGFjdHMNCiAgICB9KQ0KICB9DQoNCiAgcmVuZGVyKCkgew0KICAgIHJldHVybiAoDQogICAgICAgIHsvKiAuLi4gKi99DQogICAgICAgIHsvKiBXaXRob3V0IGEgQ29tcG9uZW50ICovfQ0KICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHt0aGlzLmFkZFJhbmRvbUNvbnRhY3QoKX19PkFkZCBSYW5kb20gQ29udGFjdDwvYnV0dG9uPg0KICAgICAgICB7LyogT1Igd2l0aCBhIENvbXBvbmVudCAqL30NCiAgICAgICAgPEFkZFJhbmRvbUNvbnRhY3RCdXR0b24gb25DbGljaz17KCkgPT4ge3RoaXMuYWRkUmFuZG9tQ29udGFjdCgpfX0gLz4NCiAgICAgICAgey8qIC4uLiAqL30NCiAgICApOw0KICB9DQp9
```