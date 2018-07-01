import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import contacts from './contacts.json'

class AddRandomContactButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>Add Random Contact</button>
    );
  }
}

class SortButton extends React.Component {
  render() {
    return (
      <button onClick={() => {this.props.onClick(this.props.field)}}>Sort by {this.props.field}</button>
    );
  }
}

class ContactRow extends React.Component {
  render() {
    return (
      <tr>
        <td><img src={this.props.contact.pictureUrl} alt="Picture" /></td>
        <td>{this.props.contact.name}</td>
        <td>{this.props.contact.popularity.toFixed(2)}</td>
        <td><button onClick={this.props.onClickDelete}>Delete</button></td>
      </tr>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: contacts.slice(0,5)
    }
  }

  addRandomContact() {
    let newContacts = this.state.contacts.slice();
    newContacts.push(contacts[Math.floor(Math.random()*contacts.length)])
    this.setState({
      contacts: newContacts
    })
  }

  removeContact(indexContact) {
    let newContacts = this.state.contacts.slice();
    newContacts.splice(indexContact, 1);
    this.setState({
      contacts: newContacts
    })
  } 

  sortContacts(field) {
    let newContacts = this.state.contacts.slice();
    newContacts.sort((a,b) => {
      return a[field] > b[field] ? 1 : -1;
    });
    this.setState({
      contacts: newContacts
    })
  }

  displayContacts() {
    let result = [];
    for (let i = 0; i < this.state.contacts.length; i++) {
      result.push(
        <ContactRow
          key={i} 
          contact={this.state.contacts[i]} 
          onClickDelete={() => {this.removeContact(i)}}
        />
      )
    }
    return result;
  }

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <AddRandomContactButton onClick={() => {this.addRandomContact()}} />
        <SortButton field="name" onClick={(field) => {this.sortContacts(field)}} />
        <SortButton field="popularity" onClick={(field) => {this.sortContacts(field)}} />
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.displayContacts()}
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


