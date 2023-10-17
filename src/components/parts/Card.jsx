import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../../utils/motion'

const Card = ({name, image, index}) => {

    return (
        <motion.div id={`card-${index}`} className='project_card'
        variants={fadeIn('left', 0.2, 0.4)} initial='hidden'
        whileInView='visible'
        viewport={{once: true}}>
            <div className='text-container'>
                <h1>
                    {name}
                </h1>
            </div>
            <img src={image} alt={name}/>
        </motion.div>
    )
}

export default Card
