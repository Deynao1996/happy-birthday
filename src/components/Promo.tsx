'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ImageSlider from './ImageSlider'

export default function Promo() {
  useGSAP(() => {
    //!No scope
    gsap.to('.transition-block', {
      width: '0%',
      stagger: 0.05,
      duration: 1,
      delay: 0.5,
      ease: 'circ.inOut'
    })
    gsap.from('.promo-container', {
      x: 50,
      duration: 2,
      delay: 0.5,
      ease: 'circ.inOut'
    })
  })

  return (
    <div className="container flex flex-col xl:flex-row-reverse xl:justify-between promo-container">
      <div className="text-5xl font-bold tracking-tight flex flex-col justify-items-end uppercase items-end mt-20 lg:text-8xl lg:tracking-wider lg:leading-[5rem] font-orbitron">
        <h2 className="text-stroke">Journey</h2>
        <h3 className="text-stroke">
          <sup>★</sup>continues,
        </h3>
        <h4>the best</h4>
        <h5 className="text-stroke">pages are</h5>
        <h6 className="text-stroke">yet to</h6>
        <p>come</p>
      </div>
      <div className="flex justify-center items-center">
        <ImageSlider />
      </div>
    </div>
  )
}
