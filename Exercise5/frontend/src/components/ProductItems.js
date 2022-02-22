import React from 'react'

export default function Productitems (props) {
  return (
    <div className="productItem">
    <div><h1>{ props.name }</h1></div>
    <img src={ props.img } />
    <div>{props.description }</div>
    <div>${ props.price }</div>
    </div>);   
}
