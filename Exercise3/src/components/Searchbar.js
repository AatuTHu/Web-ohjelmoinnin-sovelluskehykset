
export default function Searchbar(props) {

  return (  
  <div className="searchBarContainer">

    
        <button className="searchButton" onClick={ ()=>props.nameDes()}>Names Decending order</button>
        <button className="searchButton" onClick={ ()=>props.nameAsc()}>Names Ascending order</button>
   
        <div className="searchBarItems">     
          <div>Hae Tuotteita</div>
            <form>
              <input type="text" />
            <button>Search</button>
          </form>
        </div>   

        <button className="searchButton" onClick={ ()=>props.priceDes()}>Price Decending order</button>
        <button className="searchButton" onClick={ ()=>props.priceAsc()}>Price Ascending order</button>
    </div>
  );
}
