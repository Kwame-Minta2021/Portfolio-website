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
                <Lottie options={defaultOptions}
                height={!isMobile?400:200} width={!isMobile?400:270}
                />
            </div>
        </section>
    )
}

export default Home
