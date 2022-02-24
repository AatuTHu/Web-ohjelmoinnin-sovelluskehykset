import Shoppinglist from './components/Shoppinglist'
import Dummylist from './components/Dummylist'
import Dummybuttons from './components/Dummybuttons'
import Dummytitle from './components/Dummytitle'
import Title from './components/Title'
import Buttons from './components/Buttons'
import React from "react";
import { useState } from "react";
import './App.css';

function App() {

    const [ shoppingListItems, setShoppingListItems  ] = useState([
        { id: 1, value: 'Hiivaa', qty: 0},
        { id: 2, value: 'Sokeria', qty: 0},
        { id: 3, value: 'Ämpäria', qty: 0},
        { id: 4, value: 'marjoja', qty: 0}  
         
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

    const [ dummyList, setdummyList  ] = useState([]);
    let random = Math.floor(Math.random() *30)


    const addDummies = (id, value, qty) => {

      let newDummyList = [...dummyList]
      let result = newDummyList.findIndex(i => i.id === id)
      console.log(result)

      if(result == -1) {
        let newDummylist = [...dummyList, {

          id : id,
          value : value,
          qty : qty

        }];
        setdummyList(newDummylist);
        } else {
          let additions = {...newDummyList[result]}
          additions.qty= additions.qty + random;
          newDummyList[result] = additions;
          setdummyList(newDummyList);
        }

    }

    
    
  return (
    <div className="App">
      <div className="mainContainer">
        <div className="container">
          <Title/>
            <Shoppinglist listItems={shoppingListItems}/>
          <Buttons clickMe={addlistitems}/>
        </div>
          <div className="container">
            <Dummytitle/>
              <Dummylist dummyItems={dummyList}/>
            <Dummybuttons dummyMe={addDummies}/>
          <div>press for more</div>
        </div>
      </div>
    </div>
  );
}

export default App;