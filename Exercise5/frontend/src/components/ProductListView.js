import React from 'react'
import ProductItem from './ProductItems'
export default function ProductListView(props) {
  return (
<div className="productContainer">  
    { props.products.map(p => <ProductItem img={p.img} name={p.name} description={p.description} price={p.price}/>) }
</div>
  )
}
