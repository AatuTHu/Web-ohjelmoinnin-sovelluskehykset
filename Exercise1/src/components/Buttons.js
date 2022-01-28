import React from 'react';
import { FaGripLines, FaIdBadge } from "react-icons/fa"
export default function Header(props) {

    console.log(props);

  return <div>  
          <div class="Topmenu-container">
                <div class="flex-item Title">Helsingin sanomat</div>
                <div class="flex-item">Etusivu</div>
                <div class="flex-item">Uutiset</div>
                <div class="flex-item">Lehdet</div>
                <div class="flex-item">Asiakaspalvelu</div>

            <div class="flex-item left"></div>

              
                  <div class="flex-item SubscribeButton">Tilaa <FaIdBadge/></div>
                  <div class="flex-item">Kirjaudu</div>
                  <div class="flex-item OptionsButton">Valikko <FaGripLines/></div>
              
          </div>  
  </div>;

}
