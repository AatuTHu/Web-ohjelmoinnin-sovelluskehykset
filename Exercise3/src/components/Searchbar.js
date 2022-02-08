import React from 'react';

export default function Searchbar() {
  return (  
  <div className="searchBarContainer">
     <div className="searchBarItems">Hae Tuotteita <input type="text"/></div>
        <button className="itemButtons" onClick>Etsi</button>
    </div>
  );
}
