import React, { useState } from 'react';

import sort from './functions';

import type { Props } from './Color.type';

import './App.scss';

const AddColor = ({ colors, setColors }: Props) => {
  const [color, setColor] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (color.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/)) {
      console.log('Adding: ' + color);

      const arr = sort([...colors, {id: new Date().getTime(), value: color, removable: true}]);

      if (typeof setColors !== 'undefined') {
        setColors(arr);
      }

      setColor('');
      setError('');

      window.localStorage.setItem('colors', JSON.stringify(arr));
    } else {
      setError('Bad hex color!');
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);

    if (event.target.value === '' || (event.target.value.match(/^#[0-9a-fA-F]*$/) && event.target.value.length <= 7)) {
      setColor(event.target.value);
    }
  }

  return (
    <div id="AddColor">
      <h3>Add new color:</h3>
      <form id="addColor" onSubmit={handleSubmit}>
        <input type="text" name="color" value={color} placeholder="Enter a color in format #ffffff" className="input" onChange={handleChange} autoFocus />&nbsp;
        <button type="submit" className="btn">Submit</button>
        { error !== '' && <p className="error"><small>{ error }</small></p> }
      </form>
    </div>
  );
}

export default AddColor;
