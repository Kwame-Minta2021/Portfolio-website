import '../styles/experience.css'
import { leadership_role } from '../../constants'
import React, { useState } from "react";

const Leadership = () => {
  return (
    <div id='leadership'>
      <div className='upper'>
        {
          leadership_role.map((role, index) => (
            <div className={`${(index % 2 === 0 ? 'contain' : 'hidden')}`} key={index}>
              <div className='l_content'>
                <h1>{role.position}</h1>
                <h4>{role.group}</h4>
                <h4>{role.duration}</h4>
              </div>
              <div className='triangle-down'></div>
            </div>
          ))
        }
      </div>
      <div className='horizontal-timeline'></div>
      <div className='lower'>
        {
          leadership_role.map((role, index) => (
            <div className={`${(index % 2 === 0 ? 'hidden' : 'contain')}`} key={index}>
              <div className='l_content'>
                <h1>{role.position}</h1>
                <h4>{role.group}</h4>
                <h4>{role.duration}</h4>
              </div>
              <div className='triangle-up'></div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Leadership
