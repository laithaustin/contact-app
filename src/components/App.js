import React from "react";
import './App.css';
import Header from "./header";
import AddContact from "./addContact";
import ContactList from "./ContactList";
import { useState, useEffect } from 'react';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, contact]);
  };

  useEffect(() =>{
    const gContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (gContacts) setContacts(gContacts);
  }, [])

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  return ( <div className = "ui container">
            <Header/>
            <AddContact addContactHandler = {addContactHandler}/>
            <ContactList contacts = {contacts}/>
          </div>
    );
    
}

export default App;
