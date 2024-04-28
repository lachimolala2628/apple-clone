import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'

const Highlights = () => {

    useGSAP(() => {
        gsap.to(
            '#title',
            {
                opacity: 1,
                y: 0
            }
        )
        gsap.to(
            '.link',
            {
                opacity: 1,
                y: 0,
                stagger: 0.25,
                duration: 1,
            }
        )
    })

    return (
        <>
            <section id='hightlights' className='w-screen overlfow-hidden h-full common-padding bg-zinc'>
                <div className='screen-max-width'>
                    <div className="w-full items-end md:flex justify-between mb-12">
                        <h1 id='title' className='section-heading'>
                            Get the hightlights.
                        </h1>

                        <div className='flex flex-wrap items-end gap-5'>
                            <p className='link'>
                                watch the film
                                <img src={watchImg} className='ml-2' alt="watch" />
                            </p>
                            <p className='link'>
                                watch the event
                                <img src={rightImg} className='ml-2 pt-1' alt="right" />
                            </p>
                        </div>
                    </div>
                    <VideoCarousel />
                </div>
            </section>
        </>
    )
}

export default Highlights