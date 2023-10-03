import React, {Suspense} from 'react'
import {motion} from 'framer-motion'
// import Arduino from '../canvas/Arduino'
import '../styles/style.css'

const Home = () => {
    return (
        <section id='home'
        >
            <motion.div initial={{opacity: 0, x: "-50vw"}}
            animate={{opacity: 1, x: 0, transition: {delay: 1.4, duration: 0.5}}} className='home-left'>
                <h1>
                    Hi! I'm <span>Fredrick Minta Newton</span>
                </h1>
                <h2>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Repellat beatae, vitae,
                    dicta, voluptatibus omnis asperiores iste
                    ea fuga tempore veritatis provident. Sint
                    esse quaerat culpa minima quod debitis?
                    Magnam, tempore?
                </h2>
            </motion.div>
            <div className='home-right'>
                {/* <Arduino/> */}
            </div>
        </section>
    )
}

export default Home
