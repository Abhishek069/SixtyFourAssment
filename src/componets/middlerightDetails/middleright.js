import React from "react";
import Timeline from './virticalLine/virtical'
import './middleright.css'


function MiddleRight(){
    return(
        <div className="middle-right-main-container">
            <div className="header-for-middle-right">
                <h3>Recent Releases</h3>
                <select className="dropdown" id="dropdown">
                    <option value="volvo">India</option>
                    <option value="saab">Usa</option>
                    <option value="mercedes">Amrica</option>
                </select>
            </div>
            <hr/>
            <Timeline/>

        </div>
    )
}

export default MiddleRight