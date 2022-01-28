import React from 'react';

export default function BreakingNews() {
  return <div> 
            <div className="flex-breakingnews">
                <div className="breaking-title">PÄIVÄN TIMANTTI:</div>
                <div className="breaking-items"> Tutkija kertoo: 6 kuppia kahvia päivässä voi olla liikaa!</div>
            </div>

            <div className="flex-breakingnews">
                <div className="breaking-title">PÄIVÄN TIMANTTI:</div>
                <div className="breaking-items">Aatu Huttula on todettu eläväksi legendaksi!</div>
            </div>

            <div className="flex-breakingnews flex-advert">
                <div className="breaking-title">Mainos: </div>
                <div className="breaking-items">Numerolla 23 Aatu Huttula eduskuntaan, Spagettipuolue (Vahva centteri)</div>
            </div>
            
         </div>;
}
