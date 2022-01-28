import Buttons from './components/Buttons'
import BreakingNews from './components/BreakingNews'
import News from './components/News'
import Sidebar from './components/SideNewsBar'
import './App.css';



function App() {

  //haetaan tietoja tästä
  return (
    <div className="App">
      <body>
        <Buttons/>          {/* topmenu buttons */}           
            <BreakingNews/>   {/*headlines after the topmenu, also the advert. */}
                <div className="Main-container">                        
              <News/>   {/* frontpage headnews */}                     
            <Sidebar/> {/* Sidebar most read news */}                      
          </div>
      </body> 
    </div>
  );
}

export default App;
