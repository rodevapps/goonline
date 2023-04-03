import React from 'react';

import type { Props } from './Color.type';

import './App.scss';

const FilterColors = ({ colors, setFilteredColors }: Props) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
    if (type === 'search') {
      console.log(event.target.value);

      let newColors = colors.filter(item => item.value.match(event.target.value.toUpperCase()))

      if (typeof setFilteredColors !== 'undefined') {
        setFilteredColors(newColors);
      }
    } else if (type === 'red') {
      if (event.target.checked) {
        let newColors = colors.filter(item => parseInt(item.value[1] + item.value[2], 16) > 127);

        if (typeof setFilteredColors !== 'undefined') {
          setFilteredColors(newColors);
        }
      } else {
        if (typeof setFilteredColors !== 'undefined') {
          setFilteredColors([...colors]);
        }
      }
    } else if (type === 'green') {
      if (event.target.checked) {
        let newColors = colors.filter(item => parseInt(item.value[3] + item.value[4], 16) > 127);

        if (typeof setFilteredColors !== 'undefined') {
          setFilteredColors(newColors);
        }
      } else {
        if (typeof setFilteredColors !== 'undefined') {
          setFilteredColors([...colors]);
        }
      }
    } else if (type === 'blue') {
      if (event.target.checked) {
        let newColors = colors.filter(item => parseInt(item.value[5] + item.value[6], 16) > 127);

        if (typeof setFilteredColors !== 'undefined') {
          setFilteredColors(newColors);
        }
      } else {
        if (typeof setFilteredColors !== 'undefined') {
          setFilteredColors([...colors]);
        }
      }
    } else if (type === 'saturation') {
      if (event.target.checked) {
        let newColors = colors.filter(item => {
          const r = parseInt(item.value[1] + item.value[2], 16);
          const g = parseInt(item.value[3] + item.value[4], 16);
          const b = parseInt(item.value[5] + item.value[6], 16);

          console.log(r);
          console.log(g);
          console.log(b);

          const rp = r / 255.0;
          const gp = g / 255.0;
          const bp = b / 255.0;

          console.log(rp);
          console.log(gp);
          console.log(bp);

          const cmax = Math.max(rp, gp, bp);
          const cmin = Math.min(rp, gp, bp);

          console.log(cmax);
          console.log(cmin);

          const delta = cmax - cmin;
          const L = (cmax + cmin) / 2.0;

          console.log(delta);
          console.log(L);

          if (delta === 0.0) {
            return false;
          } else {
            const saturation = delta / (1.0 - Math.abs(2.0 * L - 1));

            console.log(saturation * 100.0);

            return (saturation * 100.0) > 50.0;
          }
        });

        if (typeof setFilteredColors !== 'undefined') {
          setFilteredColors(newColors);
        }
      } else {
        if (typeof setFilteredColors !== 'undefined') {
          setFilteredColors([...colors]);
        }
      }      
    }
  }

  return (
    <div id="FilterColors">
      <h3>Filter colors:</h3>
      <form id="filterColors">
        <input type="text" placeholder="Enter a search term" className="input" onChange={(e) => handleSearch(e, 'search')} />
        <div>
          <input type="checkbox" onChange={(e) => handleSearch(e, 'red')} /> {"Red > 50%"}
        </div>
        <div>
          <input type="checkbox" onChange={(e) => handleSearch(e, 'green')} /> {"Green > 50%"}
        </div>
        <div>
          <input type="checkbox" onChange={(e) => handleSearch(e, 'blue')} /> {"Blue > 50%"}
        </div>
        <div>
          <input type="checkbox" onChange={(e) => handleSearch(e, 'saturation')} /> {"Saturation > 50%"}
        </div>
      </form>
    </div>
  );
}

export default FilterColors;
