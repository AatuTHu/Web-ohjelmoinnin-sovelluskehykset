import React from 'react';

export default function Dummybuttons(props) {
  return <div>
  <button className="itemButtons" onClick={ ()=> props.dummyMe(1, "Beer",1) } >Add Beer</button>
  <button className="itemButtons" onClick={ ()=> props.dummyMe(2, "Vine", 1) }>Add Vine</button>
  <button className="itemButtons" onClick={ ()=> props.dummyMe(3, "Liquor", 1) }>Add Liquor</button>
  <button className="itemButtons" onClick={ ()=> props.dummyMe(4, "Punssi", 1) }>Add Punssi</button>
</div>;
}
