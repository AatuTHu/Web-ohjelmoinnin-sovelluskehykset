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

  let random = Math.floor(Math.random() *30)  //random number

    const [ shoppingListItems, setShoppingListItems  ] = useState([  //original setup
        { id: 1, value: 'Hiivaa', qty: 0},
        { id: 2, value: 'Sokeria', qty: 0},
        { id: 3, value: 'Ämpäria', qty: 0},
        { id: 4, value: 'marjoja', qty: 0}  
         
    ]);

    const [ dummyList, setdummyList  ] = useState([]); //testlist setup, not necessaru for the task


    const addlistitems = (id) => {     //add random amount to qty on original list  
      let newShoppingListItems = [...shoppingListItems]
      let result = newShoppingListItems.findIndex(i => i.id === id)

        if (result !== -1) {
          let additions = {...newShoppingListItems[result]}
          additions.qty= additions.qty + random;
          newShoppingListItems[result] = additions;
          setShoppingListItems(newShoppingListItems)

        }
    }

    
    const addDummies = (id, value, qty) => { //test list addition

      let newDummyList = [...dummyList]
      let result = newDummyList.findIndex(i => i.id === id)

      if(result == -1) { //if there is no item on the list, then make it on given params
        let newDummylist = [...dummyList, {

          id : id,
          value : value,
          qty : qty

        }];
        setdummyList(newDummylist);

        } else {  //cheks if there is already item on this index. If is then add to that qty
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
            <Shoppinglist listItems={shoppingListItems}/>   {/* Sending list to component ass a prop */}   
          <Buttons clickMe={addlistitems}/>                  {/* List addition buttons */}   
        </div>
          <div className="container">
            <Dummytitle/>
              <Dummylist dummyItems={dummyList}/> {/* Sending dummylist to component ass a prop */}
            <Dummybuttons dummyMe={addDummies}/> {/* List addition buttons */}
          <div>press for more</div>
        </div>
      </div>
    </div>
  );
}

export default App;