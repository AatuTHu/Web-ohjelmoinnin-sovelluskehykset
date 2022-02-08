import React from 'react';

export default function Dummylist(props) {
  return <div>
  <ul>      
      {
          props.dummyItems.map((item, index) => {       
            return <li className="containerItems" key={index}>ltr { item.qty } { item.value }  </li>                         
          })
      }
  </ul> 
</div>;
}

