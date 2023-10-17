import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import '../styles/style.css'
import { contact_me } from '../../assets'
import Lottie from 'react-lottie';
import animationData from './lotty/animation_lnloonue';

const pageVariant = {
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1
        }
    },
    hidden: {
        opacity: 0,
        scale: 0.5,
    }
}

const defaultOptions = {
    loop: 10000,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const Contact = () => {
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
        <motion.section id='contact'
        variants={pageVariant} initial='hidden'
        animate='visible'>
            <h1 className="section-title">
                Contact Me
            </h1>
            <div className='container'>
                <div className='left'>
                    <div className='icons'>
                        {
                            contact_me.map((contact, index) => (
                                <img key={index} src={contact.icon}/>
                            ))
                        }
                    </div>
                    <div className='details'>
                        {
                            contact_me.map((contact, index) => (
                                <div key={index} className='content'>
                                    <h4>{contact.description}</h4>
                                    <h5>{contact.detail}</h5>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='right'>
                    <Lottie options={defaultOptions}
                    height={!isMobile?400:150} width={!isMobile?400:150}
                    />
                </div>
            </div>
        </motion.section>
    )
}

export default Contact
