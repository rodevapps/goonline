import React, { useState, useEffect } from 'react';

import AddColor from './AddColor';
import FilterColors from './FilterColors';
import ListColors from './ListColors';

import sort from './functions';

import type { Color } from "./Color.type";

const initialColors: Color[] = [
  {id: 1, value: '#000000', removable: false},
  {id: 2, value: '#FFFFFF', removable: false},
  {id: 3, value: '#FF0000', removable: false},
  {id: 4, value: '#00FF00', removable: false},
  {id: 5, value: '#0000FF', removable: false},
  {id: 6, value: '#FFFF00', removable: false}
];

const App = () => {
  const [filteredColors, setFilteredColors] = useState<Color[]>([]);
  const [colors, setColors] = useState<Color[]>(sort(initialColors));

  useEffect(()=> {
    const storageColors = window.localStorage.getItem('colors');

    if (storageColors !== null) {
      setColors(JSON.parse(storageColors));
    }
  }, [])

  return (
    <div id="App">
      <AddColor colors={colors} setColors={setColors} />
      <FilterColors colors={colors} setFilteredColors={setFilteredColors} />
      <ListColors colors={colors} filteredColors={filteredColors} setColors={setColors} setFilteredColors={setFilteredColors} />
    </div>
  );
}

export default App;
