import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {motion} from 'framer-motion'
import '../styles/style.css'

const Navbar = () => {

  return (
    <nav>
        <motion.div initial={{x:"-100vw", opacity:0}}
        animate={{x: 0, opacity: 1, transition:{delay: 0.4, duration:0.3}}} final className='page-links'>
            <a href='#home'>Home</a>
            <a href='#contact'>Contact</a>
        </motion.div>
        <motion.div initial={{y: "-100vh", opacity:0}}
        animate={{y:0, opacity: 1, transition:{delay: 0.7, duration:0.3}}} className='logo'>
            <img src='desktop_pc/textures/Material.074_27_baseColor.png'/>
        </motion.div>
        <motion.div initial={{x: "100vh", opacity:0}}
        animate={{x:0, opacity: 1, transition:{delay: 1.1, duration:0.3}}} className='social-links'>
            <a href='/'>
                <img src='social_icons/facebook.png'/>
            </a>
            <a href='/'>
                <img src='social_icons/linkedin.png'/>
            </a>
            <a href='/'>
                <img src='social_icons/twitter.png'/>
            </a>
        </motion.div>
    </nav>
  )
}

export default Navbar
