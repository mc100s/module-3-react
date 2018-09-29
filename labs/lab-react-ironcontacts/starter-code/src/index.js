import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import contacts from "./contacts.json";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts : contacts,
      subContacts : contacts.slice(0,5)
    }
  }

  handleClick(){
    let newSubContacts = this.state.subContacts.slice();
    newSubContacts.push(contacts[Math.floor(Math.random()*(contacts.length-1))]);
    this.setState({
      subContacts : newSubContacts
    })
  }

  sortName(){
    let sortedContacts = this.state.subContacts.slice()
    sortedContacts.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} ); 
    console.log(sortedContacts)
    this.setState({
      subContacts : sortedContacts
    })
  }

  sortPopularity(){
    let sortedPopContacts = this.state.subContacts.slice()
    sortedPopContacts.sort(function(b,a) {return (a.popularity > b.popularity) ? 1 : ((b.popularity> a.popularity) ? -1 : 0);} ); 
    console.log(sortedPopContacts)
    this.setState({
      subContacts : sortedPopContacts
    })
  }

  deleteContact(i){
    let reducedContacts = this.state.subContacts.slice()
    // console.log()
    reducedContacts.splice(i,1) //change 0 to the key value of the button // or table element
    this.setState({
      subContacts : reducedContacts
    })
  }

  render() {
    return (
      <div>
        <h1>IronContacts</h1>

        <button onClick={()=> this.handleClick()}>Add random Contact</button>
        <button onClick={()=> this.sortName()}>Sort by Name</button>
        <button onClick={()=> this.sortPopularity()}>Sort by Popularity</button>


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

          {/* für jeden actor fügen wir picture name popularity ein */}
          {this.state.subContacts.map((actor,i)=>
          <tr key={i}>
            <td><img src={actor.pictureUrl} alt=""/> </td>
            <td>{actor.name}</td> 
            <td>{actor.popularity.toFixed(2)}</td>
            <td><button onClick={()=> this.deleteContact(i)}>Delete</button></td>
          </tr>

          )}
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


