import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import Topmenu from './components/Topmenu';
import Editorview from './components/Editorview'
import ProductListView from './components/ProductListView'

function App() {

  const [editorModeOn, setEditorModeOn] = useState(false);
  const [products, setProducts] = useState([])

  
  useEffect(async() =>{
    const result = await fetch('http://localhost:3001/products').then((res)=>
      res.json()
    )
    setProducts(result)
    console.log(result)
  }, [])

  const createProduct = (item) => {
    fetch('http://localhost:3001/products', { method: 'POST', 
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        img: item.img,
        name: item.name,
        description: item.description,
        price: item.price,
    })})
    
  }

  const onItemDelete = (item) => {
    let newProds = [...products];
    let deletedItem = newProds.find(p => p.id === item.id);
    let deletedItemIndex = newProds.findIndex(p => p.id === item.id);
    fetch(`http://localhost:3001/products/${deletedItem.id}`, { method: 'DELETE'})
    newProds.splice(deletedItemIndex, 1);
    setProducts(newProds);
  }

  const priceASC = () => {
    const sortedASC = [...products];  
    sortedASC.sort((a,b)=>{       
      let x = parseInt(a.price), 
      y = parseInt(b.price);     
      if(x > y) return 1;
      if(x < y) return -1;
      return 0;
    })
      setProducts(sortedASC);
  }

  const priceDES = () => {
    let sortedDES = [...products];
    sortedDES.sort((a,b)=>{
      if(a.price > b.price) return -1;
      if(a.price < b.price) return 1;
      return 0;
    })
      setProducts(sortedDES); 
  }

  let output = <ProductListView products={products} />;
  if( editorModeOn == true ) {
    output = <Editorview products={products} onItemDelete={ onItemDelete } createProduct = { createProduct }/>;
  }

  return (
    <div>   
      <div className="topMenuContainer">
                <Topmenu priceAsc = {priceASC} priceDes = {priceDES}/>   
                <button className="functionButtons" onClick={ () => setEditorModeOn(!editorModeOn)}>Admin Mode Toggle</button>       
                </div>       
                { output }
             
      </div>
  );
}

export default App;
