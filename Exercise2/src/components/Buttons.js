import React from 'react';

export default function Buttons(props) {
  return <div>
          <button className="itemButtons" onClick={ ()=> props.clickMe(1) } >Add carrots</button>
          <button className="itemButtons" onClick={ ()=> props.clickMe(2) }>Add yougurt</button>
          <button className="itemButtons" onClick={ ()=> props.clickMe(3) }>Add berries</button>
          <button className="itemButtons" onClick={ ()=> props.clickMe(4) }>Add beer</button>
  </div>;
}
