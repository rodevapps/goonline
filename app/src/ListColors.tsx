import { useEffect } from 'react';

import type { Color, Props } from './Color.type';

import './App.scss';

const ListColors = ({ colors, filteredColors, setColors, setFilteredColors }: Props) => {
  useEffect(()=> {
    if (typeof setFilteredColors !== 'undefined') {
      setFilteredColors(colors);
    }
  }, [colors, setFilteredColors])

  useEffect(()=> {
    const elements = Array.from(document.getElementsByClassName('rectangle') as HTMLCollectionOf<HTMLElement>);

    elements.forEach(element => {
      element.style.setProperty("--background-color", element.getAttribute('data-background'));
    });
  }, [filteredColors])

  const handleRemove = (i: number) => {
    let arr: Color[] = [];

    if (typeof filteredColors !== 'undefined') {
      arr = [...filteredColors];
    }

    const removedColor = arr.splice(i, 1);

    if (typeof setFilteredColors !== 'undefined') {
      setFilteredColors(arr);
    }

    let newColors = colors.filter(item => item.id !== removedColor[0].id);

    console.log(newColors);

    if (typeof setColors !== 'undefined') {
      setColors(newColors);
    }

    window.localStorage.setItem('colors', JSON.stringify(newColors));
  }

  return (
    <div id="ListColors">
      <div id="colorsList">
        <ul>
        {filteredColors?.map((color, i) =>
          <li key={i}>
            <div className="rectangle" data-background={color.value}></div>
            { color.value.toUpperCase() } { color.removable && <span className="remove" onClick={(e) => handleRemove(i) }>&#10005;</span> }
          </li>
        )}    
        </ul>
      </div>
    </div>
  );
}

export default ListColors;
