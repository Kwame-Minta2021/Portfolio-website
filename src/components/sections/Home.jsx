import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import Lottie from 'react-lottie';
import '../styles/style.css'
import animationData from './lotty/animation_lnuf1fjg';

const defaultOptions = {
    loop: 10000,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const Home = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 675px)");
        setIsMobile(mediaQuery.matches);
        const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
    }, []);

    return (
        <section id='home'
        >
            <motion.div initial={{opacity: 0, x: "-50vw"}}
            animate={{opacity: 1, x: 0, transition: {delay: 1.4, duration: 0.8, ease: "easeOut"}}}
			className='home-left'>
                <h1>
                    Hi! I'm <span>Fredrick Minta Newton</span>
                </h1>
                <h2>
                    This portfolio showcases a range of projects
					I have worked on. It also contains my
					experiences, demonstrating my
					proficiency in designing circuits and coding 
					firmware to turn concepts into functional hardware 
					solutions. This portfolio serves as a testament to 
					my abilities and innovative approach to computer
					engineering.
                </h2>
            </motion.div>
            <motion.div className='home-right' initial={{opacity: 0, x: "50vw"}}
            animate={{opacity: 1, x: 0, transition: {delay: 1.4, duration: 0.8, ease: "easeOut"}}}>
                <Lottie options={defaultOptions}
                height={!isMobile?400:200} width={!isMobile?400:270}
                />
            </motion.div>
        </section>
    )
}

export default Home
