import React from 'react';

export default function Buttons(props) {
  return <div>
          <button className="itemButtons" onClick={ ()=> props.clickMe(1) } >Add Hiiva</button>
          <button className="itemButtons" onClick={ ()=> props.clickMe(2) }>Add Sokeri</button>
          <button className="itemButtons" onClick={ ()=> props.clickMe(3) }>Add Ämpäri</button>
          <button className="itemButtons" onClick={ ()=> props.clickMe(4) }>Add marjoja</button>
  </div>;
}
