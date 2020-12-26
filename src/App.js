import { useState, useEffect } from 'react';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './Phonebook/ContactForm';
import Filter from './Phonebook/Filter';
import ContactList from './Phonebook/ContactList';
import s from './App.module.css';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  );

  const [filter, setFilter] = useState('');

  const addName = (name, number) => {
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    const keys = contacts.map(contact =>
      Object.values(contact.name.toLowerCase().split(', ')),
    );
    const arrayOfNames = Object.keys(keys).reduce(function (acc, key) {
      return acc.concat(keys[key]);
    }, []);
    const repeatedName = arrayOfNames.includes(name.toLowerCase());

    if (!repeatedName) {
      setContacts(contacts => [newContact, ...contacts]);
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  }, []);

  const onFilterChange = event => {
    setFilter(filter => event.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter),
    );
  };

  const deleteItem = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
  };

  const filteredContacts = getFilteredContacts();
  return (
    <div className={s.App}>
      <div className={s.Wrapper}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addName} />

        <h2>Contacts</h2>
        <Filter value={filter} onSubmit={onFilterChange} />
        <ContactList contacts={filteredContacts} delMethot={deleteItem} />
      </div>
    </div>
  );
}
