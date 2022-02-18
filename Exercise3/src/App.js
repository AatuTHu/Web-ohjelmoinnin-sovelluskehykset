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
        {img: toaster ,name: 'AatuOY:n Leivänpaahdin',description: "Tekniikan uusin ja tehokkain leivänpaahdin!",price: 83.99, rating: five},
        {img: vedenkeitin ,name: 'Smegin Vedenkeitin',description: "tää keittää vettä kai",price: 120, rating: four},
        {img: paristo ,name: 'Energizerin AA sormiparistot',description: "obsolete",price: 5.99, rating: five},
        {img: valaisin ,name: 'Tää on valaisin',description: "valoa kansalle joka piemydessä vaeltaa",price: 26, rating: one},
        {img: langatonhiiri ,name: 'Logitech langatonhiiri',description: "hiiri",price: 55, rating: five},
        {img: rengas ,name: 'Kuminen rengas',description: "katuojasta varastettu",price: 230, rating:five}, 
        {img: puhelin ,name: 'Nokia 3310',description: "tuhoutumatonta tavaraa",price: 79.99, rating: four},
        {img: kahvinkeitin ,name: 'Kahvinkeitin',description: "tää keittää kahvia kai",price: 3200, rating: five},
        {img: vatkain ,name: 'Joku vatkain',description: "ei mitä *i**ua",price: 1, rating: one },   
    ]);

    const priceDES = () => {
      let sortedDES = [...productlist];
      sortedDES.sort((a,b)=>{

        if(a.price > b.price) return -1;
        
        if(a.price < b.price) return 1;
        
      })
        setproductlist(sortedDES)
    }
   

  return (
    <div className="App">
      <Searchbar clickMe = {priceDES}/>
        <div className ="productContainer">
          {productlist.map(p => <Productlist img={p.img} name={p.name} description={p.description} price={p.price} rating={p.rating}/>) }
      </div>
    </div>
  );
}

export default App;