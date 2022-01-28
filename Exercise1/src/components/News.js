import React from 'react';
import logo from './man.jpg';

export default function News() {
  return (
            <div className="News-Container">
              <div className="News-item"> 
                  <h2>Tässäpä tarina!</h2>          
                    <img src={logo} />
                    <li>HS aivan hämillään!</li>
                  <p className="Title">THIS MAN has saved cookies from a burning building!</p>
                <div>Click to see his story and opinions on chocolate cookies!</div>                          
              </div>
            </div>
);}
