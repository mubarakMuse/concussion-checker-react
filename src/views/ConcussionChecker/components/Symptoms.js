import React, { Component } from 'react';
import {symptomsData} from '/Users/mubarakmuse/Desktop/personal_project/my-app/src/data/symptomsData.js'

export function Symptoms(props) {
    const checked = event => {
        let checked = event.target.checked;
        let id = event.target.id;
        let badge = "badge_" + id;
        if (checked) {
            document.getElementById(badge).style.backgroundColor = '#ff8f0f';//orange
            props.updateRiskTotal( + symptomsData[id].risk);
            
        }
        else {
            document.getElementById(badge).style.backgroundColor = '#ffffff';// white
            props.updateRiskTotal( - symptomsData[id].risk);
        }
        props.setTotalPossibleRisk(totalPossibleRisk)
    }
    let totalPossibleRisk = 0;
    symptomsData.forEach((symptom)  => totalPossibleRisk+= symptom.risk)
    

    const tags = symptomsData.sort((a, b) => (a.risk > b.risk) ? 1 : -1).map((symptom, i)  => 
    <label key ={'key' +i} className="checkbox-inline">
        <input id= {i} type="checkbox" value="" onClick= {checked}/>
         <span id={"badge_" + i} className="badge">{symptom.name}</span>
    </label> )
       
        return(
            <>
            {tags}
            </>
        );
    };

export default Symptoms;