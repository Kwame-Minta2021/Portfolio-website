import React, { useState } from 'react'
import { skills } from '../../constants'
import {motion} from 'framer-motion'

const languages = skills.programming_languages
const tools = skills.engineering_tools_and_software

const Tools_and_Tech = () => {
    const [isHovered, setisHovered] = useState(false)

  return (
    <section id='tools_and_tech'>
        <h1 className='section-title'>Languages and Tools</h1>
        <div className='languages'>
            <h1 className='section-subtitle'>Languages</h1>
            <div className='language-display'>
                {
                    languages.map((language, index) => (
                        <div key={index}>
                            <motion.div
                            onHoverStart={() => setisHovered}
                            whileHover={{y: [0, -10, 0], transition:{duration: 1, repeat:Infinity}}}
                            className='language-ball' key={index}
                            id={`lang-${index}`}>
                                <img src={language.image} alt={language.name}
                                title={language.name}/>
                            </motion.div>
                            {isHovered && <motion.div
                            animate={{scale: [1, 0.3, 1], transition:{duration: 1, repeat:Infinity}}}
                            className='ball-shadow'>
                            </motion.div>}
                            {isHovered || <div className='ball-shadow'></div>}
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='tools'>
            <h1 className='section-subtitle'>Tools</h1>
            <div className='tools-display'>
                {
                    tools.map((tool, index) => (
                        <div className='tool-img' key={index}>
                            <img src={tool.image} alt={tool.name}
                            title={tool.name}/>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Tools_and_Tech
