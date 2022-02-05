import Shoppinglist from './components/Shoppinglist'
import Title from './components/Title'
import Buttons from './components/Buttons'
import React from "react";
import { useState } from "react";
import './App.css';

function App() {

    const [ shoppingListItems, setShoppingListItems  ] = useState([
        { id: 1, value: 'Pullaa', qty: 5},
        { id: 2, value: 'Mokkapalaa', qty: 6},
        { id: 3, value: 'kääretorttua', qty: 3},
        { id: 4, value: 'Jäätelöa', qty: 16}  
         
    ]);


    const addlistitems = (id) => {

      let random = Math.floor(Math.random() *30)
      let newShoppingListItems = [...shoppingListItems]
      let result = newShoppingListItems.findIndex(i => i.id === id)

        if (result !== -1) {
          let additions = {...newShoppingListItems[result]}
          additions.qty= additions.qty + random;
          newShoppingListItems[result] = additions;
          setShoppingListItems(newShoppingListItems)

        }
    }
    
  return (
    <div className="App">
        <div className="container">
          <Title/>
          <Shoppinglist listItems={shoppingListItems}/>
          <Buttons clickMe={addlistitems}/>
        </div>
    </div>
  );
}

export default App;