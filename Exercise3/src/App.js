import Productlist from './components/Productlist'
import Searchbar from './components/Searchbar'
import React from "react";
import { useState } from "react";
import './App.css';
import toaster from './toaster.png'
import vedenkeitin from './vedenkeitin.png'
import paristo from './paristo.png'
import valaisin from './valaisin.png'
import langatonhiiri from './langatonhiiri.png'
import rengas from './rengas.png'
import puhelin from './puhelin.png'
import kahvinkeitin from './kahvinkeitin.png'
import vatkain from './vatkain.png'
import five from './five.png'
import four from './four.png'
import one from './one.png'

function App() {

    const [ productlist, setproductlist ] = useState([
        {img: toaster ,name: 'AatuOY:n Leivänpaahdin',price: 83.99, rating: five},
        {img: vedenkeitin ,name: 'Smegin Vedenkeitin',price: 120, rating: four},
        {img: paristo ,name: 'Energizerin AA sormiparistot',price: 5.99, rating: five},
        {img: valaisin ,name: 'Tää on valaisin',price: 26, rating: one},
        {img: langatonhiiri ,name: 'Logitech langatonhiiri',price: 55, rating: five},
        {img: rengas ,name: 'Kuminen rengas',price: 230, rating:five}, 
        {img: puhelin ,name: 'Nokia 3310',price: 79.99, rating: four},
        {img: kahvinkeitin ,name: 'Kahvinkeitin',price: 3200, rating: five},
        {img: vatkain ,name: 'Joku vatkain',price: 1, rating: one },   
    ]);

   
  return (
    <div className="App"> 
      <Searchbar/>
        <div className ="productContainer">
          {productlist.map(p => <Productlist img={p.img} name={p.name} price={p.price} rating={p.rating}/>) }
      </div>
    </div>
  );
}

export default App;