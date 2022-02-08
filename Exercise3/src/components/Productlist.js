import React from 'react';

export default function productList(props) {
    return (
        <div className="containerItems">
          <img src={props.img}/> 
            <div><h1>{ props.name }</h1></div>
              <div>${ props.price }</div>
            <img src={props.rating}/>
        </div>
        );
      }
