import React from 'react'
import '../styles/experience.css'
import { experience } from '../../constants'
import {motion} from 'framer-motion'
import {fadeIn} from '../../utils/motion'

const Experience = () => {
  return (
    <section id='experience'>
      <h1>Experience</h1>
      
      <div className='timeline'>
        {
          experience.map((experience, index) => (
            <motion.div key={index}
            variants={fadeIn((index % 2 === 0) ? 'left' : 'right' , 0, 0.5)}
            initial='hidden'
            whileInView='visible'
            viewport={{once: true}}
            className={`container ${(index % 2 === 0) ? 'right' : 'left' }`}>
              <div className='content'>
                <h2>{experience.name}</h2>
                <h4>{experience.duration}</h4>
                <h4>{experience.place}</h4>
              </div>
            </motion.div>
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
