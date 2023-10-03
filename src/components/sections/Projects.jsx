import React from 'react'
import '../styles/style.css'
import Card from '../parts/Card'
import { projects } from '../../constants'
import {motion, useScroll} from 'framer-motion'

const CardCollection = () => {
    return(
        <div className='project-collection'>
            {
                projects.map((project, key) => (
                    <Card name={project.name}
                    image={project.image}/>
                ))
            }
        </div>
    )
}

const Projects = () => {

    const scrollAnimation = useScroll()
    return (
        <section id='projects'>
            <h1>My Projects</h1>
            <CardCollection/>
        </section>
    )
}

export default Projects
