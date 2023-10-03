import React from 'react'
import {motion} from 'framer-motion'
import '../styles/style.css'

const Card = ({name, image}) => {
    console.log("Name", name)

    return (
        <div className='project_card'>
            <h4>
                {name}
            </h4>
            <img src={image} alt={name}/>
        </div>
    )
}

export default Card
