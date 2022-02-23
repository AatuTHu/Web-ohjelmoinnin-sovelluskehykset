import React from 'react';

export default function Searchbar(props) {
  return (  
  <div className="searchBarContainer">
     <div className="searchBarItems">     
       <div>Hae Tuotteita</div>
       <form>
        <input type="text" />
        <button>Tallenna</button>
      </form>
     </div>


        <button className="searchButton" onClick={ ()=>props.clickDes()}>Decending order</button>
        <button className="searchButton" onClick={ ()=>props.clickAsc()}>Ascending order</button>

    </div>
  );
}
