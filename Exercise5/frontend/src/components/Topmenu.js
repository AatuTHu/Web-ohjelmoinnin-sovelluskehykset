import React from 'react'

export default function Topmenu(props) {
  return (
    
        <div className="topMenuItems">
            <div>Verkkokauppa Aatunen</div>
            <button className = "functionButtons" onClick={ () => props.priceAsc()}>Price acending</button>
            <button className = "functionButtons" onClick={ () => props.priceDes()}>Price decending</button>
    </div>
  )
}


