import React from 'react';

export default function Searchbar(props) {
  return (  
  <div className="searchBarContainer">
     <div className="searchBarItems">Hae Tuotteita <input type="text"/></div>
        <button className="searchButton" onClick={ ()=> props.clickMe()}>Etsi</button>
        <button className="searchButton" onClick={ ()=>props.clickMe()}>High to low</button>
    </div>
  );
}
