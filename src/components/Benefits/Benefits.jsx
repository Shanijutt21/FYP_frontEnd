import React from 'react'
import "./Benefits.css"
import {benefitsData} from "../../data/benefitsData"
import RightArrow from "../../assets/rightArrow.png"

const Benefits = () => {
  return (
    <div className="benefits" id='benefits'>
        <div className="benefits-header">
            <span className='stroke-text'>Experience</span>
            <span>The</span>
            <span className='stroke-text'>Benefits</span>
        </div>
        <div className="benefits-categories">
          {benefitsData.map((benefits) => {
            return (
              <div className="category">
                {benefits.image}
                <span>{benefits.heading}</span>
                <span>{benefits.details}</span>
                <div className="visit"><span>Visit</span><span><img src={RightArrow} alt="arrow" /></span></div>
              </div>
            );
          })}
        </div>
    </div>
  )
}

export default Benefits
