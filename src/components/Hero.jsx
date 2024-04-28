import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'

const Hero = () => {

    const [videoSrc, setVideoSrc] = useState(
        window.innerWidth < 760 ? smallHeroVideo : heroVideo
    );

    const handleVideoSrcSet = () => {
        if (window.innerWidth > 760) {
            setVideoSrc(smallHeroVideo)
        }
        else {
            setVideoSrc(heroVideo)
        }
    };

    useEffect(() => {

        window.addEventListener('resize', handleVideoSrcSet)
        return () => {
            window.removeEventListener('resize', handleVideoSrcSet)
        }
    }, [])


    useGSAP(() => {
        gsap.to(
            '#hero',
            {
                opacity: 1,
                delay: 2
            }
        )
        gsap.to(
            '#cta-btn',
            {
                delay: 2,
                opacity: 1,
                y: -50,
            }
        )
    }, []);

    return (
        <>
            <section className='w-full nav-height bg-black relative'>
                <div className='h-5/6 w-full flex-center flex-col'>
                    <p id='hero' className='hero-title mt-32'>iPhone 15 Pro</p>
                    <div className='md:w-10/12 w-9/12'>
                        <video autoPlay muted playsInline={true} className='pointer-event-none'>
                            <source src={videoSrc} type='video/mp4' />
                        </video>
                    </div>
                    <div id='cta-btn' className='flex flex-col items-center opacity-0 translate-y-20 pt-20'>
                        <a href="#highlights" className='btn'>Buy</a>
                        <p className='font-normal text-xl'>From $199/month or $999</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero