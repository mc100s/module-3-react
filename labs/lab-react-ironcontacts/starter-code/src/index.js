import React from 'react';
import ReactDOM from 'react-dom';
import contacts from './contacts.json';
import './index.css';

// class Button extends React.Component  {
//   render()  {
//     return (
//       <button>
//         { this.props.children }
//       </button>
//     )
//   }
// }


class Contact extends React.Component {

  deleteContact() {
    console.log( "Clicked!!" );
  }

  render() {
    return (
      <tr>
        <td>
          <img src={ this.props.info.pictureUrl } alt="" />
        </td>
        <td>
          { this.props.info.name }
        </td>
        <td>
          { this.props.info.popularity }
        </td>
        <td>
          <button onClick={ () => this.deleteContact() }>Delete</button>
        </td>
      </tr>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.contacts = contacts;
    this.state = {
      displayedContacts: []
    }
  }

  getFirstFive() {
    let newContacts = []
    this.contacts.slice(0,5).map( (contact, index) => newContacts.push( contact ) );
    this.setState({
      displayedContacts: newContacts
    })
  }

  getRandomContact() {
    const numOfContacts = this.contacts.length;
    let randomNumber = Math.floor( Math.random() * numOfContacts);
    let newContacts = this.state.displayedContacts.slice();
    newContacts.push( this.contacts[randomNumber] );
    this.setState({
      displayedContacts: newContacts
    })
  }

  sortByName() {
    console.log( "Clicked" );
    let sortedContacts = this.state.displayedContacts.slice().sort( (a,b) => {
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0
    } );
    this.setState({
      displayedContacts: sortedContacts
    })
  }

  sortByPop() {
    console.log( "Clicked" );
    let sortedContacts = this.state.displayedContacts.slice().sort( (a,b) => b.popularity - a.popularity );
    this.setState({
      displayedContacts: sortedContacts
    })
  }

  componentWillMount() {
    this.getFirstFive();
  }

  render() {
    return (
      <div className="wrapper">
      <h1>IronContacts</h1>
      <button onClick={ () => this.getRandomContact() } >
        Add Random Contact
      </button>
      &nbsp;
      <button onClick={ () => this.sortByName() } >
        Sort by Name
      </button>
      &nbsp;
      <button onClick={ () => this.sortByPop() } >
        Sort by Popularity
      </button>
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
          { this.state.displayedContacts.map( (contact, index) => <Contact key={index} info={contact} /> ) }
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


