import React, { Component } from 'react';
import './App.css';
import ContactList from './components/contact_list'

const contacts = [
  {
      id: 1,
      name: "Friends",
      type: "Group",
      contacts: [
          { id: 2, name: "Udi", type: "Contact" },
          { id: 3, name: "Tommy", type: "Contact" },
          {
              id: 6,
              name: "Old Friends",
              type: "Group",
              contacts: [
                  { id: 7, name: "Itay", type: "Contact" },
              ]
          },
      ]
  },
  {
      id: 4,
      name: "Family",
      type: "Group",
      contacts: [
          { id: 5, name: "Roni", type: "Contact" },
      ]
  },
  { id: 8, name: "Ori", type: "Contact" },
];

class App extends Component {
  render() {
    const currentContactId = 0;
    return (
      <div className="App">
        <ContactList list={contacts} currentContactId={currentContactId}/>
      </div>
    );
  }
}

export default App;
