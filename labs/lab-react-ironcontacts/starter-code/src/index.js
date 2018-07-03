import React from "react";
import ReactDOM from "react-dom";
import contacts from "./contacts.json";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: contacts.slice(0, 5)
    };
  }
  handleClick() {
    var rand = 0;
    var arrayRand = [];
    while (rand <= 5 && !arrayRand.includes(rand)) {
      rand = Math.floor(Math.random() * contacts.length);
    }
    arrayRand.push(rand);
    // console.log(rand);
    this.setState({
      contacts: [...this.state.contacts, contacts[rand]]
    });
    //console.log(contacts[rand]);
    //console.log(this.state.contacts.length);
  }

  handleSortClick() {
    let contactsSort = this.state.contacts.slice();
    contactsSort.sort(function(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    //console.log(contactsSort);
    this.setState({
      contacts: contactsSort
    });
  }

  handlePopClick() {
    let contactsSort = this.state.contacts.slice();
    contactsSort.sort(function(a, b) {
      if (a.popularity < b.popularity) return 1;
      if (a.popularity > b.popularity) return -1;
      return 0;
    });
    //console.log(contactsSort);
    this.setState({
      contacts: contactsSort
    });
  }

  handleDelClick(contact) {
    let contactPushed = contact;
    console.log(contactPushed);
    let contacts = this.state.contacts.slice();
    let contactsDel = contacts.filter(element => {
      //console.log("debug element.name", element.name);
      //console.log("debug contactpush", contactPushed.name);
      return element.name !== contactPushed.name;
    });
    //console.log(contactsDel);
    this.setState({
      contacts: contactsDel
    });
  }
  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          {" "}
          Add Random Contact
        </button>
        <button
          onClick={() => {
            this.handleSortClick();
          }}
        >
          Sort by name
        </button>
        <button
          onClick={() => {
            this.handlePopClick();
          }}
        >
          Sort by popularity
        </button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>popularity</th>
          </tr>
          {this.state.contacts.map(contact => {
            return (
              <tr>
                <td>
                  <img src={contact.pictureUrl} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  <button
                    onClick={() => {
                      this.handleDelClick(contact);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
