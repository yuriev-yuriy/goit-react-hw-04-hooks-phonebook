import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import s from '../App.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const reset = () => {
    setName('');
    setNumber('');
  };

  const changeNameInput = event => {
    setName(event.currentTarget.value);
  };

  const changeNumberInput = event => {
    setNumber(event.currentTarget.value);
  };

  const makeSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    reset();
  };

  return (
    <>
      <form onSubmit={makeSubmit}>
        <label htmlFor={nameInputId}>
          Name
          <input
            id={nameInputId}
            type="text"
            value={name}
            onChange={changeNameInput}
            required
          />
        </label>

        <label htmlFor={numberInputId}>
          Number
          <input
            id={numberInputId}
            type="tel"
            value={number}
            onChange={changeNumberInput}
            required
          />
        </label>
        <button className={s.Btn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
