import { leadership_role } from '../../constants'
import React, { useState } from "react";
import {motion} from 'framer-motion'
import {fadeIn} from '../../utils/motion'

const Leadership = () => {
  return (
    <motion.div id='leadership'
    variants={fadeIn('right', 0.2, 0.5)} initial='hidden'
    whileInView='visible'
    viewport={{once: true}}>
      <h1 className='section-title'>Leadership Roles</h1>
      <div className='upper'>
        {
          leadership_role.map((role, index) => (
            <div className={`${(index % 2 === 0 ? 'contain' : 'hidden')}`} key={index}>
              <div className='l_content'>
                <h1>{role.position}</h1>
                <h4>{role.group}</h4>
                <h4 id='duration'>{role.duration}</h4>
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
                <div className='triangle-up'></div>
                <h1>{role.position}</h1>
                <h4>{role.group}</h4>
                <h4>{role.duration}</h4>
              </div>
            </div>
          ))
        }
      </div>
    </motion.div>
  )
}

export default Leadership
