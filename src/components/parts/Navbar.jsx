import React from 'react'
import {motion} from 'framer-motion'
import '../styles/style.css'
import { social_media, logo } from '../../assets'

const Navbar = () => {

  return (
    <nav>
        <motion.div initial={{x:"-100vw", opacity:0}}
        animate={{x: 0, opacity: 1,
            transition:{delay: 0.4, duration:0.3}}}
        final className='page-links'>
            <a href='#home'>Home</a>
            <a href='#projects'>Projects</a>
            <a href='#achievements'>Achievements</a>
        </motion.div>
        <motion.div initial={{y: "-100vh", opacity:0}}
        animate={{y:0, opacity: 1, transition:{delay: 0.7, duration:0.3}}} className='logo'>
            <img src={logo}/>
        </motion.div>
        <motion.div initial={{x: "100vh", opacity:0}}
        animate={{x:0, opacity: 1, transition:{delay: 1.1, duration:0.3}}} className='social-links'>
            {
                social_media.map((media, index) => (
                    <a key={index} href={media.link}>
                        <img src={media.icon}/>
                    </a>
                ))
            }
        </motion.div>
    </nav>
  )
}

export default Navbar
