import React from 'react'
import '../styles/experience.css'
import { experience } from '../../constants'

const Experience = () => {
  return (
    <section id='experience'>
      <h1>Experience</h1>
      
      <div className='timeline'>
        {
          experience.map((experience, index) => (
            <div className={`container ${(index % 2 === 0) ? 'right' : 'left' }`}>
              <div className='content'>
                <h2>{experience.name}</h2>
                <h4>{experience.duration}</h4>
                <h4>{experience.place}</h4>
              </div>
            </div>
          ))
        }
      </div>
        {/* <div className='container left'>
          <div className='content'></div>
        </div> */}
    </section>
  )
}

export default Experience
