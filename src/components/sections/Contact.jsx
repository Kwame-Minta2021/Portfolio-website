import React from 'react'
import {motion} from 'framer-motion'
import '../styles/style.css'

const pageVariant = {
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1
        }
    },
    hidden: {
        opacity: 0,
        x: "-100vw"
    },
    exit: {
        opacity: 0,
        x: "100vw"
    }
}

const Contact = () => {
    return (
        <motion.section id='contact'
        >
            Contact
        </motion.section>
    )
}

export default Contact
