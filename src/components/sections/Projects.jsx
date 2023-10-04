import React from 'react'
import Card from '../parts/Card'
import { projects } from '../../constants'
import {motion} from 'framer-motion'
import {fadeIn} from '../../utils/motion'

const CardCollection = () => {
    return(
        <div className='project-collection'>
            {
                projects.map((project, index) => (
                    <Card name={project.name} key={index}
                    index={index} image={project.image}/>
                ))
            }
        </div>
    )
}

const Projects = () => {

    return (
        <motion.section id='projects' className='project_card'
        variants={fadeIn('right', 0.1, 0.4)} initial='hidden'
        whileInView='visible'
        viewport={{once: true}}>
            <h1 className='section-title'>My Projects</h1>
            <CardCollection/>
        </motion.section>
    )
}

export default Projects
