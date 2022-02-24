import Productlist from './components/Productlist'
import Searchbar from './components/Searchbar'
import React from "react";
import { useState } from "react";
import './App.css';
import toaster from './images/toaster.png'
import vedenkeitin from './images/vedenkeitin.png'
import paristo from './images/paristo.png'
import valaisin from './images/valaisin.png'
import langatonhiiri from './images/langatonhiiri.png'
import rengas from './images/rengas.png'
import puhelin from './images/puhelin.png'
import kahvinkeitin from './images/kahvinkeitin.png'
import vatkain from './images/vatkain.png'
import five from './images/five.png'
import four from './images/four.png'
import one from './images/one.png'

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

    const priceASC = () => {
      let sortedASC = [...productlist];
      sortedASC.sort((a,b)=>{
        if(a.price < b.price) return -1;
        if(a.price > b.price) return 1;
        return 0;
      })
        setproductlist(sortedASC)
    }

    const nameASC = () => {
      let alphaASC = [...productlist]; //toimii
      alphaASC.sort((a,b)=>{
        let x = a.name.toUpperCase(),
        y = b.name.toUpperCase();
        return x === y ? 0 : x > y ? 1 : -1;
      })
      setproductlist(alphaASC)
    }
      
    const nameDES = () => {
      let alphaDES = [...productlist]; 
      alphaDES.sort((a,b)=>{   
        let x = a.name.toUpperCase(), 
        y = b.name.toUpperCase();
        return x === y ? 0 : x > y ? -1 : 1;
      })
      setproductlist(alphaDES)
    }
 

  return (
    <div className="App">
      <Searchbar priceDes = {priceDES} priceAsc = {priceASC} nameAsc = {nameASC} nameDes = {nameDES} />
        <div className ="productContainer">
          {productlist.map(p => <Productlist img={p.img} name={p.name} description={p.description} price={p.price} rating={p.rating}/>) }
      </div>
    </div>
  );
}

export default App;